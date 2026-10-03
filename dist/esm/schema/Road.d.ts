import { Schema, ArraySchema } from '@colyseus/schema';
export declare class Position extends Schema {
    x: number;
    y: number;
}
export declare class PositionOnTile extends Schema {
    tileId: string;
    index: number;
    constructor(tileId: string, index: number);
}
export declare class Road extends Schema {
    id: string;
    playerId: string;
    portId: string;
    from: Position;
    to: Position;
    tiles: ArraySchema<PositionOnTile>;
    isEndPoint: boolean;
}
