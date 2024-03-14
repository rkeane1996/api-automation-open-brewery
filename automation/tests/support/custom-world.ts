import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { App } from '../../app/app';

export class CustomWorld extends World {
  constructor(options: IWorldOptions) {
    super(options);
  }
  app!: App;
}

setWorldConstructor(CustomWorld);