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
exports.Road = exports.PositionOnTile = exports.Position = void 0;
const schema_1 = require("@colyseus/schema");
class Position extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
}
exports.Position = Position;
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Position.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], Position.prototype, "y", void 0);
class PositionOnTile extends schema_1.Schema {
    constructor(tileId, index) {
        super();
        this.tileId = tileId;
        this.index = index;
    }
}
exports.PositionOnTile = PositionOnTile;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], PositionOnTile.prototype, "tileId", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], PositionOnTile.prototype, "index", void 0);
class Road extends schema_1.Schema {
    constructor() {
        super(...arguments);
        this.id = '';
        this.playerId = '';
        this.portId = '';
        this.from = new Position();
        this.to = new Position();
        this.tiles = new schema_1.ArraySchema(); // Adjacent hex tiles
        this.isEndPoint = false;
    }
}
exports.Road = Road;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Road.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Road.prototype, "playerId", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], Road.prototype, "portId", void 0);
__decorate([
    (0, schema_1.type)(Position),
    __metadata("design:type", Position)
], Road.prototype, "from", void 0);
__decorate([
    (0, schema_1.type)(Position),
    __metadata("design:type", Position)
], Road.prototype, "to", void 0);
__decorate([
    (0, schema_1.type)([PositionOnTile]),
    __metadata("design:type", Object)
], Road.prototype, "tiles", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], Road.prototype, "isEndPoint", void 0);
