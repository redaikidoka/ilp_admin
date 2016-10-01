/* tslint:disable */

export interface VwClassTeachersInterface {
  classDescription?: string;
  idClass?: number;
  idSchoolyear?: number;
  className: string;
  grade: number;
  idTeacher?: number;
}

export class VwClassTeachers implements VwClassTeachersInterface {
  classDescription: string;
  idClass: number;
  idSchoolyear: number;
  className: string;
  grade: number;
  idTeacher: number;
  constructor(instance?: VwClassTeachers) {
    Object.assign(this, instance);
  }
}
