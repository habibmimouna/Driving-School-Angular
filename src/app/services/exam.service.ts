import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exam } from '../models/exam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {private baseURL = 'http://localhost:5002/api/Examen';

private readonly USER_KEY = 'currentUser';

constructor(private httpClient: HttpClient) {}

getExamsList(): Observable<Exam[]> {
  return this.httpClient.get<Exam[]>(`${this.baseURL }`);
}

createExam(exam: Exam): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}`, exam);
}

deleteExam(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

getExamById(id: number): Observable<Exam> {
  return this.httpClient.get<Exam>(`${this.baseURL}/${id}`);
}

updateExam(id: number, exam: Exam): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, exam);
}
setCurrentExam(exam: Exam): void {
  localStorage.setItem(this.USER_KEY, JSON.stringify(exam));
}

getCurrentExam(): Exam | null {
  const userJson = localStorage.getItem(this.USER_KEY);
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
}
}

