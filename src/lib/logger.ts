type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogMessage {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, any>;
}

class Logger {
  private static instance: Logger;
  private isDevelopment: boolean;

  private constructor() {
    this.isDevelopment = process.env.NODE_ENV === 'development';
  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private formatMessage(level: LogLevel, message: string, context?: Record<string, any>): LogMessage {
    return {
      level,
      message,
      timestamp: new Date().toISOString(),
      context,
    };
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>) {
    const logMessage = this.formatMessage(level, message, context);
    
    if (this.isDevelopment) {
      console.log(JSON.stringify(logMessage, null, 2));
    } else {
      // In production, you might want to send logs to a logging service
      console.log(JSON.stringify(logMessage));
    }
  }

  public debug(message: string, context?: Record<string, any>) {
    if (this.isDevelopment) {
      this.log('debug', message, context);
    }
  }

  public info(message: string, context?: Record<string, any>) {
    this.log('info', message, context);
  }

  public warn(message: string, context?: Record<string, any>) {
    this.log('warn', message, context);
  }

  public error(message: string, context?: Record<string, any>) {
    this.log('error', message, context);
  }
}

export const logger = Logger.getInstance(); 