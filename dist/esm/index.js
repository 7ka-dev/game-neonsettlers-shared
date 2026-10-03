// Публичный API пакета. Клиент и сервер импортируют всё отсюда:
//   import { GameState, getAvailableRoads } from 'game-neonsettlers-shared';
// Colyseus Schema — синхронизируемое состояние (единственный экземпляр классов
// обязан быть общим для клиента и сервера, дублировать нельзя)
export * from './schema/GameState';
export * from './schema/Player';
export * from './schema/HexTile';
export * from './schema/Road';
export * from './schema/Settlement';
export * from './schema/Port';
export * from './schema/Dices';
export * from './schema/WildCard';
// DTO сообщений клиент ↔ сервер
export * from './schema/dto/dto';
// Чистая игровая логика (превентивная валидация на клиенте, правила на сервере)
export * from './logic/Logic';
// Типы карт/сущностей БД + type guards
export * from './database/entity';
// Общие утилиты
export * from './utils/utils';
