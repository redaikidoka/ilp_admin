/* tslint:disable */

export interface IlsFieldGroupInterface {
  groupName: string;
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  groupWidth?: string;
  idFieldGroup?: number;
  groupOrder: number;
}

export class IlsFieldGroup implements IlsFieldGroupInterface {
  groupName: string;
  sCreate: string;
  sUser: number;
  sUpdate: string;
  groupWidth: string;
  idFieldGroup: number;
  groupOrder: number;
  constructor(instance?: IlsFieldGroup) {
    Object.assign(this, instance);
  }
}
