import { Schema } from '@colyseus/schema';
export declare class WildCard extends Schema {
    id: string;
    playerId: string;
    isUsed: boolean;
    type: 'knight' | 'monopoly' | 'two_resources' | 'two_roads' | 'point';
    constructor(type: 'knight' | 'monopoly' | 'two_resources' | 'two_roads' | 'point');
}
