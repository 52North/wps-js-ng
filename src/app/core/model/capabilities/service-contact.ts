import {ContactInfo} from './contact-info';

export class ServiceContact {

  private _individualName: string;
  private _contactInfo: ContactInfo;

  get individualName(): string {
    return this._individualName;
  }

  get contactInfo(): ContactInfo {
    return this._contactInfo;
  }
  constructor(serviceContactJson: ServiceContact) {
    if (serviceContactJson != null){
      this._individualName = serviceContactJson.individualName;
      this._contactInfo = new ContactInfo(serviceContactJson.contactInfo);
    }


  }
}
