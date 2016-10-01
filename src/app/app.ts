import {Component} from '@angular/core';
import {LoopBackConfig} from './lbservice/index';

@Component({
  selector   : 'app',
  styleUrls: ['./app.scss'],
  templateUrl: './app.pug',
})
export class AppComponent {
  constructor() {
    LoopBackConfig.setBaseURL('http://0.0.0.0:3000');
    LoopBackConfig.setApiVersion('api');
  }
}
