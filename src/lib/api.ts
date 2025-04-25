import { ValidationError } from './validation';

export interface ApiError {
  message: string;
  code?: string;
  validationErrors?: ValidationError[];
}

export class ApiException extends Error {
  constructor(
    public message: string,
    public code?: string,
    public validationErrors?: ValidationError[]
  ) {
    super(message);
    this.name = 'ApiException';
  }
}

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiException(
      errorData.message || 'An error occurred',
      errorData.code,
      errorData.validationErrors
    );
  }
  return response.json();
}

export async function fetchApi<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  try {
    const response = await fetch(endpoint, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    });

    return handleApiResponse<T>(response);
  } catch (error) {
    if (error instanceof ApiException) {
      throw error;
    }
    throw new ApiException('Network error occurred');
  }
} 