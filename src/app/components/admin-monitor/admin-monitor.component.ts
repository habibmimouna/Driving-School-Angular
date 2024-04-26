import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-monitor',
  standalone: true,
  imports: [AdminNavComponent,FormsModule,CommonModule],
  templateUrl: './admin-monitor.component.html',
  styleUrl: './admin-monitor.component.css'
})
export class AdminMonitorComponent {nom: string = '';
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
