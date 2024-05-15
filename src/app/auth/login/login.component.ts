import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  errorMessage: string = '';
  email: string = '';
  password: string = '';

  constructor(private route:ActivatedRoute , private authService:AuthService){}

   onSubmit(){
    this.authService.login(this.email,this.password)

   }

}
