// base-error.ts
import { Request, Response, NextFunction } from 'express';
import { ValidateError } from 'tsoa';
import { ZodError } from 'zod';
import dotenv from "dotenv";
dotenv.config();
export class CustomError extends Error {
  statusCode: number;
  public message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export function errorLogger(err: any, globalLogFields: any) {
  const logObject = {
    severity: "ERROR",
    timestamp: new Date().toISOString(),
    message: err?.error?.message,               // add message field
    httpRequest: {                              // use httpRequest for built in HTTP log grouping
      requestMethod: err?.method,
      requestUrl: err?.url,
    },
    error: {
      status: err?.error?.status,
      details: err?.error?.details,
      stack: err?.error?.stack,
    },
    ...globalLogFields,
  };

  // Single line JSON
  console.error(JSON.stringify(logObject, null, 2));
}

interface ErrorResponse {
  message: string;
  status: number;
  details?: any[];
  stack?: string;
}

export const errorHandler = (
  err: Error | ValidateError | ZodError | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors: any;
  const project = process.env.GCP_PROJECT_ID;
  // Handle TSOA validation errors
  if (err instanceof ValidateError) {
    statusCode = 422;
    message = 'Validation Failed';
    errors = Object.keys(err?.fields).map((field) => ({
      field,
      message: err?.fields[field].message,
    }));
  }
  // Handle Zod validation errors
  else if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errors = err.issues.map((error) => ({
      field: error.path.join('.'),
      message: error.message,
    }));
  }
  // Handle custom AppError
  else if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  else if (err instanceof Error) {
    message = err.message
  }

  // Build error response
  const errorResponse: ErrorResponse = {
    message,
    status: statusCode,
  };

  if (errors) {
    errorResponse.details = errors;
  }

  errorResponse.stack = err.stack;

  // Build structured log messages as an object.
  const globalLogFields = {};

  errorLogger({ error: errorResponse, url: req.url, method: req.method }, globalLogFields);
  res.status(statusCode).json(errorResponse);
};

