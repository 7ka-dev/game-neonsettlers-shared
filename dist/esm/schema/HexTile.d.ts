import { Schema } from '@colyseus/schema';
export declare class HexTile extends Schema {
    id: string;
    resourceType: string;
    numberToken: number;
    x: number;
    y: number;
    q: number;
    r: number;
    setupSpawnAllowed: boolean;
    constructor();
}
