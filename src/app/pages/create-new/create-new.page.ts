import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivityService } from 'src/app/services/activity.service';
import { ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.page.html',
  styleUrls: ['./create-new.page.scss'],
})
export class CreateNewPage implements OnInit, OnDestroy{
  
  studentForm:FormGroup;
  isSubmitted = false;
  subscription: Subscription | undefined;
  constructor( private activity: ActivityService, private formBuilder: FormBuilder, public toastController: ToastController ) { }

  ngOnInit() {
    this. studentForm = this.formBuilder.group({
      first_name: ['', [Validators.required, Validators.minLength(3)]],
      last_name: ['', [Validators.required, Validators.minLength(3)]],
      faculty: ['', [Validators.required, Validators.minLength(3)]],
      department: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', Validators.required],
      sex: ['', Validators.required]
    });
  }
 get errorControl() {
  return this.studentForm.controls;
}
 
  onSubmit(){
    this.isSubmitted = true;
    if(!this.studentForm.valid){
      return false;
    }
    else{
   this.subscription = this.activity.createNew(this.studentForm.value).subscribe(async (result)=>{
       // this.notifyService.showSuccess("Student record created successfully!!", "Creation Successful")
        const toast = await this.toastController.create({
          message: 'Student record created successfully!!',
          duration: 3000
        });
        toast.present();

         this.studentForm.reset();
         this.isSubmitted = false;
      })
      return true;
    }

  }
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}