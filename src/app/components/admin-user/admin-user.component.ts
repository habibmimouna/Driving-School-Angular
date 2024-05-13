import { Component, ViewChild } from '@angular/core';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [AdminNavComponent, CommonModule, FormsModule],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.css',
})
export class AdminUserComponent {
  usersList: User[] = [];
  selectedUser: User | null = null;

  user: User = {
    age: '',
    nom: '',
    email: '',
    password: '',
    cin: '',
    etat_Condidat: '',
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data) => {
      console.log('Login successful', data);
      this.usersList = data;
    });
  }

  addUser() {
    if (
      !this.user.age ||
      !this.user.nom ||
      !this.user.email ||
      !this.user.password ||
      !this.user.cin ||
      !this.user.etat_Condidat
    ) {
      window.alert('Please fill in all user attributes.');
      return;
    }
    this.userService.createUser(this.user).subscribe(
      (data) => {
        console.error('user made with success:', data);
        window.alert('Candidat crée avec succée  :) !!');
        window.location.reload();
      },
      (error) => {
        console.error('Error making reservation:', error);
      }
    );
  }
  deleteUser(id: number | undefined) {
    if (id) {
      this.userService.deleteUser(id).subscribe(() => {
        window.alert('candidat supprimer avec succée !');
        window.location.reload();
      });
    }
  }
  modifyUser(user: User) {
    this.selectedUser = user;
  }
  updateUser(): void {
    if (this.selectedUser) {
      if (this.selectedUser.id) {
        this.user.id = this.selectedUser.id;
        this.userService
          .updateUser(this.selectedUser.id, this.user)
          .subscribe((user) => {
            console.log(user);
          });
      }
    }
    this.closePopup();
    window.location.reload()
  }
  closePopup(): void {
    this.selectedUser = null;
  }
}
