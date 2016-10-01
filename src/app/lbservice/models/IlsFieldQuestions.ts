/* tslint:disable */

export interface IlsFieldQuestionsInterface {
  displayOrder: number;
  questionText: string;
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  idFieldDef: number;
  idFieldQuestion?: number;
  idLanguage: number;
}

export class IlsFieldQuestions implements IlsFieldQuestionsInterface {
  displayOrder: number;
  questionText: string;
  sCreate: string;
  sUser: number;
  sUpdate: string;
  idFieldDef: number;
  idFieldQuestion: number;
  idLanguage: number;
  constructor(instance?: IlsFieldQuestions) {
    Object.assign(this, instance);
  }
}
