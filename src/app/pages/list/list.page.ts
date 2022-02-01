import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit, OnDestroy {
  students: any;
  error = false;
  searchTerm:string="";
  type:string="string";
  subscription: Subscription | undefined;

  setSortParams(param){
this.type=param.typ;
}

  constructor(private actRoute:ActivatedRoute, private activity: ActivityService, private  _route: Router,public loadingController: LoadingController ) {
    this.actRoute.queryParams.subscribe((res)=>{
      if(res['reload']){
this.getStudents()
      }
    })
   }

  ngOnInit(): void {
    this.getStudents()
    
  }
  async getStudents(ev?){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      
    });
    if(!ev){
      await loading.present();
    }
    
   this.subscription = this.activity.getAllStudents().subscribe((result: any)=>{
      this.students = result;
      if(ev){
        ev.target.complete();
      }
   loading.dismiss();
    },
    error=>{
      loading.dismiss()
      if(ev){
        ev.target.complete();
      }
      this.error=error
    console.log("Error info",error)
    }
    )
  }
  pageLoad(){
    this.getStudents();
    this.error =false;
  }


  doRefresh(event) {
    this.searchTerm ="";
    this.getStudents(event);

  }

 getstudentId(_id: any){
    this._route.navigate([`view-by-id/${_id}`])
  } 
ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
  
}
