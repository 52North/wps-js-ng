import {ServiceContact} from './service-contact';

export class ServiceProvider {

  private _providerName: string;
  private _serviceContact: ServiceContact;

  constructor(serviceProviderJson: any) {
    if (serviceProviderJson != null){
      this._providerName = serviceProviderJson.providerName;
      this._serviceContact = new ServiceContact(serviceProviderJson.serviceContact);
    }

  }

  get providerName(): string {
    return this._providerName;
  }

  get serviceContact(): ServiceContact {
    return this._serviceContact;
  }

}
