import { GameState } from "../schema/GameState";
import { Player } from "../schema/Player";
import { Road } from '../schema/Road';
import { Settlement } from '../schema/Settlement';
export declare function getAvailableSettlementPoints(game: GameState, playerId: string): Settlement[];
export declare function getAvailableRoads(game: GameState, playerId: string): Road[];
export declare function getAvailableSetupSettlements(game: GameState, skipSpawnFilter?: boolean): Settlement[];
export declare function getAvailableSetupRoads(game: GameState, settlement?: Settlement): Road[];
export declare function isLegalExchange(give: {
    [key: string]: number;
}, take: {
    [key: string]: number;
}, rates: {
    [key: string]: number;
}): boolean;
export declare function hasResourcesForDeal(player: Player, required: Record<string, number>): boolean;
