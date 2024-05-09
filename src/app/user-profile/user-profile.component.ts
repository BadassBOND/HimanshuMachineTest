import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
url:any;

constructor(public dialog: MatDialog,public userService : UserServiceService,public router : Router){
  this.router.routeReuseStrategy.shouldReuseRoute = function () {
    return false;
  };
}

profile:any;

openDialog() {
  const dialogRef = this.dialog.open(UserRegistrationComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

ngOnInit(){
  
  console.log(this.userService.profileData);
  this.profile ={
    firstname:'',
    lastname:'',
    email:'',
    contact:'',
    age:'',
    States:'',
    tag:''
  }

  this.profile = this.userService.profileData.value;
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
}
