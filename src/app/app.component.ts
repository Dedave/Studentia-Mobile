import { Component, ViewChild } from '@angular/core';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet;
 subscribe: any;
  constructor(private platform: Platform, private location: Location) {this.subscribe= this.platform.backButton.subscribeWithPriority(555555,()=>{
    if(!this.routerOutlet.canGoBack()){

      if(window.confirm('Press OK to exit App'))
      {
        navigator["app"].exitApp();
      }
    }
    else{
      this.location.back();
    }
  }
  )}
  

}
