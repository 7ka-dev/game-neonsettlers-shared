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
exports.Player = void 0;
const schema_1 = require("@colyseus/schema");
class Player extends schema_1.Schema {
    constructor() {
        super();
        this.id = '';
        this.name = '';
        this.color = '#FFFFFF';
        this.isReady = false;
        this.resources = new schema_1.MapSchema();
        this.rates = new schema_1.MapSchema();
        this.limits = new schema_1.MapSchema();
        this.wildcards = 0;
        this.victoryPoints = 0;
        this.roadsBuilt = 0;
        this.longestRoadPath = 0;
        this.armySize = 0;
        this.settlementsBuilt = 0;
        this.citiesBuilt = 0;
        this.longestRoad = false;
        this.largestArmy = false;
        this.resources.set('wood', 0);
        this.resources.set('brick', 0);
        this.resources.set('sheep', 0);
        this.resources.set('wheat', 0);
        this.resources.set('ore', 0);
        this.rates.set('wood', 4);
        this.rates.set('brick', 4);
        this.rates.set('sheep', 4);
        this.rates.set('wheat', 4);
        this.rates.set('ore', 4);
        this.limits.set("settlement", 5);
        this.limits.set("city", 4);
        this.limits.set("road", 15);
    }
}
exports.Player = Player;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Player.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Player.prototype, "color", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], Player.prototype, "isReady", void 0);
__decorate([
    (0, schema_1.type)({ map: 'number' }),
    __metadata("design:type", Object)
], Player.prototype, "resources", void 0);
__decorate([
    (0, schema_1.type)({ map: 'number' }),
    __metadata("design:type", Object)
], Player.prototype, "rates", void 0);
__decorate([
    (0, schema_1.type)({ map: 'number' }),
    __metadata("design:type", Object)
], Player.prototype, "limits", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "wildcards", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "victoryPoints", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "roadsBuilt", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "longestRoadPath", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "armySize", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "settlementsBuilt", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Player.prototype, "citiesBuilt", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], Player.prototype, "longestRoad", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], Player.prototype, "largestArmy", void 0);
