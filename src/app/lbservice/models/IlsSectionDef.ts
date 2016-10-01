/* tslint:disable */

export interface IlsSectionDefInterface {
  sectionName: string;
  sectionDescription: string;
  sectionTitle: string;
  displayOrder: number;
  idSectionType?: number;
  sectionType?: string;
  active?: boolean;
  sCreate?: string;
  sUser?: number;
  sUpdate?: string;
  groupIds?: string;
  idSectionDef?: number;
}

export class IlsSectionDef implements IlsSectionDefInterface {
  sectionName: string;
  sectionDescription: string;
  sectionTitle: string;
  displayOrder: number;
  idSectionType: number;
  sectionType: string;
  active: boolean;
  sCreate: string;
  sUser: number;
  sUpdate: string;
  groupIds: string;
  idSectionDef: number;
  constructor(instance?: IlsSectionDef) {
    Object.assign(this, instance);
  }
}
