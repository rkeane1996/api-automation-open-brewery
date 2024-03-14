import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';
import assert from 'node:assert';

Then('a random brewery is returned', function (this: CustomWorld) {
  const entity = this.app.world.getRandomBreweryResponse!.data;
  assert.equal(entity.length, 1);
  assert.ok(entity[0].id != null);
});

Then('several breweries are returned', function (this: CustomWorld) {
  const entity = this.app.world.getRandomBreweryResponse!.data;
  assert.equal(entity.length, this.app.world.randomBreweryResponseSize);
});

Then('max breweries per page are returned', function (this: CustomWorld) {
  const entity = this.app.world.getRandomBreweryResponse!.data;
  assert.equal(entity.length, 50);
});
