import { HTTP_STATUS } from '../constants';

class ConflictError extends Error {
  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = HTTP_STATUS.CONFLICT;
  }
}

export default ConflictError;
