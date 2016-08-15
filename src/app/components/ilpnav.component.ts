import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'ilp-nav',
	moduleId: module.id,
	templateUrl: './ilpnav.component.html',
	styleUrls: ['./ilpnav.component.css'],
	directives: [ROUTER_DIRECTIVES]
})
export class IlpNavComponent { }
