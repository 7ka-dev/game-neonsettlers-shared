import { Schema, ArraySchema } from '@colyseus/schema';
export declare class Settlement extends Schema {
    id: string;
    playerId: string;
    isCity: boolean;
    x: number;
    y: number;
    tiles: ArraySchema<string>;
    setupSpawnAllowed: boolean;
}
