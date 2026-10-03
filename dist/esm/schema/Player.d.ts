import { Schema, MapSchema } from '@colyseus/schema';
export declare class Player extends Schema {
    id: string;
    name: string;
    color: string;
    isReady: boolean;
    resources: MapSchema<number, string>;
    rates: MapSchema<number, string>;
    limits: MapSchema<number, string>;
    wildcards: number;
    victoryPoints: number;
    roadsBuilt: number;
    longestRoadPath: number;
    armySize: number;
    settlementsBuilt: number;
    citiesBuilt: number;
    longestRoad: boolean;
    largestArmy: boolean;
    constructor();
}
