import { Component } from '@angular/core';
import { CondidatNavbarComponent } from '../condidat-navbar/condidat-navbar.component';

@Component({
  selector: 'app-condidat-home',
  standalone: true,
  imports: [CondidatNavbarComponent],
  templateUrl: './condidat-home.component.html',
  styleUrl: './condidat-home.component.css'
})
export class CondidatHomeComponent {

}
