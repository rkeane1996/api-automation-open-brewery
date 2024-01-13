import { When } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';

When('a request is made to retrieve a random brewery', async function (this: CustomWorld) {
  const response = await this.app.api.breweryAPI.getRandomBreweries(
    this.app.world.randomBreweryResponseSize
  );
  this.app.world.getRandomBreweryResponse = response;
});
