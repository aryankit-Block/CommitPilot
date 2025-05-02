import { validationPatterns, sanitizeInput } from './security';

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateEmail(email: string): boolean {
  const sanitizedEmail = sanitizeInput(email);
  if (!validationPatterns.email.test(sanitizedEmail)) {
    throw new ValidationError('Invalid email format');
  }
  return true;
}

export function validatePassword(password: string): boolean {
  const sanitizedPassword = sanitizeInput(password);
  if (!validationPatterns.password.test(sanitizedPassword)) {
    throw new ValidationError(
      'Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character'
    );
  }
  return true;
}

export function validateUsername(username: string): boolean {
  const sanitizedUsername = sanitizeInput(username);
  if (!validationPatterns.username.test(sanitizedUsername)) {
    throw new ValidationError('Username must be 3-16 characters long and contain only letters, numbers, underscores, and hyphens');
  }
  return true;
}

export function validateInput<T extends Record<string, unknown>>(
  data: T,
  schema: Record<keyof T, (value: unknown) => boolean>
): boolean {
  for (const [key, validator] of Object.entries(schema)) {
    try {
      validator(data[key as keyof T]);
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new ValidationError(`${key}: ${error.message}`);
      }
      throw error;
    }
  }
  return true;
}

export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeObject(value as Record<string, unknown>);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized as T;
} 