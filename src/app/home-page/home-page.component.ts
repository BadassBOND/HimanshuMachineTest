import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { UserRegistrationComponent } from '../user-registration/user-registration.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [MatButtonModule, MatDialogModule],
  standalone: true
})
export class HomePageComponent {
  constructor(public dialog: MatDialog, public router : Router) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(UserRegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}
