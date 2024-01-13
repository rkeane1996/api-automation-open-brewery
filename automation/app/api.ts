import { BreweryClient } from '../src/client/brewery-client/brewery-client'

export class Api {
  constructor() {
    this.breweryAPI = new BreweryClient();
  }
  breweryAPI: BreweryClient;
}
