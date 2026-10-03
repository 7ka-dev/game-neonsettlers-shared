var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Schema, type, ArraySchema } from '@colyseus/schema';
export class Position extends Schema {
    constructor() {
        super(...arguments);
        this.x = 0;
        this.y = 0;
    }
}
__decorate([
    type('number'),
    __metadata("design:type", Number)
], Position.prototype, "x", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], Position.prototype, "y", void 0);
export class PositionOnTile extends Schema {
    constructor(tileId, index) {
        super();
        this.tileId = tileId;
        this.index = index;
    }
}
__decorate([
    type('string'),
    __metadata("design:type", String)
], PositionOnTile.prototype, "tileId", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], PositionOnTile.prototype, "index", void 0);
export class Road extends Schema {
    constructor() {
        super(...arguments);
        this.id = '';
        this.playerId = '';
        this.portId = '';
        this.from = new Position();
        this.to = new Position();
        this.tiles = new ArraySchema(); // Adjacent hex tiles
        this.isEndPoint = false;
    }
}
__decorate([
    type('string'),
    __metadata("design:type", String)
], Road.prototype, "id", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], Road.prototype, "playerId", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], Road.prototype, "portId", void 0);
__decorate([
    type(Position),
    __metadata("design:type", Position)
], Road.prototype, "from", void 0);
__decorate([
    type(Position),
    __metadata("design:type", Position)
], Road.prototype, "to", void 0);
__decorate([
    type([PositionOnTile]),
    __metadata("design:type", Object)
], Road.prototype, "tiles", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Boolean)
], Road.prototype, "isEndPoint", void 0);
