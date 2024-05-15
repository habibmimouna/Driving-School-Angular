import { Component } from '@angular/core';
import { SessionService } from '../../../services/session.service';
import { Session } from '../../../models/session';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { MoniteurNavbarComponent } from '../moniteur-navbar/moniteur-navbar.component';
import { Car } from '../../../models/car';
import { FormsModule } from '@angular/forms';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-moniteur-profile',
  standalone: true,
  imports: [CommonModule, MoniteurNavbarComponent, FormsModule],
  templateUrl: './moniteur-profile.component.html',
  styleUrl: './moniteur-profile.component.css',
})
export class MoniteurProfileComponent {
  pastSessions: Session[] = [];
  carsList:Car[]=[]
  newCar:Car|null=null
  popup:boolean=false
  today = new Date();
  currentUser: User = {
    id: 0,
    cin: '',
    email: '',
    password: '',
    age: '',
    etat_Condidat: '',
    nom: '',
  };
  car: Car = {
    matricule: '',
    kilometrage: '',
    garage: '',
    dateVisit: '',
  };
  constructor(
    private sessionService: SessionService,
    private carService: CarService
  ) {}
  ngOnInit(): void {
    let User = localStorage.getItem('currentUser');

    if (User) {
      const jsonObject = JSON.parse(User);
      this.currentUser = jsonObject;
      console.log(this.currentUser);
    }
    this.carService.getCarsList().subscribe((carsList)=>{
      this.carsList=carsList
    })
    this.sessionService.getSessionsList().subscribe((sessionsList) => {
      sessionsList.map((session) => {
        if (
          session.clientId == this.currentUser.id &&
          new Date(session.date) > this.today
        ) {
          this.pastSessions.push(session);
        }
      });
      console.log(this.pastSessions);
    });
  }
openPop(){
  this.popup=true
}
  addCar(): void {
   
    this.carService.createCar(this.car).subscribe((data) => {
      console.log(data);
    });
    //this.closePopup();
   // window.location.reload();
  }
  closePopup(): void {
    this.car = {
      matricule: '',
      kilometrage: '',
      garage: '',
      dateVisit: '',
    };
    this.popup=false
  }

}
