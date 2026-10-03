export interface HexEntity {
      id: string;
      x: number;
      y: number;
      q: number; // Axial coordinates
      r: number; // Axial coordinates
      resourceType?: string; // wood, brick, sheep, wheat, ore, desert
      numberToken?: number; // 2-12 (7 исключен)
      modificator?: string; // для особых условий на тайлах, например, для блокировки начальной расстановки городов
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
    fogRule?: FogRule,
}

export interface PortEntity {
    roadId: string;
    resourceType?: string; // wood, brick, sheep, wheat, ore (для 2:1)
}

export interface RoadEntity {
    id: string
}

export interface MapData {
    name: string;
    tiles: HexEntity[];
    ports: PortEntity[];
    special: Special
}

export function isHexEntity(value: any): value is HexEntity {
    return typeof value === 'object' && value !== null
        && typeof value.id === 'string'
        && typeof value.q === 'number'
        && typeof value.r === 'number'
        && typeof value.x === 'number'
        && typeof value.y === 'number';
}

export function isPortEntity(value: any): value is PortEntity {
    return typeof value === 'object' && value !== null
        && typeof value.roadId === 'string';
}

export function isSpecial(value: any): value is Special {
    if (typeof value !== 'object') {
        return false;
    }
    if (value.fogRule === undefined) {
        return true; // fogRule может быть не задано
    }
    return typeof value.fogRule === 'object' 
        && value.fogRule !== null;
}