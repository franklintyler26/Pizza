import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiURL = 'http://localhost:3000/registration';

  constructor(private http: HttpClient) { }

  registerUser(data:any) {
    return this.http.post(this.apiURL, data);
  }

}
