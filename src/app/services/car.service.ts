import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Car} from '../models/car'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = 'http://localhost:5002/api/Voitures';

  private readonly USER_KEY = 'currentUser';

  constructor(private httpClient: HttpClient) {}

  getCarsList(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${this.baseURL }`);
  }

  createCar(car: Car): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, car);
  }

  deleteCar(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  getCarById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }

  updateCar(id:number, car: Car): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, car);
  }
  setCurrentCar(car: Car): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(car));
  }

  getCurrentCar(): Car | null {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      return JSON.parse(userJson);
    }
    return null;
  }
}
