import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MoniteurNavbarComponent } from '../moniteur-navbar/moniteur-navbar.component';
import { Session } from '../../../models/session';
import { SessionService } from '../../../services/session.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-moniteur-session',
  standalone: true,
  imports: [CommonModule,MoniteurNavbarComponent],
  templateUrl: './moniteur-session.component.html',
  styleUrl: './moniteur-session.component.css'
})
export class MoniteurSessionComponent { userSessions: Session[] = [];
  selectedSession:Session|null =null;
  currentUser:User= {
    id:33,
    cin:'',
    email: '',
    password: '',
    age:'',
    etat_Condidat:'',
    nom:''
  }
 
session:Session={
    date:"",
    duree:"00"+":"+"00"+":"+"00",
    type:"",
    clientId:0,
    moniteurId:0,
    voitureId:0,
    coursId:0
}

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {

    this.sessionService.getSessionsList().subscribe((sessionsList) => {
      sessionsList.map((session) => {
        if (session.clientId==this.currentUser.id) {
          this.userSessions.push(session)
        }
      });
      console.log(this.userSessions);
    }
    
    
  );
  }
  deleteSession(id: number | undefined) {
   
    
    if (id) {
      this.sessionService.deleteSession(id).subscribe(() => {
        window.alert('Session supprimer avec succée !');
        window.location.reload();
      });
    }
  }
  modifySession(session: Session) {
    this.selectedSession = session;
  }
}
