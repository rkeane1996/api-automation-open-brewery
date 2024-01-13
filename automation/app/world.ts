import { APIResponse } from '../src/utils/api-response';
import { BreweryType } from '../src/client/brewery-client/types/brewery.types';
import _ from 'lodash';
import { asVar } from '../src/data-utils/argument.util';

export class World {
  [key: string]: unknown;
  breweryId: string | undefined;
  getBreweryResponse: APIResponse<BreweryType> | undefined;
  getRandomBreweryResponse: APIResponse<BreweryType[]> | undefined;
  randomBreweryResponseSize: number | undefined;

  fromPhrase<T = APIResponse<Record<string, unknown>>>(phrase: string, suffix?: string) {
    const fullstr = suffix ? `${phrase}${suffix}` : phrase;
    const value = asVar(fullstr);
    return this[value] as T;
  }
}
