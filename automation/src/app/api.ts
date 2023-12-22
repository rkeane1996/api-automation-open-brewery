import { BreweryClient } from '../client/brewery-client';

export class Api {
  constructor() {
    this.breweryAPI = new BreweryClient();
  }
  breweryAPI: BreweryClient;
}
