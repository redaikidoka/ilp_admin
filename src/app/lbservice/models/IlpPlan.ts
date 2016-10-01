/* tslint:disable */

export interface IlpPlanInterface {
  idSchoolyear: number;
  intakeDone?: boolean;
  idStudent: number;
  sUser?: number;
  sCreate?: string;
  sUpdate?: string;
  idPlan?: number;
}

export class IlpPlan implements IlpPlanInterface {
  idSchoolyear: number;
  intakeDone: boolean;
  idStudent: number;
  sUser: number;
  sCreate: string;
  sUpdate: string;
  idPlan: number;
  constructor(instance?: IlpPlan) {
    Object.assign(this, instance);
  }
}
