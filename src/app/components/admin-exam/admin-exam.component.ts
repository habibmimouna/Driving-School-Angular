import { Component } from '@angular/core';
import { Exam } from '../../models/exam';
import { ExamService } from '../../services/exam.service';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-exam',
  standalone: true,
  imports: [AdminNavComponent,CommonModule,FormsModule],
  templateUrl: './admin-exam.component.html',
  styleUrl: './admin-exam.component.css'
})
export class AdminExamComponent {monitorsList: Exam[] = [];
  selectedExam:Exam|null =null;
  exam:Exam={
      type:"",
      lieu:"",
      clientId:0,
      voitureId:0,
      
  }
  constructor(private examService: ExamService) {}
  ngOnInit(): void {
    
    this.examService.getExamsList().subscribe((data) => {
      console.log('Login successful', data);
      this.monitorsList = data;
    });
   
  }
  addExam() {
    if (
      !this.exam.type ||
      !this.exam.lieu ||
      !this.exam.clientId ||
      !this.exam.voitureId 
      
    ) {
      window.alert('Please fill in all exam attributes.');
      return;
    }
    this.examService.createExam(this.exam).subscribe(
      (data) => {
        console.error('exam made with success:', data);
        window.alert('exam crée avec succée  :) !!');
        window.location.reload();
      },
      (error) => {
        console.error('Error making exam:', error);
      }
    );
  }
  deleteExam(id: number | undefined) {
    if (id) {
      this.examService.deleteExam(id).subscribe(() => {
        window.alert('exam supprimer avec succée !');
        window.location.reload();
      });
    }
  }
  modifyExam(monitor: Exam) {
    this.selectedExam = monitor;
  }
  updateExam(): void {
    if (this.selectedExam) {
      if (this.selectedExam.id) {
        console.log(this.selectedExam);
        console.log(this.selectedExam.id);
        console.log(this.exam);
        
  
        
        this.exam.id = this.selectedExam.id;
        this.examService
          .updateExam(this.selectedExam.id, this.exam)
          .subscribe((exam) => {
            console.log(exam);
          });
      }
    }
    this.closePopup();
     window.location.reload()
  }
  closePopup(): void {
    this.selectedExam = null;
  }
  }
  
