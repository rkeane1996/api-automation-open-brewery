import assert from 'assert';
import { asConst } from '../data-utils/argument.util';
import { StatusCode } from '../utils/status-codes';

export function assertApiResponse(response: any, statusString: string) {
  const { status, statusText } = response;
  const constStatus = asConst(statusString);
  const statusCodeInstance = StatusCode[constStatus];
  assert.equal(status, statusCodeInstance.status);
  assert.equal(statusText, statusCodeInstance.statusText);
}
