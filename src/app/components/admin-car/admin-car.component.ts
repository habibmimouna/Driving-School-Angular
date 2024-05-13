import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { CommonModule } from '@angular/common';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-car',
  standalone: true,
  imports: [AdminNavComponent, CommonModule, FormsModule],
  templateUrl: './admin-car.component.html',
  styleUrl: './admin-car.component.css',
})
export class AdminCarComponent {
  carsList: Car[] = [];
  selectedCar: Car | null = null;
  car: Car = {
    matricule: '',
    kilometrage: '',
    garage: '',
    dateVisit: '',
  };
  nom: string = '';
  age: string = '';
  cin: string = '';
  etat: string = '';
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCarsList().subscribe((data) => {
      console.log('Login successful', data);
      this.carsList = data;
    });
  }

  addCar() {
    if (
      !this.car.matricule ||
      !this.car.kilometrage ||
      !this.car.garage ||
      !this.car.dateVisit
    ) {
      window.alert('Please fill in all voiture attributes.');
      return;
    }
    console.log(this.car);

    this.carService.createCar(this.car).subscribe(
      (data) => {
        console.error('car made with success:', data);
        window.alert('Voiture crée avec succée  :) !!');
        window.location.reload();
      },
      (error) => {
        console.error('Error creating car:', error);
      }
    );
  }
  deleteCar(id: number | undefined) {
    if (id) {
      this.carService.deleteCar(id).subscribe(() => {
        window.alert('candidat supprimer avec succée !');
        window.location.reload();
      });
    }
  }
  modifyCar(car: Car) {
    this.selectedCar = car;
  }
  updateCar(): void {
    if (
      !this.car.matricule ||
      !this.car.kilometrage ||
      !this.car.garage ||
      !this.car.dateVisit
    ) {
      window.alert('Please fill in all voiture attributes.');
      return;
    }
    if (this.selectedCar) {
      if (this.selectedCar.id) {
        console.log(this.selectedCar);
        console.log(this.selectedCar.id);
        console.log(this.car);

        this.car.id = this.selectedCar.id;
        this.carService
          .updateCar(this.selectedCar.id,this.car)
          .subscribe((car) => {
            console.log(car);
          });
      }
    }
    this.closePopup();
    window.location.reload();
  }
  closePopup(): void {
    this.selectedCar = null;
  }
}
