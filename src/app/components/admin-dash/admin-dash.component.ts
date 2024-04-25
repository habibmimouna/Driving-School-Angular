import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [CommonModule,NavbarComponent,RouterLink,AdminNavComponent],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent { 


  myTableData: TableRow[] = [
  { Matricule:"223/5543",Kilometrage:"130435", Garage:"garage 2",VisiteTechnique:"10-8-2025" },
  {Matricule:"223/5543",Kilometrage:"130435", Garage:"garage 2",VisiteTechnique:"10-8-2025"},
  { Matricule:"223/5543",Kilometrage:"130435", Garage:"garage 2",VisiteTechnique:"10-8-2025" }
];
myTableSession: TableRow[] = [
  { Matricule:"13-7-2024",Kilometrage:"2 ", Garage:"Houssem",VisiteTechnique:"houssem saleh" },
  {Matricule:"23-7-2024",Kilometrage:"2", Garage:"aymen",VisiteTechnique:"ala chatbouri"},
  { Matricule:"28-7-2024",Kilometrage:"1,5", Garage:"mohamed",VisiteTechnique:"yessine ali" }
];
myTableCondidat: TableRow[] = [
  { Matricule:"mohamed yessine",Kilometrage:"12456732 ", Garage:"code",VisiteTechnique:"houssem saleh" },
  {Matricule:"saleh jaza",Kilometrage:"10325463", Garage:"conduite",VisiteTechnique:"ala chatbouri"},
  { Matricule:"olfa hassine",Kilometrage:"10243790", Garage:"code",VisiteTechnique:"yessine ali" }
];

}

interface TableRow {
Matricule:string;
Kilometrage:string;
Garage:string;
VisiteTechnique:string;

}