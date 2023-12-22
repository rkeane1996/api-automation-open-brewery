import { Infer } from 'myzod';
import { BrewerySchema } from './brewery.schema';

export type BreweryType = Infer<typeof BrewerySchema>;
