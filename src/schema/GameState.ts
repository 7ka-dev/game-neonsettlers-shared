import { Schema, MapSchema, ArraySchema, type } from '@colyseus/schema';
import { Player } from './Player';
import { HexTile } from './HexTile';
import { Road } from './Road';
import { Settlement } from './Settlement';
import { Dices } from './Dices';
import { WildCard } from './WildCard';
import { Port } from './Port';

export class GameState extends Schema {
  @type('string')
  nameMap = 'common';

  @type({ map: Player })
  players = new MapSchema<Player>();
  
  @type('boolean')
  mapIsReady = false;

  @type([HexTile])
  hexTiles = new ArraySchema<HexTile>();
  
  @type([Road])
  roads = new ArraySchema<Road>();
  
  @type([Settlement])
  settlements = new ArraySchema<Settlement>();

  @type([Port])
  ports = new ArraySchema<Port>();
  
  @type('string')
  currentPlayerId: string = '';

  // sessionId создателя комнаты — только он может кикать игроков в лобби
  @type('string')
  ownerId: string = '';
  
  @type('string')
  diceRoll: string = '';

  @type(Dices)
  dices = new Dices();

  @type([WildCard])
  wildCards = new ArraySchema<WildCard>();
  
  @type('string')
  gamePhase: 'setup' | 'prepare1' | 'prepare2' 
    | 'roll' | 'build' | 'finished' | 'bandit' 
    | 'steal' | 'card_road_1' | 'card_road_2' = 'setup';

  @type('string')
  gameState: 'gold' | 'robbery' | 'nothing' = 'nothing';
  
  @type('number')
  turnNumber: number = 0;

  @type('string')
  bandit: string = '';

  @type(['string'])
  robberyTargets = new ArraySchema<string>();

  @type({ map: 'number' })
  goldTarget = new MapSchema<number>();

  @type('boolean')
  withTimer: boolean = false;

  @type('number')
  timerDuration: number = 60;

  @type('boolean')
  isPrivateRoom: boolean = false;
}
