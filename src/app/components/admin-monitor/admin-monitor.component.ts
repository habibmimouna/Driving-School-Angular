import { Component } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MonitorService } from '../../services/monitor.service';
import { Monitor } from '../../models/monitor';

@Component({
  selector: 'app-admin-monitor',
  standalone: true,
  imports: [AdminNavComponent,FormsModule,CommonModule],
  templateUrl: './admin-monitor.component.html',
  styleUrl: './admin-monitor.component.css'
})
export class AdminMonitorComponent {nom: string = '';
monitorsList: Monitor[] = [];
selectedMonitor:Monitor|null =null;
monitor:Monitor={
    nom:"",
    salaire:"",
    email:"",
    password:"",
    heure_Effectue:"",
}
constructor(private monitorService: MonitorService) {}
ngOnInit(): void {
  
  this.monitorService.getMonitorsList().subscribe((data) => {
    console.log('Login successful', data);
    this.monitorsList = data;
  });
 
}
addMonitor() {
  if (
    !this.monitor.nom ||
    !this.monitor.email ||
    !this.monitor.password ||
    !this.monitor.salaire ||
    !this.monitor.heure_Effectue
  ) {
    window.alert('Please fill in all monitor attributes.');
    return;
  }
  this.monitorService.createMonitor(this.monitor).subscribe(
    (data) => {
      console.error('monitor made with success:', data);
      window.alert('Candidat crée avec succée  :) !!');
      window.location.reload();
    },
    (error) => {
      console.error('Error making reservation:', error);
    }
  );
}
deleteMonitor(id: number | undefined) {
  if (id) {
    this.monitorService.deleteMonitor(id).subscribe(() => {
      window.alert('candidat supprimer avec succée !');
      window.location.reload();
    });
  }
}
modifyMonitor(monitor: Monitor) {
  this.selectedMonitor = monitor;
}
updateMonitor(): void {
  if (this.selectedMonitor) {
    if (this.selectedMonitor.id) {
      console.log(this.selectedMonitor);
      console.log(this.selectedMonitor.id);
      console.log(this.monitor);
      

      
      this.monitor.id = this.selectedMonitor.id;
      this.monitorService
        .updateMonitor(this.selectedMonitor.id, this.monitor)
        .subscribe((monitor) => {
          console.log(monitor);
        });
    }
  }
  this.closePopup();
   window.location.reload()
}
closePopup(): void {
  this.selectedMonitor = null;
}
}
