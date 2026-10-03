import { Schema, type, ArraySchema } from '@colyseus/schema';

export class Position extends Schema {
  @type('number')
  x: number = 0;

  @type('number')
  y: number = 0;
}

export class PositionOnTile extends Schema {
  @type('string')
  tileId: string;

  @type('number')
  index: number;

  constructor (tileId: string, index: number) {
    super();
    this.tileId = tileId;
    this.index = index;
  }
}

export class Road extends Schema {
  @type('string')
  id: string = '';
  
  @type('string')
  playerId: string = '';

  @type('string')
  portId: string = '';

  @type(Position)
  from: Position = new Position();
  
  @type(Position)
  to: Position = new Position();

  @type([PositionOnTile])
  tiles = new ArraySchema<PositionOnTile>(); // Adjacent hex tiles

  @type('boolean')
  isEndPoint: boolean = false;
}
