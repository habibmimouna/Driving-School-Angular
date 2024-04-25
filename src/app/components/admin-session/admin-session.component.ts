import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-admin-session',
  standalone: true,
  imports: [AdminNavComponent],
  templateUrl: './admin-session.component.html',
  styleUrl: './admin-session.component.css'
})
export class AdminSessionComponent {

}
