import { Infer } from 'myzod';
import { BrewerySchema } from '../schema/brewery.schema';

export type BreweryType = Infer<typeof BrewerySchema>;
