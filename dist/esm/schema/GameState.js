var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Schema, MapSchema, ArraySchema, type } from '@colyseus/schema';
import { Player } from './Player';
import { HexTile } from './HexTile';
import { Road } from './Road';
import { Settlement } from './Settlement';
import { Dices } from './Dices';
import { WildCard } from './WildCard';
import { Port } from './Port';
export class GameState extends Schema {
    constructor() {
        super(...arguments);
        this.nameMap = 'common';
        this.players = new MapSchema();
        this.mapIsReady = false;
        this.hexTiles = new ArraySchema();
        this.roads = new ArraySchema();
        this.settlements = new ArraySchema();
        this.ports = new ArraySchema();
        this.currentPlayerId = '';
        // sessionId создателя комнаты — только он может кикать игроков в лобби
        this.ownerId = '';
        this.diceRoll = '';
        this.dices = new Dices();
        this.wildCards = new ArraySchema();
        this.gamePhase = 'setup';
        this.gameState = 'nothing';
        this.turnNumber = 0;
        this.bandit = '';
        this.robberyTargets = new ArraySchema();
        this.goldTarget = new MapSchema();
        this.withTimer = false;
        this.timerDuration = 60;
        this.isPrivateRoom = false;
    }
}
__decorate([
    type('string'),
    __metadata("design:type", Object)
], GameState.prototype, "nameMap", void 0);
__decorate([
    type({ map: Player }),
    __metadata("design:type", Object)
], GameState.prototype, "players", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Object)
], GameState.prototype, "mapIsReady", void 0);
__decorate([
    type([HexTile]),
    __metadata("design:type", Object)
], GameState.prototype, "hexTiles", void 0);
__decorate([
    type([Road]),
    __metadata("design:type", Object)
], GameState.prototype, "roads", void 0);
__decorate([
    type([Settlement]),
    __metadata("design:type", Object)
], GameState.prototype, "settlements", void 0);
__decorate([
    type([Port]),
    __metadata("design:type", Object)
], GameState.prototype, "ports", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "currentPlayerId", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "ownerId", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "diceRoll", void 0);
__decorate([
    type(Dices),
    __metadata("design:type", Object)
], GameState.prototype, "dices", void 0);
__decorate([
    type([WildCard]),
    __metadata("design:type", Object)
], GameState.prototype, "wildCards", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "gamePhase", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "gameState", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], GameState.prototype, "turnNumber", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], GameState.prototype, "bandit", void 0);
__decorate([
    type(['string']),
    __metadata("design:type", Object)
], GameState.prototype, "robberyTargets", void 0);
__decorate([
    type({ map: 'number' }),
    __metadata("design:type", Object)
], GameState.prototype, "goldTarget", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Boolean)
], GameState.prototype, "withTimer", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], GameState.prototype, "timerDuration", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Boolean)
], GameState.prototype, "isPrivateRoom", void 0);
