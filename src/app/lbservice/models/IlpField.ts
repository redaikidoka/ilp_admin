/* tslint:disable */

export interface IlpFieldInterface {
  contents?: string;
  sUser?: number;
  sUpdate: any;
  sCreate: any;
  isHistorical?: boolean;
  idStudent: number;
  idPlan: number;
  idFieldDef: number;
  idField?: number;
}

export class IlpField implements IlpFieldInterface {
  contents: string;
  sUser: number;
  sUpdate: any;
  sCreate: any;
  isHistorical: boolean;
  idStudent: number;
  idPlan: number;
  idFieldDef: number;
  idField: number;
  constructor(instance?: IlpField) {
    Object.assign(this, instance);
  }
}
