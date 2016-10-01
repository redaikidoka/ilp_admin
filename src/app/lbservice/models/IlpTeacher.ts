/* tslint:disable */

export interface IlpTeacherInterface {
  cohort?: string;
  idTeacher?: number;
  isAdmin?: boolean;
  nameFirst: string;
  nameLast: string;
  password?: string;
  profilePicture?: string;
  sCreate?: any;
  sUpdate?: any;
  sUser?: number;
  teacherName: string;
  teacherid?: string;
  username?: string;
}

export class IlpTeacher implements IlpTeacherInterface {
  cohort: string;
  idTeacher: number;
  isAdmin: boolean;
  nameFirst: string;
  nameLast: string;
  password: string;
  profilePicture: string;
  sCreate: any;
  sUpdate: any;
  sUser: number;
  teacherName: string;
  teacherid: string;
  username: string;
  constructor(instance?: IlpTeacher) {
    Object.assign(this, instance);
  }
}
