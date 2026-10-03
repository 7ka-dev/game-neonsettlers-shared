"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexEntity = isHexEntity;
exports.isPortEntity = isPortEntity;
exports.isSpecial = isSpecial;
function isHexEntity(value) {
    return typeof value === 'object' && value !== null
        && typeof value.id === 'string'
        && typeof value.q === 'number'
        && typeof value.r === 'number'
        && typeof value.x === 'number'
        && typeof value.y === 'number';
}
function isPortEntity(value) {
    return typeof value === 'object' && value !== null
        && typeof value.roadId === 'string';
}
function isSpecial(value) {
    if (typeof value !== 'object') {
        return false;
    }
    if (value.fogRule === undefined) {
        return true; // fogRule может быть не задано
    }
    return typeof value.fogRule === 'object'
        && value.fogRule !== null;
}
