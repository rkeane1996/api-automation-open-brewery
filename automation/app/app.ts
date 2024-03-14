import { Api } from './api';
import { World } from './world';

export class App {
  constructor() {
    this.world = new World();
    this.api = new Api();
  }
  world: World;
  api: Api;
}
