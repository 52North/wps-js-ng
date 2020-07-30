import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CapabilitiesResponse} from 'wps-ng';

@Injectable({
  providedIn: 'root'
})
export class CapabilitiesDataService {

  private messageSource1: BehaviorSubject<CapabilitiesResponse>;
  private messageSource2: BehaviorSubject<string>;
  private messageSource3: BehaviorSubject<string>;

  private readonly _currentCapabilitiesResponse: Observable<CapabilitiesResponse>;
  private _selectedVersion: Observable<string>;
  private _selectedUrl: Observable<string>;

  constructor() {
    this.messageSource1 = new BehaviorSubject<CapabilitiesResponse>(undefined);
    this.messageSource2 = new BehaviorSubject<string>('1.0.0');
    this.messageSource3 = new BehaviorSubject<string>('http://geoprocessing.demo.52north.org:8080/wps/WebProcessingService');
    this._currentCapabilitiesResponse = this.messageSource1.asObservable();
    this._selectedVersion = this.messageSource2.asObservable();
    this._selectedUrl = this.messageSource3.asObservable();

  }

  changeCapabilitiesResponse(newCapabilitiesResponse: CapabilitiesResponse, selectedVersion: string, selectedUrl: string) {
    this.messageSource2.next( selectedVersion);
    this.messageSource3.next( selectedUrl);
    this.messageSource1.next( newCapabilitiesResponse );
  }

  get currentCapabilitiesResponse(): Observable<CapabilitiesResponse> {
    return this._currentCapabilitiesResponse;
  }


  get selectedVersion(): Observable<string> {
    return this._selectedVersion;
  }

  get selectedUrl(): Observable<string> {
    return this._selectedUrl;
  }
}
