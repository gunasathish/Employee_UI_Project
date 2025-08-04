import { Component, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  username: string = '';
  password: string = '';


  router=inject(Router);
  service=inject(ServiceService);

  constructor() {
    // Subscribe to the cardData observable

  }




    loginfunction() {
  
     const username = this.username;
     const password = this.password;
    

  this.service.login(username,password).subscribe(
      response => {
        console.log('Login Success:', response);
       // router.NavBarComponent['/registerform'];
       this.router.navigate(['/dashboard']); 
      },
      error => {
        console.error('Login Failed:', error);
      }
    );
  }


}
