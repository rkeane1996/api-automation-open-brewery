import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';
import assert from 'node:assert';

Then('Ensure the correct brewery is returned', function (this: CustomWorld) {
  const actualId = this.app.world.getBreweryResponse?.data.id;
  assert.equal(this.app.world.breweryId, actualId);
});
