import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { securityMiddleware, rateLimit, corsConfig } from '@/lib/security';

// Simple in-memory store for rate limiting
const ipRequests = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  // Apply security headers
  // We apply security headers in both development and production by calling the securityMiddleware function
  const response = securityMiddleware(request);

  // Rate limiting (apply only in production)
  if (process.env.NODE_ENV === 'production') {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'anonymous';
    const now = Date.now();
    const requestData = ipRequests.get(ip);

    if (requestData) {
      if (now > requestData.resetTime) {
        // Reset if window has passed
        ipRequests.set(ip, { count: 1, resetTime: now + rateLimit.windowMs });
      } else if (requestData.count >= rateLimit.max) {
        // Rate limit exceeded
        return new NextResponse('Too Many Requests', { status: 429 });
      } else {
        // Increment request count
        requestData.count++;
        ipRequests.set(ip, requestData);
      }
    } else {
      // First request from this IP
      ipRequests.set(ip, { count: 1, resetTime: now + rateLimit.windowMs });
    }
  }

  // CORS handling
  const origin = request.headers.get('origin');
  if (origin) {
    if (corsConfig.origin.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', corsConfig.methods.join(','));
      response.headers.set('Access-Control-Allow-Headers', corsConfig.allowedHeaders.join(','));
      response.headers.set('Access-Control-Max-Age', corsConfig.maxAge.toString());
      if (corsConfig.credentials) {
        response.headers.set('Access-Control-Allow-Credentials', 'true');
      }
    } else {
      return new NextResponse('Not allowed by CORS', { status: 403 });
    }
  }

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { status: 204 });
  }

  return response;
}

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 