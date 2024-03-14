import { object, string } from 'myzod';

export const BrewerySchema = object({
  id: string(),
  name: string(),
  brewery_type: string(),
  address_1: string(),
  address_2: string().optional(),
  address_3: string().optional(),
  city: string(),
  state_province: string(),
  postal_code: string(),
  country: string(),
  longitude: string(),
  latitude: string(),
  phone: string(),
  website_url: string(),
  state: string(),
  street: string()
});
