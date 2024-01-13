import { Before } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import 'dotenv/config';
import { App } from '../../app/app';

Before(async function (this: CustomWorld) {
  this.app = new App();
});
