import { Schema, type, ArraySchema } from '@colyseus/schema';

export class Settlement extends Schema {
  @type('string') 
  id: string = '';
  
  @type('string')
  playerId: string = '';
  
  // @type('string')
  // position: string = ''; // vertex id
  
  @type('boolean')
  isCity: boolean = false;

  @type('number')
  x: number = 0;
  
  @type('number')
  y: number = 0;

  @type(['string'])
  tiles = new ArraySchema<string>(); // Adjacent hex tiles

  @type('boolean')
  setupSpawnAllowed: boolean = true;
}


