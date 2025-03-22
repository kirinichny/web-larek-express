import { HTTP_STATUS } from '../constants';

class BadRequestError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = HTTP_STATUS.BAD_REQUEST;
  }
}

export default BadRequestError;
