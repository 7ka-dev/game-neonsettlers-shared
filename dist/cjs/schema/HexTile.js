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
exports.HexTile = void 0;
const schema_1 = require("@colyseus/schema");
class HexTile extends schema_1.Schema {
    constructor() {
        super();
        this.id = '';
        this.resourceType = ''; // wood, brick, sheep, wheat, ore, desert, gold, fog
        this.numberToken = 0; // 2-12 (7 исключен)
        this.x = 0;
        this.y = 0;
        this.q = 0; // Axial coordinates
        this.r = 0; // Axial coordinates
        this.setupSpawnAllowed = true;
        this.id = '';
        this.resourceType = '';
        this.numberToken = 0;
        this.x = 0;
        this.y = 0;
        this.q = 0;
        this.r = 0;
    }
}
exports.HexTile = HexTile;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], HexTile.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], HexTile.prototype, "resourceType", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], HexTile.prototype, "numberToken", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], HexTile.prototype, "x", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], HexTile.prototype, "y", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], HexTile.prototype, "q", void 0);
__decorate([
    (0, schema_1.type)('number'),
    __metadata("design:type", Number)
], HexTile.prototype, "r", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], HexTile.prototype, "setupSpawnAllowed", void 0);
