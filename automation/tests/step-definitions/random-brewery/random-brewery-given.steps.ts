import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';

Given(
  'a request retrieve random breweries with a specified size parameter',
  function (this: CustomWorld) {
    this.app.world.randomBreweryResponseSize = randomNumber(2, 50);
  }
);

Given(
  'a request is made to retrieve random breweries with an out-of-bounds size parameter',
  function (this: CustomWorld) {
    this.app.world.randomBreweryResponseSize = randomNumber(51, 100);
  }
);

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
