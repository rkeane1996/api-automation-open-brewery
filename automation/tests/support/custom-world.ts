import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { App } from '../../src/app/app';

export class CustomWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }
  app!: App;
}

setWorldConstructor(CustomWorld);