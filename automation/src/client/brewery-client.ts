import { BreweryType } from '../model/brewery.types';
import { ServiceClient } from './rest-service';

export class BreweryClient extends ServiceClient {
  getBrewery(breweryId: string) {
    const endpoint = `breweries/${breweryId}`;
    return this._get<BreweryType>(endpoint);
  }
}
