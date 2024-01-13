import { BreweryType } from './types/brewery.types';
import { ServiceClient } from '../rest-service';

export class BreweryClient extends ServiceClient {
  getBrewery(breweryId: string) {
    const endpoint = `breweries/${breweryId}`;
    return this._get<BreweryType>(endpoint);
  }

  getRandomBreweries(numberOfBreweries?: number) {
    const endpoint = 'breweries/random';
    let params;
    if (numberOfBreweries) {
      params = { size: numberOfBreweries };
    }
    return this._get<BreweryType[]>(endpoint, { params });
  }
}
