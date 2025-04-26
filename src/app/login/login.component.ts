import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = { email: '', password: ''};

  constructor(private http: HttpClient){}

  onLogin()
  {
    this.http.get<any[]>('assets/pizza.json').subscribe(users => {
      const user = users.find(u => u.email === this.loginData.email && u.password === this.loginData.password);
      if(user){
        alert('Login Successful');
      } 
      else{
        alert());
      } 
    })
  }

  

}
