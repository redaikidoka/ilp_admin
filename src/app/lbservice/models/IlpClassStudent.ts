/* tslint:disable */

export interface IlpClassStudentInterface {
  idClass: number;
  idStudent: number;
  sCreate?: string;
  sUpdate?: string;
  sUser?: number;
  idClassStudent?: number;
}

export class IlpClassStudent implements IlpClassStudentInterface {
  idClass: number;
  idStudent: number;
  sCreate: string;
  sUpdate: string;
  sUser: number;
  idClassStudent: number;
  constructor(instance?: IlpClassStudent) {
    Object.assign(this, instance);
  }
}
