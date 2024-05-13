import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CarService } from '../../services/car.service';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';
import { Car } from '../../models/car';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, AdminNavComponent],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css',
})
export class AdminDashComponent {
  usersList: User[] = [];
  monitorsList: Monitor[] = [];
  carsList: Car[] = [];
  constructor(private userService: UserService, private carService: CarService,private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data) => {
      console.log('Login successful', data);
      this.usersList = data;
    });
    this.monitorService.getMonitorsList().subscribe((data) => {
      console.log('Login successful', data);
      this.monitorsList = data;
    });
    this.carService.getCarsList().subscribe((data) => {
      console.log('Login successful', data);
      this.carsList = data;
    });
  }

}


