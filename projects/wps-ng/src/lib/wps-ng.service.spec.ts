
import { WpsNgService } from './wps-ng.service';
import {WpsServiceModule} from './typings';

let wpsService;

describe('WpsNgService', () => {
  beforeEach(() => {
    wpsService = {};

  });

  it('Should get capabilities object in the callback function', () => {
    spyOn(wpsService, 'getCapabilitiesGET').and.returnValue(undefined);

  });

});
