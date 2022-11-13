import { IResponse } from './IResponse';

export class BaseResponse implements IResponse {
    statusCode: Number;
    result: any;
    error: any;
}