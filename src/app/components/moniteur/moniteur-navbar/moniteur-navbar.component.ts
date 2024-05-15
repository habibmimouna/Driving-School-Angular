import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-moniteur-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './moniteur-navbar.component.html',
  styleUrl: './moniteur-navbar.component.css'
})
export class MoniteurNavbarComponent {
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    this.router.navigate(['/auth/login']);

  }

}
