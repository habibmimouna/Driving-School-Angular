import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [AdminNavComponent, CommonModule, FormsModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css',
})
export class AdminUserComponent {
  nom: string = '';
  age: string = '';
  cin: string = '';
  etat: string = '';
  myTableCondidat: TableRow[] = [
    {
      Matricule: 'mohamed yessine',
      Kilometrage: '12456732 ',
      Garage: 'code',
      VisiteTechnique: 'houssem saleh',
    },
    {
      Matricule: 'saleh jaza',
      Kilometrage: '10325463',
      Garage: 'conduite',
      VisiteTechnique: 'ala chatbouri',
    },
    {
      Matricule: 'olfa hassine',
      Kilometrage: '10243790',
      Garage: 'code',
      VisiteTechnique: 'yessine ali',
    },
  ];
}

interface TableRow {
  Matricule: string;
  Kilometrage: string;
  Garage: string;
  VisiteTechnique: string;
}
