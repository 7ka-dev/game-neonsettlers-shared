import { Schema, type, ArraySchema } from '@colyseus/schema';

export class Port extends Schema {
    @type('string')
    id: string;

    @type('string')
    type: string;

    constructor (id: string, type: string) {
        super();
        this.id = id;
        this.type = type;
    }

}