/* tslint:disable */

export interface IlsUserLogInterface {
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  idUser: number;
  idUlog?: number;
  info?: string;
}

export class IlsUserLog implements IlsUserLogInterface {
  sCreate: string;
  sUser: number;
  sUpdate: string;
  idUser: number;
  idUlog: number;
  info: string;
  constructor(instance?: IlsUserLog) {
    Object.assign(this, instance);
  }
}
