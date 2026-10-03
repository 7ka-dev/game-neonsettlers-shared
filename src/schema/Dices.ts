import { Schema, type } from '@colyseus/schema';

export class Dices extends Schema {
  @type('number') 
  dice1: number = 0;

  @type('number') 
  dice2: number = 0;
 }


