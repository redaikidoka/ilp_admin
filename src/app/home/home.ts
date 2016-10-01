import {Component} from '@angular/core';
import {LoopBackConfig} from '../lbservice/index';
import {VwLoginList} from '../lbservice/models';

@Component({
  selector: 'home',
  styleUrls: ['./home.scss'],
  templateUrl: './home.pug'
})
export class Home {

  private loginsList: VwLoginList[];
  
  VwLoginList.find().$promise.then();

  constructor() {
    LoopBackConfig.setBaseURL('http://0.0.0.0:3000');
    LoopBackConfig.setApiVersion('api');
  }

}
