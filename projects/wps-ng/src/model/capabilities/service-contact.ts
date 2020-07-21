import {ContactInfo} from './contact-info';

export class ServiceContact {

  private readonly _individualName: string;
  private readonly _contactInfo: ContactInfo;

  get individualName(): string {
    return this._individualName;
  }

  get contactInfo(): ContactInfo {
    return this._contactInfo;
  }
  constructor(serviceContactJson: any) {
    if (serviceContactJson != null){
      this._individualName = serviceContactJson.individualName;
      this._contactInfo = new ContactInfo(serviceContactJson.contactInfo);
    }


  }
}
