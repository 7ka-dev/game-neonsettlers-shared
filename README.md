# game-neonsettlers-shared

Общий код клиента и сервера Neon Settlers (отдельный репозиторий).

## Что здесь

| Каталог | Содержимое |
|---|---|
| `src/schema/` | Colyseus Schema-классы: `GameState`, `Player`, `HexTile`, `Road`, `Settlement`, `Port`, `Dices`, `WildCard` |
| `src/schema/dto/` | Типы сообщений клиент ↔ сервер (`ExchangeDto`, `LogMessage`, `RoomInfo`, `KICK_CODE`, …) |
| `src/logic/Logic.ts` | Чистые функции игровых правил (превентивная валидация на клиенте, проверки на сервере) |
| `src/database/entity.ts` | Типы карт/сущностей БД + type guards (`isHexEntity`, `isPortEntity`, `isSpecial`) |
| `src/utils/utils.ts` | Общие утилиты (`areEqual`, `shuffleArray`) |

Клиент и сервер импортируют всё из корня пакета:

```ts
import { GameState, getAvailableRoads, MapData } from 'game-neonsettlers-shared';
```

## Правила

- **Schema-классы нельзя копировать** в клиент или сервер — только этот пакет.
  Несовпадение классов приводит к молчивому рассинхрону состояния.
- Собирается в два формата: ESM (`dist/esm`) + CJS (`dist/cjs`) + типы (`.d.ts`),
  потому что сервер собирается в CommonJS, а клиент — в ESM (Vite).
- `typescript` указан в `dependencies` намеренно: он участвует в peer-варианте
  `@colyseus/schema`, чтобы в процессе сервера существовала **ровно одна копия**
  этого пакета. Версию `typescript` и `@colyseus/schema` держите синхронными
  с `cursor_cards/package.json`.

## Сборка

```bash
pnpm install
pnpm run build      # dist/esm + dist/cjs + .d.ts
pnpm run watch      # авто-сборка ESM при правках
```

## Цикл разработки с cursor_cards

cursor_cards/package.json подключает пакет из этого репозитория по git-URL:

    git+ssh://git@github.com/7ka-dev/game-neonsettlers-shared.git

pnpm устанавливает упакованную копию на коммите из pnpm-lock.yaml.

1. меняете код здесь → pnpm run build
2. коммит и пушите dist/ вместе с исходниками — git-зависимость ставит
   содержимое репозитория, собранный dist/ обязателен
3. в cursor_cards → pnpm run shared:update
   (пересоберёт пакет здесь и подтянет новый HEAD репозитория)
4. перезапускаете dev-сервер/клиента

Правки без коммита/пуша здесь в cursor_cards не видны — такова цена
подключения из репозитория вместо локальной ile:-ссылки.

## В cursor_cards

- Типы и импорты: `import ... from 'game-neonsettlers-shared'`
- Проверка единственного экземпляра @colyseus/schema — см. «одна копия» выше:
  pnpm упаковывает пакет в свой store, поэтому копии зависимостей одни и те же;
  ломается, если подключать пакет через `link:`/симлинк со своим 
ode_modules.