import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  students: any;
  error: any;
  constructor(private activity: ActivityService, private  _route: Router,public loadingController: LoadingController ) { }

  ngOnInit(): void {
    
  }
  async ionViewDidEnter(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.activity.getAllStudents().subscribe((result: any)=>{
      this.students = result;
      
   loading.onDidDismiss();
    },
    error=>{
      this.error=error
    console.log("Error info",error)
    }
    )
    await loading.onDidDismiss();
  }
  pageLoad()
{
this.ionViewDidEnter();   
} 
 getstudentId(_id: any){
    this._route.navigate([`view-by-id/${_id}`])
  }
}
