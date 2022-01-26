import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
    
  }
  reset(){
    this._route.navigate(['/tab/list'])
  }

}
