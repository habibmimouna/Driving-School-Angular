import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-condidat-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './condidat-navbar.component.html',
  styleUrl: './condidat-navbar.component.css'
})
export class CondidatNavbarComponent {
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    this.router.navigate(['/auth/login']);

  }


}
