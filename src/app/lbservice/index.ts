/**
* @module SDK Index
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MTI 2016 Jonathan Casarrubias
* @description
* The SDK Index is automatically built by the LoopBack SDK Builder.
*
* The SDK Index will temporally keep providing access to everything in the SDK
* including services. This is because will maintain backwards compatibility for those
* Applications below Angular 2 RC 5 version that does not support NgModule just yet.
*
* IMPORTANT NOTE:
*
* If your application is equal or above RC 5 It is recommended to import the SDK
* Module located in ./sdk.module.ts and follow the instructions.
*
* Also, It is recommended for you to start upgrading your application in order to 
* support NgModules before backwards support is also dropped by Angular.
*
* READ: https://angular.io/docs/ts/latest/cookbook/rc4-to-rc5.html#!#5-cleanup
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { UserApi } from './services/custom/User';
import { IlpPlanApi } from './services/custom/IlpPlan';
import { IlpClassApi } from './services/custom/IlpClass';
import { IlpClassStudentApi } from './services/custom/IlpClassStudent';
import { IlsAppApi } from './services/custom/IlsApp';
import { IlpSchoolyearApi } from './services/custom/IlpSchoolyear';
import { IlpTeacherApi } from './services/custom/IlpTeacher';
import { IlsFieldQuestionsApi } from './services/custom/IlsFieldQuestions';
import { VwClassStudentsWithIlpApi } from './services/custom/VwClassStudentsWithIlp';
import { VwClassTeachersApi } from './services/custom/VwClassTeachers';
import { VwStudentsApi } from './services/custom/VwStudents';
import { IlsFieldDefApi } from './services/custom/IlsFieldDef';
import { IlsFieldGroupApi } from './services/custom/IlsFieldGroup';
import { IlsSectionDefApi } from './services/custom/IlsSectionDef';
import { IlpFieldApi } from './services/custom/IlpField';
import { VwIlpFieldsApi } from './services/custom/VwIlpFields';
import { VwIlpRecentListApi } from './services/custom/VwIlpRecentList';
import { VwLoginListApi } from './services/custom/VwLoginList';
import { IlsUserLogApi } from './services/custom/IlsUserLog';
/**
* IMPORTANT: API_PROVIDERS WILL BE DEPRECATED WHEN ANGULAR 2 IS STABLE
* PLEASE MIGRATE YOUR PROJECT AS SOON AS POSSIBLE.
* ONCE ANGULAR 2 IS STABLE I WON'T KEEP SUPPORTING API PROVIDERS.
* USER NGMODULE INSTEAD LOCATED IN ./sdk.module.ts
**/
export const API_PROVIDERS: any[] = [
  LoopBackAuth,
  ErrorHandler,
  LoggerService,
  JSONSearchParams,
  UserApi,
  IlpPlanApi,
  IlpClassApi,
  IlpClassStudentApi,
  IlsAppApi,
  IlpSchoolyearApi,
  IlpTeacherApi,
  IlsFieldQuestionsApi,
  VwClassStudentsWithIlpApi,
  VwClassTeachersApi,
  VwStudentsApi,
  IlsFieldDefApi,
  IlsFieldGroupApi,
  IlsSectionDefApi,
  IlpFieldApi,
  VwIlpFieldsApi,
  VwIlpRecentListApi,
  VwLoginListApi,
  IlsUserLogApi
];
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './sdk.module';

