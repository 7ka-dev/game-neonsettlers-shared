import { Schema, MapSchema, type } from '@colyseus/schema';

export class WildCard extends Schema {
  @type('string')
  id: string = '';

  @type('string')
  playerId: string = '';

  @type('boolean')
  isUsed: boolean = false;

  @type('string')
  type: 'knight' | 'monopoly' | 'two_resources' | 'two_roads' | 'point';

  constructor (type: 'knight' | 'monopoly' | 'two_resources' | 'two_roads' | 'point') {
    super();

    this.type = type;
    this.id = type + '_' + Math.random().toString(36).substring(2, 9);
  }
}