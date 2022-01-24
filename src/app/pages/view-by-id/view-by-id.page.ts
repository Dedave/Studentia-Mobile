import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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
  constructor(private activity: ActivityService, private activeRoute: ActivatedRoute, private  _route: Router,  public toastController: ToastController ) { }

  ngOnInit():void {
    this.activeRoute.params.subscribe((result)=>{
      
      this.details = result['id'];

      this.activity.getStudentId(this.details).subscribe((result: any)=>{
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
    this.activity.EditStudentId(this.student._id, this.student).subscribe(async (result)=>{

      const toast = await this.toastController.create({
        message: 'Student record updated successfully!!',
        duration: 3000
      });
      toast.present();

      this.isOpen = false;
        this.showEdit = true;
      
      }, err=>{
        alert(err.error.msg);
      
    })
  }
  delById(){
    this.activity.delStudentById(this.student._id ).subscribe(async (result: any)=>{
      const toast = await this.toastController.create({
        message: 'Student record deleted successfully!!',
        duration: 3000
      });
      toast.present();

    this.student = result.student;
    // this._route.navigateByUrl('/tab/tab')
    })
  }

}
