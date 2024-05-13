import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService { private baseURL = 'http://localhost:5002/api/Sessions';

private readonly USER_KEY = 'currentUser';

constructor(private httpClient: HttpClient) {}

getSessionsList(): Observable<Session[]> {
  return this.httpClient.get<Session[]>(`${this.baseURL }`);
}

createSession(session: Session): Observable<Object> {
  return this.httpClient.post(`${this.baseURL}`, session);
}

deleteSession(id: number): Observable<Object> {
  return this.httpClient.delete(`${this.baseURL}/${id}`);
}

getSessionById(id: number): Observable<Session> {
  return this.httpClient.get<Session>(`${this.baseURL}/${id}`);
}

updateSession(id: number, session: Session): Observable<Object> {
  return this.httpClient.put(`${this.baseURL}/${id}`, session);
}
setCurrentSession(session: Session): void {
  localStorage.setItem(this.USER_KEY, JSON.stringify(session));
}

getCurrentSession(): Session | null {
  const userJson = localStorage.getItem(this.USER_KEY);
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
}
}
