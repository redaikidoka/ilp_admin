/* tslint:disable */

export interface VwClassStudentsWithIlpInterface {
  studentid?: string;
  gender?: string;
  cohort?: string;
  homeLanguage?: string;
  ethnicityCode?: number;
  ethnicity?: string;
  profilePicture?: string;
  fullPicture?: string;
  currentGrade?: number;
  absences?: number;
  intakeDone?: boolean;
  dob: any;
  idClass: number;
  idClassStudent: number;
  idPlan: number;
  idSchoolyear: number;
  idStudent: number;
  studentName: string;
  nameFirst: string;
  nameLast: string;
}

export class VwClassStudentsWithIlp implements VwClassStudentsWithIlpInterface {
  studentid: string;
  gender: string;
  cohort: string;
  homeLanguage: string;
  ethnicityCode: number;
  ethnicity: string;
  profilePicture: string;
  fullPicture: string;
  currentGrade: number;
  absences: number;
  intakeDone: boolean;
  dob: any;
  idClass: number;
  idClassStudent: number;
  idPlan: number;
  idSchoolyear: number;
  idStudent: number;
  studentName: string;
  nameFirst: string;
  nameLast: string;
  constructor(instance?: VwClassStudentsWithIlp) {
    Object.assign(this, instance);
  }
}
