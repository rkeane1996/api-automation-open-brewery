import { APIResponse } from '../client/api-response';
import { BreweryType } from '../model/brewery.types';
import _ from 'lodash';

export class World {
  [key: string]: unknown;
  breweryId: string | undefined;
  getBreweryResponse: APIResponse<BreweryType> | undefined;

  fromPhrase<T = APIResponse<Record<string, unknown>>>(phrase: string, suffix?: string) {
    const fullstr = suffix ? `${phrase}${suffix}` : phrase;
    const value = asVar(fullstr);
    return this[value] as T;
  }
}

export function asVar(sentence: string, suffix: string = '') {
  return _.camelCase(`${sentence}${suffix}`);
}

export function asConst(sentence: string) {
  return _.snakeCase(sentence).toUpperCase();
}
