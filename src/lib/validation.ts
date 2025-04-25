export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export const validateUsername = (username: string): boolean => {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
  return usernameRegex.test(username);
};

export const validateForm = (formData: Record<string, any>): ValidationResult => {
  const errors: ValidationError[] = [];

  if (formData.email && !validateEmail(formData.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address',
    });
  }

  if (formData.password && !validatePassword(formData.password)) {
    errors.push({
      field: 'password',
      message: 'Password must be at least 8 characters long',
    });
  }

  if (formData.username && !validateUsername(formData.username)) {
    errors.push({
      field: 'username',
      message: 'Username must be 3-16 characters long and can only contain letters, numbers, underscores, and hyphens',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}; 