import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent,AdminNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Driving-school';
  admin:boolean=false

  ngOnInit() {
    console.log(window.location.href);
    if (window.location.href.includes('admin-dashboard')) {
      this.admin=true
      console.log('Path includes admin-dashboard');
    } else {
      this.admin=false
      console.log('Path does not include admin-dashboard');
    }
  }
}
