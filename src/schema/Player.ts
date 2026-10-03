import { Schema, MapSchema, type } from '@colyseus/schema';

export class Player extends Schema {
  @type('string')
  id: string = '';
  
  @type('string')
  name: string = '';
  
  @type('string')
  color: string = '#FFFFFF';

  @type('boolean')
  isReady: boolean = false;
  
  @type({ map: 'number' })
  resources = new MapSchema<number>();

  @type({ map: 'number' })
  rates = new MapSchema<number>();

  @type({ map: 'number' })
  limits = new MapSchema<number>();

  @type('number')
  wildcards: number = 0;
  
  @type('number')
  victoryPoints: number = 0;
  
  @type('number')
  roadsBuilt: number = 0;
  
  @type('number')
  longestRoadPath: number = 0;

  @type('number')
  armySize: number = 0;
  
  @type('number')
  settlementsBuilt: number = 0;
  
  @type('number')
  citiesBuilt: number = 0;
  
  @type('boolean')
  longestRoad: boolean = false;
  
  @type('boolean')
  largestArmy: boolean = false;

  constructor() {
    super();
    this.resources.set('wood', 0);
    this.resources.set('brick', 0);
    this.resources.set('sheep', 0);
    this.resources.set('wheat', 0);
    this.resources.set('ore', 0);

    this.rates.set('wood', 4);
    this.rates.set('brick', 4);
    this.rates.set('sheep', 4);
    this.rates.set('wheat', 4);
    this.rates.set('ore', 4);

    this.limits.set("settlement", 5);
    this.limits.set("city", 4);
    this.limits.set("road", 15);
  }
}
