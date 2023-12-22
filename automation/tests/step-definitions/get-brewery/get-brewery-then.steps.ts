import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';
import { asConst } from '../../../src/app/world';
import assert from 'node:assert';

Then(
  'the {string} request should succeed with a status of {string}',
  function (this: CustomWorld, res: string, statusString: string) {
    const asResponse = `${res} Response`;
    const { status, statusText } = this.app.world.fromPhrase(asResponse);
    const constStatus = asConst(statusString);
    assert.equal(statusText, constStatus);
    assert.equal(status, 200);
  }
);

Then(
  'the {string} request should fail with a status of {string}',
  function (this: CustomWorld, res: string, statusString: string) {
    const asResponse = `${res} Response`;
    const { status, statusText } = this.app.world.fromPhrase(asResponse);
    //const constStatus = asConst(statusString);
    assert.equal(statusText, statusString);
    assert.equal(status, 404);
  }
);

Then('Ensure the correct brewery is returned', function (this: CustomWorld) {
  const actualId = this.app.world.getBreweryResponse?.data.id;
  assert.equal(this.app.world.breweryId, actualId);
});
