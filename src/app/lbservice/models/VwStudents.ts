/* tslint:disable */

export interface VwStudentsInterface {
  studentid?: string;
  cohort?: string;
  gender?: string;
  homeLanguage?: string;
  ethnicity?: string;
  ethnicityCode?: number;
  absences?: number;
  currentGrade?: number;
  profilePicture?: string;
  fullPicture?: string;
  enrolled?: boolean;
  idStudent?: number;
  idSchoolyear?: number;
  studentName: string;
  idDemo?: number;
  nameFirst: string;
  nameLast: string;
  dob: any;
}

export class VwStudents implements VwStudentsInterface {
  studentid: string;
  cohort: string;
  gender: string;
  homeLanguage: string;
  ethnicity: string;
  ethnicityCode: number;
  absences: number;
  currentGrade: number;
  profilePicture: string;
  fullPicture: string;
  enrolled: boolean;
  idStudent: number;
  idSchoolyear: number;
  studentName: string;
  idDemo: number;
  nameFirst: string;
  nameLast: string;
  dob: any;
  constructor(instance?: VwStudents) {
    Object.assign(this, instance);
  }
}
