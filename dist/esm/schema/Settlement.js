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
export class Settlement extends Schema {
    constructor() {
        super(...arguments);
        this.id = '';
        this.playerId = '';
        // @type('string')
        // position: string = ''; // vertex id
        this.isCity = false;
        this.x = 0;
        this.y = 0;
        this.tiles = new ArraySchema(); // Adjacent hex tiles
        this.setupSpawnAllowed = true;
    }
}
__decorate([
    type('string'),
    __metadata("design:type", String)
], Settlement.prototype, "id", void 0);
__decorate([
    type('string'),
    __metadata("design:type", String)
], Settlement.prototype, "playerId", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Boolean)
], Settlement.prototype, "isCity", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], Settlement.prototype, "x", void 0);
__decorate([
    type('number'),
    __metadata("design:type", Number)
], Settlement.prototype, "y", void 0);
__decorate([
    type(['string']),
    __metadata("design:type", Object)
], Settlement.prototype, "tiles", void 0);
__decorate([
    type('boolean'),
    __metadata("design:type", Boolean)
], Settlement.prototype, "setupSpawnAllowed", void 0);
