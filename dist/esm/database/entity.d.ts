export interface HexEntity {
    id: string;
    x: number;
    y: number;
    q: number;
    r: number;
    resourceType?: string;
    numberToken?: number;
    modificator?: string;
}
export interface GameEntity {
    id: number;
    name: string;
    picture: string;
    special: string;
}
export type Rule = 'one' | 'many' | 'none';
export interface FogRule {
    wood?: Rule;
    brick?: Rule;
    sheep?: Rule;
    wheat?: Rule;
    ore?: Rule;
    gold?: Rule;
}
export interface Special {
    fogRule?: FogRule;
}
export interface PortEntity {
    roadId: string;
    resourceType?: string;
}
export interface RoadEntity {
    id: string;
}
export interface MapData {
    name: string;
    tiles: HexEntity[];
    ports: PortEntity[];
    special: Special;
}
export declare function isHexEntity(value: any): value is HexEntity;
export declare function isPortEntity(value: any): value is PortEntity;
export declare function isSpecial(value: any): value is Special;
