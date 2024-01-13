import { Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/custom-world';
import { assertApiResponse } from '../../src/assertions/api-response-assertion';

Then(
  'the {string} request should succeed with a status of {string}',
  function (this: CustomWorld, res: string, statusString: string) {
    const response = this.app.world.fromPhrase(res, 'Response');
    assertApiResponse(response, statusString);
  }
);

Then(
  'the {string} request should fail with a status of {string}',
  function (this: CustomWorld, res: string, statusString: string) {
    const response = this.app.world.fromPhrase(res, 'Response');
    assertApiResponse(response, statusString);
  }
);
