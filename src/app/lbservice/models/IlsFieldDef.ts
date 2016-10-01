/* tslint:disable */

export interface IlsFieldDefInterface {
  fieldName: string;
  fieldDescription?: string;
  idFieldType?: number;
  fieldType: string;
  slug?: string;
  idSectionDef?: number;
  displayOrder?: number;
  updatesFeed: boolean;
  feedsTo?: string;
  feedMainTypeId?: number;
  isRequired: boolean;
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  isAnnual?: boolean;
  idFieldGroup?: number;
  idFieldDef?: number;
}

export class IlsFieldDef implements IlsFieldDefInterface {
  fieldName: string;
  fieldDescription: string;
  idFieldType: number;
  fieldType: string;
  slug: string;
  idSectionDef: number;
  displayOrder: number;
  updatesFeed: boolean;
  feedsTo: string;
  feedMainTypeId: number;
  isRequired: boolean;
  sCreate: string;
  sUser: number;
  sUpdate: string;
  isAnnual: boolean;
  idFieldGroup: number;
  idFieldDef: number;
  constructor(instance?: IlsFieldDef) {
    Object.assign(this, instance);
  }
}
