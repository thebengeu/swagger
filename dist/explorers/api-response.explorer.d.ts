import { Type } from '@nestjs/common';
import { SchemaObject } from '../interfaces/open-api-spec.interface';
export declare const exploreGlobalApiResponseMetadata: (schemas: Record<string, SchemaObject>, metatype: Type<unknown>) => {
    responses: {
        [x: number]: Pick<Record<string, any>, string>;
    };
};
export declare const exploreApiResponseMetadata: (schemas: Record<string, SchemaObject>, instance: object, prototype: Type<unknown>, method: Function) => {
    [x: number]: Pick<Record<string, any>, string>;
};
