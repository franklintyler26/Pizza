import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    fullName:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
    country:''
  };

  constructor(private regService:RegistrationService)
  {}

  register()
  {
    console.log('Register Clicked');
    if (this.user.password !== this.user.confirmPassword)
    {
      alert('Passwords do not match!');
      return;
    }

    const 
    { confirmPassword, ...userData} = this.user;

    this.regService.registerUser(userData).subscribe(() =>{
      alert('Registration successfull!');
      this.resetForm();
    });
  }

  resetForm() {
    this.user = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      country: ''
    };
  }

}
