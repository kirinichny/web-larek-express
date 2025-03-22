import { NextFunction, Request, Response } from 'express';
import { ERROR_MESSAGES, HTTP_STATUS } from '../constants';

const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const {
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR,
  } = err;

  res.status(statusCode)
    .json({ error: message });
};

export default errorHandler;
