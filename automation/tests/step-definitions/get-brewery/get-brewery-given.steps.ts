import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../../support/custom-world';

Given('a valid brewery ID', function (this: CustomWorld) {
  this.app.world.breweryId = 'b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0';
});

Given('an invalid brewery ID', function (this: CustomWorld) {
  this.app.world.breweryId = 'b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0-123';
});

