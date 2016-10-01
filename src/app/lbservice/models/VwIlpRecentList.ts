/* tslint:disable */

export interface VwIlpRecentListInterface {
  sUpdate?: string;
  idPlan?: number;
  idSchoolyear?: number;
  idStudent?: number;
  intakeDone?: boolean;
  studentName?: string;
  teacherName?: string;
  yearName?: string;
  sUser?: number;
}

export class VwIlpRecentList implements VwIlpRecentListInterface {
  sUpdate: string;
  idPlan: number;
  idSchoolyear: number;
  idStudent: number;
  intakeDone: boolean;
  studentName: string;
  teacherName: string;
  yearName: string;
  sUser: number;
  constructor(instance?: VwIlpRecentList) {
    Object.assign(this, instance);
  }
}
