import { plainToInstance, instanceToPlain } from 'class-transformer';
import 'reflect-metadata';
import 'es6-shim';

interface ClassType<T> {
    new(): T;
}

/*
 * PT: Param Type
 * RT: Return Type
 */
export class ModelCast<PT, RT>{
    private readonly classType: ClassType<RT>

    public cast(dto: PT): RT {
        const data = instanceToPlain(dto);

        return plainToInstance(this.classType, data);
    }

}