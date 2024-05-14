import { Component } from '@angular/core';
import { CondidatNavbarComponent } from '../condidat-navbar/condidat-navbar.component';
import { CommonModule } from '@angular/common';
import { Session } from '../../../models/session';
import { User } from '../../../models/user';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-condidat-profile',
  standalone: true,
  imports: [CondidatNavbarComponent,CommonModule],
  templateUrl: './condidat-profile.component.html',
  styleUrl: './condidat-profile.component.css'
})
export class CondidatProfileComponent {
  pastSessions:Session[]=[]
  today = new Date();
  user: User = {
    id:33,
    cin:'14013678',
    email: 'habib@gmail.com',
    password: '',
    age:'23',
    etat_Condidat:'Conduite',
    nom:'habib mimouna'
  };
  constructor(private sessionService:SessionService){}
  ngOnInit(): void {

    this.sessionService.getSessionsList().subscribe((sessionsList) => {
      sessionsList.map((session) => {
        if (session.clientId==this.user.id && new Date(session.date) > this.today) {
          this.pastSessions.push(session)
        }
      });
      console.log(this.pastSessions);
    }
    
    
  );
  }

}
