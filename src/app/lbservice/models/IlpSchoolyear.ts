/* tslint:disable */

export interface IlpSchoolyearInterface {
  yearName: string;
  startDate?: any;
  endDate?: any;
  sCreate?: string;
  sUpdate?: string;
  sUser?: number;
  idSchoolyear?: number;
}

export class IlpSchoolyear implements IlpSchoolyearInterface {
  yearName: string;
  startDate: any;
  endDate: any;
  sCreate: string;
  sUpdate: string;
  sUser: number;
  idSchoolyear: number;
  constructor(instance?: IlpSchoolyear) {
    Object.assign(this, instance);
  }
}
