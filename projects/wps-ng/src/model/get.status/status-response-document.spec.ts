import {StatusResponseDocument} from './status-response-document';
import {Status} from "../execute.process/response/status";

describe('Status', () => {
  it('should create an instance', () => {
    expect(new StatusResponseDocument(undefined)).toBeTruthy();
  });
  it('Null Json input exception check', () => {
    const status = new Status(null);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(Status);
  });

  it('Undefined Json input exception check', () => {
    const status = new Status(undefined);
    expect(status).toBeDefined();
    expect(status).toBeInstanceOf(Status);
  });
});
