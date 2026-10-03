"use strict";
// Публичный API пакета. Клиент и сервер импортируют всё отсюда:
//   import { GameState, getAvailableRoads } from 'game-neonsettlers-shared';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Colyseus Schema — синхронизируемое состояние (единственный экземпляр классов
// обязан быть общим для клиента и сервера, дублировать нельзя)
__exportStar(require("./schema/GameState"), exports);
__exportStar(require("./schema/Player"), exports);
__exportStar(require("./schema/HexTile"), exports);
__exportStar(require("./schema/Road"), exports);
__exportStar(require("./schema/Settlement"), exports);
__exportStar(require("./schema/Port"), exports);
__exportStar(require("./schema/Dices"), exports);
__exportStar(require("./schema/WildCard"), exports);
// DTO сообщений клиент ↔ сервер
__exportStar(require("./schema/dto/dto"), exports);
// Чистая игровая логика (превентивная валидация на клиенте, правила на сервере)
__exportStar(require("./logic/Logic"), exports);
// Типы карт/сущностей БД + type guards
__exportStar(require("./database/entity"), exports);
// Общие утилиты
__exportStar(require("./utils/utils"), exports);
