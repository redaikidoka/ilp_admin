/* tslint:disable */

export interface IlsAppInterface {
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  intValue?: number;
  key: string;
  textValue?: string;
}

export class IlsApp implements IlsAppInterface {
  sCreate: string;
  sUser: number;
  sUpdate: string;
  intValue: number;
  key: string;
  textValue: string;
  constructor(instance?: IlsApp) {
    Object.assign(this, instance);
  }
}
