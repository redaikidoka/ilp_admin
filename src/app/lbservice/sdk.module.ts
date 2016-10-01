/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MTI 2016 Jonathan Casarrubias
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDKModule }      from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDKModule.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
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

@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [ ]
})

export class SDKModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SDKModule,
      providers: [
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
      ]
    };
  }
}
