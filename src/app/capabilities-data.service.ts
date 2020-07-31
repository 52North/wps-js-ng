import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CapabilitiesResponse} from 'wps-ng';

@Injectable({
  providedIn: 'root'
})
export class CapabilitiesDataService {

  private messageSource: BehaviorSubject<CapabilitiesResponse>;
  private _currentCapabilitiesResponse: Observable<any>;

  constructor() {
    this.messageSource = new BehaviorSubject<CapabilitiesResponse>(undefined);
    this._currentCapabilitiesResponse = this.messageSource.asObservable();
  }

  changeCapabilitiesResponse(newCapabilitiesResponse: CapabilitiesResponse){
    this.messageSource.next(newCapabilitiesResponse);
  }

  get currentCapabilitiesResponse(): Observable<CapabilitiesResponse> {
    return this._currentCapabilitiesResponse;
  }
}
