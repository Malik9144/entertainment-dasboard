import { Request, Response, NextFunction } from 'express';
import logger from '../config/logger.js';

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  logger.error({
    error: err,
    statusCode,
    path: req.path,
    method: req.method,
  });

  res.status(statusCode).json({
    success: false,
    message,
  });
};
