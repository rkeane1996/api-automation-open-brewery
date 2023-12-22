import { Before } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { App } from '../../src/app/app';
import 'dotenv/config';

Before(async function (this: CustomWorld) {
  this.app = new App();
});
