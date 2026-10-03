import { Schema, type } from '@colyseus/schema';

export class HexTile extends Schema {
  @type('string')
  id: string = '';
  
  @type('string')
  resourceType: string = ''; // wood, brick, sheep, wheat, ore, desert, gold, fog
  
  @type('number')
  numberToken: number = 0; // 2-12 (7 исключен)
  
  @type('number')
  x: number = 0;
  
  @type('number')
  y: number = 0;
  
  @type('number')
  q: number = 0; // Axial coordinates
  
  @type('number')
  r: number = 0; // Axial coordinates

  @type('boolean')
  setupSpawnAllowed: boolean = true;

  constructor() {
    super();
    this.id = '';
    this.resourceType = '';
    this.numberToken = 0;
    this.x = 0;
    this.y = 0;
    this.q = 0;
    this.r = 0;
  }
}
