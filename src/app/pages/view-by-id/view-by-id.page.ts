import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.page.html',
  styleUrls: ['./view-by-id.page.scss'],
})
export class ViewByIdPage implements OnInit {
  student:any;
  details: any;
  body: any;
  isOpen = false;
  showEdit = true;
  faculty: any;
  subscription1: Subscription | undefined;
  subscription2: Subscription | undefined;
  subscription3: Subscription | undefined;
  constructor(private activity: ActivityService, 
    private activeRoute: ActivatedRoute, private  _route: Router, 
    public toastController: ToastController, 
    public alertController: AlertController ) { }

  ngOnInit():void {
    this.activeRoute.params.subscribe((result)=>{
      
      this.details = result['id'];

      this.subscription1 = this.activity.getStudentId(this.details).subscribe((result: any)=>{
        this.student = result;
        this.faculty=this.student.faculty
        
      }
    )
    })
  }
  ClickEdit(){
    this.isOpen = true;
    this.showEdit = false;
  }
  EditStudent(){
    this.subscription2 = this.activity.EditStudentId(this.student._id, this.student).subscribe(async (result)=>{

      const toast = await this.toastController.create({
        message: 'Student record updated successfully!!',
        duration: 2000
      });
      toast.present();

      this.isOpen = false;
        this.showEdit = true;
      
      }, err=>{
        alert(err.error.msg);
      
    })
  }
  
    async  delById(){
       const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Confirm Delete',
        message: 'Are you sure you want to delete record?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.subscription3 = this.activity.delStudentById(this.student._id ).subscribe(async (result: any)=>{
     
       const toast = await this.toastController.create({
        message: 'Student record deleted successfully!!',
        duration: 2000
      });
      toast.present();
    this.isOpen = false;
    this.student = result.student;
    //window.location.href = '/tab/tab/list';
    this._route.navigate(['/tab/list'],{queryParams:{reload:true}})
    })
            }
          }
        ]
      });
      alert.present(); 
         
  }
  ngOndestroy(){
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();

  }

}
