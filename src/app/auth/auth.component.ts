import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

   email: string = '';
  password: string = '';

  submitForm() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }

}
