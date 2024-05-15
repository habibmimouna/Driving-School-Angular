import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-nav',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('currentUser')
    this.router.navigate(['/auth/login']);

  }

}
