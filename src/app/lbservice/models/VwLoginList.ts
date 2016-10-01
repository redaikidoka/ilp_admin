/* tslint:disable */

export interface VwLoginListInterface {
  sCreate?: string;
  sUpdate?: string;
  info?: string;
  idUser?: number;
  idUlog?: number;
  sUser?: number;
  teacherName?: string;
}

export class VwLoginList implements VwLoginListInterface {
  sCreate: string;
  sUpdate: string;
  info: string;
  idUser: number;
  idUlog: number;
  sUser: number;
  teacherName: string;
  constructor(instance?: VwLoginList) {
    Object.assign(this, instance);
  }
}
