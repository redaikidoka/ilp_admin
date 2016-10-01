/* tslint:disable */

export interface IlpClassInterface {
  className: string;
  classDescription?: string;
  idSchoolyear: number;
  grade: number;
  sectionId?: number;
  sUser?: number;
  idClass?: number;
  sCreate?: string;
  sUpdate?: string;
}

export class IlpClass implements IlpClassInterface {
  className: string;
  classDescription: string;
  idSchoolyear: number;
  grade: number;
  sectionId: number;
  sUser: number;
  idClass: number;
  sCreate: string;
  sUpdate: string;
  constructor(instance?: IlpClass) {
    Object.assign(this, instance);
  }
}
