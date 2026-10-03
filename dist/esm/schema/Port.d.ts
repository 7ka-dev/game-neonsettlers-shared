import { Schema } from '@colyseus/schema';
export declare class Port extends Schema {
    id: string;
    type: string;
    constructor(id: string, type: string);
}
