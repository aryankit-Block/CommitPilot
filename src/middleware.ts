import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { config as appConfig } from './config';

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  // Rate limiting
  const ip = request.headers.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const windowMs = appConfig.rateLimit.window * 1000;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
  } else {
    const rateLimit = rateLimitMap.get(ip)!;
    if (now > rateLimit.resetTime) {
      rateLimit.count = 1;
      rateLimit.resetTime = now + windowMs;
    } else {
      rateLimit.count++;
      if (rateLimit.count > appConfig.rateLimit.maxRequests) {
        return new NextResponse('Too Many Requests', { status: 429 });
      }
    }
  }

  // CORS headers
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Content-Security-Policy', "default-src 'self'");

  return response;
}

export const config = {
  matcher: '/api/:path*',
}; 