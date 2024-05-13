import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {Monitor} from '../models/monitor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private baseURL = 'http://localhost:5002/api/Moniteurs';

  private readonly USER_KEY = 'currentUser';

  constructor(private httpClient: HttpClient) {}

  getMonitorsList(): Observable<Monitor[]> {
    return this.httpClient.get<Monitor[]>(`${this.baseURL }`);
  }

  createMonitor(monitor: Monitor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, monitor);
  }

  deleteMonitor(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getMonitorById(id: number): Observable<Monitor> {
    return this.httpClient.get<Monitor>(`${this.baseURL}/${id}`);
  }

  updateMonitor(id: number, monitor: Monitor): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, monitor);
  }
  setCurrentMonitor(monitor: Monitor): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(monitor));
  }

  getCurrentMonitor(): Monitor | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }
}
