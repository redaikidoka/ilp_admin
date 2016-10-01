/* tslint:disable */

export interface VwIlpFieldsInterface {
  fieldName?: string;
  fieldType?: string;
  feedsTo?: string;
  isHistorical?: boolean;
  isAnnual?: boolean;
  idStudent?: number;
  idSectionDef?: number;
  idFieldGroup?: number;
  groupOrder?: number;
  groupName?: string;
  fieldDescription?: string;
  displayOrder?: number;
  contents?: string;
  isRequired?: boolean;
  sCreate?: any;
  sUpdate?: any;
  sUser?: number;
  sectionDescription?: string;
  sectionName?: string;
  sectionTitle?: string;
  slug?: string;
  updatesFeed?: boolean;
  idField?: number;
  idFieldDef?: number;
  idPlan?: number;
}

export class VwIlpFields implements VwIlpFieldsInterface {
  fieldName: string;
  fieldType: string;
  feedsTo: string;
  isHistorical: boolean;
  isAnnual: boolean;
  idStudent: number;
  idSectionDef: number;
  idFieldGroup: number;
  groupOrder: number;
  groupName: string;
  fieldDescription: string;
  displayOrder: number;
  contents: string;
  isRequired: boolean;
  sCreate: any;
  sUpdate: any;
  sUser: number;
  sectionDescription: string;
  sectionName: string;
  sectionTitle: string;
  slug: string;
  updatesFeed: boolean;
  idField: number;
  idFieldDef: number;
  idPlan: number;
  constructor(instance?: VwIlpFields) {
    Object.assign(this, instance);
  }
}
