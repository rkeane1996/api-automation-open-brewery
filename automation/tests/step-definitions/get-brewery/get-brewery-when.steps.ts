import { When } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';

When('a request is made to retrieve the brewery', async function (this: CustomWorld) {
  const id = this.app.world.breweryId;
  const response = await this.app.api.breweryAPI.getBrewery(id!);
  this.app.world.getBreweryResponse = response;
});
