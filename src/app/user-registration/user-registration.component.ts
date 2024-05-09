import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
     MatSliderModule,
     ReactiveFormsModule,
     CommonModule],
     providers: [UserProfileComponent]
})
export class UserRegistrationComponent {

myDataForm! : FormGroup;
showContent = true
url:any;
profileData:any;
constructor(private formbuilder: FormBuilder , private router : Router, public userService : UserServiceService,public userprofile : UserProfileComponent){}

formatLabel(value: number): string {
  if (value >= 20) {
    return value+'';
  }
    return `${value}`;
}

onSelectFile(event:any) {
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => { // called once readAsDataURL is completed
      this.url = event.target != null ? event.target.result:'';
    }
  }
}

ngOnInit(){

  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  this.myForm();
  // this.profileData = {
  //   firstName:'',
  //   lastName:'',
  //   email:'',
  //   contactNumber:'',
  //   age:'',
  //   state:'',
  //   country:''
  // }
}

myForm(){
  
  this.myDataForm = this.formbuilder.group({
   firstname:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/),Validators.maxLength(20)]],
   lastname:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/),Validators.maxLength(20)]],
   email : ['',[Validators.required]],
   contact : ['',[Validators.required,Validators.pattern("[0-9]*$")]],
   checkbox : ['',[Validators.requiredTrue]],
   age:['',[Validators.required]],
   States: ['',[Validators.required]],
   tag: ['',[Validators.required]]

  })


}

submitprofile(){
   this.userService.profileData = this.myDataForm;
   this.userService.profilePhoto = this.url;
   this.userprofile.ngOnInit();
  this.router.navigateByUrl('submitprofile');
}

}
