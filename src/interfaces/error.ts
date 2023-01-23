import { type HttpStatusCode } from 'axios';

export interface ErrorType {
  message: string;
  name: string;
  code: string;
  request: object;
  response: {
    status: HttpStatusCode;
    statusText: string;
    data: {
      status: string;
      message: string;
    };
  };
}
