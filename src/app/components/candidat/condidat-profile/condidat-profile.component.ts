import { Component } from '@angular/core';
import { CondidatNavbarComponent } from '../condidat-navbar/condidat-navbar.component';
import { CommonModule } from '@angular/common';
import { Session } from '../../../models/session';
import { User } from '../../../models/user';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-condidat-profile',
  standalone: true,
  imports: [CondidatNavbarComponent, CommonModule],
  templateUrl: './condidat-profile.component.html',
  styleUrl: './condidat-profile.component.css',
})
export class CondidatProfileComponent {
  pastSessions: Session[] = [];
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
  constructor(private sessionService: SessionService) {}
  ngOnInit(): void {
    let User = localStorage.getItem('currentUser');

    if (User) {
      const jsonObject = JSON.parse(User);
      this.currentUser = jsonObject;
      console.log(this.currentUser);
    }
    this.sessionService.getSessionsList().subscribe((sessionsList) => {
      sessionsList.map((session) => {
        if (
          session.clientId == this.currentUser.id &&
          new Date(session.date) < this.today
        ) {
          this.pastSessions.push(session);
        }
      });
      console.log("hello",this.pastSessions);
    });
  }
}
