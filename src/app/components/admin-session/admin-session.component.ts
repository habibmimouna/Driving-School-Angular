import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SessionService } from '../../services/session.service';
import { Session } from '../../models/session';

@Component({
  selector: 'app-admin-session',
  standalone: true,
  imports: [AdminNavComponent,FormsModule,CommonModule],
  templateUrl: './admin-session.component.html',
  styleUrl: './admin-session.component.css'
})
export class AdminSessionComponent {

  nom: string = '';
  age: string = '';
  cin: string = '';
  etat: string = '';
  sessionsList:Session[]=[];
  selectedSession:Session|null =null;
session:Session={
    date:"",
    duree:"00"+":"+"00"+":"+"00",
    type:"",
    clientId:0,
    moniteurId:0,
    voitureId:0,
    coursId:0
}

  constructor(private sessionService : SessionService){}
  ngOnInit(): void {
   this.sessionService.getSessionsList().subscribe((data)=>{
    console.log("this are the sessions",data);
    this.sessionsList=data
    
   })
  }
  addSession() {
    if (
      !this.session.type ||
      !this.session.date ||
      !this.session.duree ||
      !this.session.clientId ||
      !this.session.moniteurId||
      !this.session.voitureId
    ) {
      window.alert('Please fill in all session attributes.');
      return;
    }
    this.sessionService.createSession(this.session).subscribe(
      (data) => {
        console.error('session made with success:', data);
        window.alert('Candidat crée avec succée  :) !!');
        window.location.reload();
      },
      (error) => {
        console.error('Error making reservation:', error);
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
  updateSession(): void {
    if (this.selectedSession) {
      if (this.selectedSession.id) {
        console.log(this.selectedSession);
        console.log(this.selectedSession.id);
        console.log(this.session);
        
  
        
        this.session.id = this.selectedSession.id;
        this.sessionService
          .updateSession(this.selectedSession.id, this.session)
          .subscribe((session) => {
            console.log(session);
          });
      }
    }
    this.closePopup();
     window.location.reload()
  }
  closePopup(): void {
    this.selectedSession = null;
  }
  }
  


