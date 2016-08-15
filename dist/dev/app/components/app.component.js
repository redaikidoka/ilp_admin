var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var home_component_1 = require('../../home/components/home.component');
var about_component_1 = require('../../about/components/about.component');
var name_list_service_1 = require('../../shared/services/name-list.service');
var ilpnav_component_1 = require('./ilpnav.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [name_list_service_1.NameListService],
            moduleId: module.id,
            templateUrl: './app.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES, ilpnav_component_1.IlpNavComponent]
        }),
        router_1.RouteConfig([
            { path: '/', name: 'Home', component: home_component_1.HomeComponent },
            { path: '/about', name: 'About', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QsdUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0QsK0JBQTRCLHNDQUFzQyxDQUFDLENBQUE7QUFDbkUsZ0NBQTZCLHdDQUF3QyxDQUFDLENBQUE7QUFDdEUsa0NBQThCLHlDQUF5QyxDQUFDLENBQUE7QUFDeEUsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFFbkQ7SUFBQUE7SUFZMkJDLENBQUNBO0lBWjVCRDtRQUFDQSxnQkFBU0EsQ0FBQ0E7WUFDVEEsUUFBUUEsRUFBRUEsUUFBUUE7WUFDbEJBLGFBQWFBLEVBQUVBLENBQUNBLG1DQUFlQSxDQUFDQTtZQUNoQ0EsUUFBUUEsRUFBRUEsTUFBTUEsQ0FBQ0EsRUFBRUE7WUFDbkJBLFdBQVdBLEVBQUVBLHNCQUFzQkE7WUFDbkNBLGFBQWFBLEVBQUVBLHdCQUFpQkEsQ0FBQ0EsSUFBSUE7WUFDckNBLFVBQVVBLEVBQUVBLENBQUNBLDBCQUFpQkEsRUFBRUEsa0NBQWVBLENBQUNBO1NBQ2pEQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBT0EsSUFBSUEsRUFBRUEsTUFBTUEsRUFBR0EsU0FBU0EsRUFBRUEsOEJBQWFBLEVBQUdBO1lBQzVEQSxFQUFFQSxJQUFJQSxFQUFFQSxRQUFRQSxFQUFFQSxJQUFJQSxFQUFFQSxPQUFPQSxFQUFFQSxTQUFTQSxFQUFFQSxnQ0FBY0EsRUFBRUE7U0FDN0RBLENBQUNBOztxQkFDMEJBO0lBQURBLG1CQUFDQTtBQUFEQSxDQVozQixBQVk0QkEsSUFBQTtBQUFmLG9CQUFZLGVBQUcsQ0FBQSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtIb21lQ29tcG9uZW50fSBmcm9tICcuLi8uLi9ob21lL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBYm91dENvbXBvbmVudH0gZnJvbSAnLi4vLi4vYWJvdXQvY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQnO1xuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9uYW1lLWxpc3Quc2VydmljZSc7XG5pbXBvcnQge0lscE5hdkNvbXBvbmVudH0gZnJvbSAnLi9pbHBuYXYuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV0sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIElscE5hdkNvbXBvbmVudF1cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgICAgICBuYW1lOiAnSG9tZScsICBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIG5hbWU6ICdBYm91dCcsIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==