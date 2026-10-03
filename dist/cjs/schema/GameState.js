"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = void 0;
const schema_1 = require("@colyseus/schema");
const Player_1 = require("./Player");
const HexTile_1 = require("./HexTile");
const Road_1 = require("./Road");
const Settlement_1 = require("./Settlement");
const Dices_1 = require("./Dices");
const WildCard_1 = require("./WildCard");
const Port_1 = require("./Port");
class GameState extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.nameMap = 'common';
        this.players = new schema_1.MapSchema();
        this.mapIsReady = false;
        this.hexTiles = new schema_1.ArraySchema();
        this.roads = new schema_1.ArraySchema();
        this.settlements = new schema_1.ArraySchema();
        this.ports = new schema_1.ArraySchema();
        this.currentPlayerId = '';
        // sessionId создателя комнаты — только он может кикать игроков в лобби
        this.ownerId = '';
        this.diceRoll = '';
        this.dices = new Dices_1.Dices();
        this.wildCards = new schema_1.ArraySchema();
        this.gamePhase = 'setup';
        this.gameState = 'nothing';
        this.turnNumber = 0;
        this.bandit = '';
        this.robberyTargets = new schema_1.ArraySchema();
        this.goldTarget = new schema_1.MapSchema();
        this.withTimer = false;
        this.timerDuration = 60;
        this.isPrivateRoom = false;
    }
}
exports.GameState = GameState;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", Object)
], GameState.prototype, "nameMap", void 0);
__decorate([
    (0, schema_1.type)({ map: Player_1.Player }),
    __metadata("design:type", Object)
], GameState.prototype, "players", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Object)
], GameState.prototype, "mapIsReady", void 0);
__decorate([
    (0, schema_1.type)([HexTile_1.HexTile]),
    __metadata("design:type", Object)
], GameState.prototype, "hexTiles", void 0);
__decorate([
    (0, schema_1.type)([Road_1.Road]),
    __metadata("design:type", Object)
], GameState.prototype, "roads", void 0);
__decorate([
    (0, schema_1.type)([Settlement_1.Settlement]),
    __metadata("design:type", Object)
], GameState.prototype, "settlements", void 0);
__decorate([
    (0, schema_1.type)([Port_1.Port]),
    __metadata("design:type", Object)
], GameState.prototype, "ports", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "currentPlayerId", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "ownerId", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "diceRoll", void 0);
__decorate([
    (0, schema_1.type)(Dices_1.Dices),
    __metadata("design:type", Object)
], GameState.prototype, "dices", void 0);
__decorate([
    (0, schema_1.type)([WildCard_1.WildCard]),
    __metadata("design:type", Object)
], GameState.prototype, "wildCards", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "gamePhase", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "gameState", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], GameState.prototype, "turnNumber", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], GameState.prototype, "bandit", void 0);
__decorate([
    (0, schema_1.type)(['string']),
    __metadata("design:type", Object)
], GameState.prototype, "robberyTargets", void 0);
__decorate([
    (0, schema_1.type)({ map: 'number' }),
    __metadata("design:type", Object)
], GameState.prototype, "goldTarget", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], GameState.prototype, "withTimer", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], GameState.prototype, "timerDuration", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], GameState.prototype, "isPrivateRoom", void 0);
