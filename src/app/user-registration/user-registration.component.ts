import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
     CommonModule]
})
export class UserRegistrationComponent {

myDataForm! : FormGroup;
showContent = true
url:any;

constructor(private formbuilder: FormBuilder , private router : Router){}

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
  this.myForm();
}

myForm(){
  this.myDataForm = this.formbuilder.group({
   name:['',[Validators.required,Validators.pattern(/^[a-zA-Z]*$/),Validators.maxLength(20)]]

  })
}

submitprofile(){
  this.router.navigateByUrl('submitprofile');
}

}
