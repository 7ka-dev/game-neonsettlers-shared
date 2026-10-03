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
exports.WildCard = void 0;
const schema_1 = require("@colyseus/schema");
class WildCard extends schema_1.Schema {
    constructor(type) {
        super();
        this.id = '';
        this.playerId = '';
        this.isUsed = false;
        this.type = type;
        this.id = type + '_' + Math.random().toString(36).substring(2, 9);
    }
}
exports.WildCard = WildCard;
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], WildCard.prototype, "id", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], WildCard.prototype, "playerId", void 0);
__decorate([
    (0, schema_1.type)('boolean'),
    __metadata("design:type", Boolean)
], WildCard.prototype, "isUsed", void 0);
__decorate([
    (0, schema_1.type)('string'),
    __metadata("design:type", String)
], WildCard.prototype, "type", void 0);
