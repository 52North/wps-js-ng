
import { WpsNgService } from './wps-ng.service';
import {TestBed} from '@angular/core/testing';


class MockedWpsJsService {
  getCapabilities_GET(callback: (response:
                                   import('../model/capabilities/capabilities-response').CapabilitiesResponse) => void): void{
    return;
  }
  isInitialized(): boolean {
    return true;
  }
}

describe('WpsNgService', () => {
  let wpsService: MockedWpsJsService;
  let wpsNgService: WpsNgService;


  beforeEach(() => {
    wpsService = new MockedWpsJsService();
    wpsNgService = new WpsNgService('1.0.0', 'http://MVSXX.COMPANY.COM:04445/CICSPLEXSM//JSMITH/MENU/OURHOME?CONTEXT=FRED&SCOPE=FRED');
    wpsNgService.wpsServiceJS(wpsService);
  });

  it('should have the Mocked Wps Js Service injected',  () => {
    expect(wpsNgService.wpsServiceJS.isInitialized).toBe(true);
  });


});
