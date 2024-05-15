import { Component } from '@angular/core';
import { CondidatNavbarComponent } from '../condidat-navbar/condidat-navbar.component';
import { ExamService } from '../../../services/exam.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-condidat-exam',
  standalone: true,
  imports: [CondidatNavbarComponent,CommonModule],
  templateUrl: './condidat-exam.component.html',
  styleUrl: './condidat-exam.component.css',
})
export class CondidatExamComponent {
  codeHours:number=0
  firstTest:string="NOT YET"
  firstTestResult:string=""
  secondTestResult:string=""

  currentUser: User = {
    id: 0,
    cin: '',
    email: '',
    password: '',
    age: '',
    etat_Condidat: '',
    nom: '',
  };
  constructor(private examService: ExamService) {}
  ngOnInit(): void {
    let User = localStorage.getItem('currentUser');

    if (User) {
      const jsonObject = JSON.parse(User);
      this.currentUser = jsonObject;
      console.log(this.currentUser);
    }
    if(this.currentUser.etat_Condidat=="Conduite"){
      this.codeHours=18;
      this.firstTest="Congrats!!"
      this.firstTestResult="Passed"
    }

    
  }
}
