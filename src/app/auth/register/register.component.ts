import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userAge: number | null = null;
  usersList: User[] = [];
  user: User = {
    cin: '',
    email: '',
    password: '',
    age: '',
    etat_Condidat: '',
    nom: '',
  };
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userService.getUsersList().subscribe((data) => {
      this.usersList = data;
      console.log(this.usersList);
    });
  }
  onSubmit() {
    if(this.userAge){
      this.user.age=this.userAge.toString()
    }else{window.alert('Fill all cases please');}
    if (
      !this.user.cin ||
      !this.user.email ||
      !this.user.nom ||
      !this.user.etat_Condidat ||
      !this.user.password
    ) {
      window.alert('Fill all cases please');
      return;
    } else if (
      this.user.etat_Condidat !== 'Code' &&
      this.user.etat_Condidat !== 'Conduite'
    ) {
      window.alert('choisir entre (Code) ou (Conduite)');
    } else if (this.userAge && (this.userAge > 100 || this.userAge < 18)) {
      window.alert('you must be 18 or older');
    } else if(this.userAge) {
      console.log('here');

      this.user.age = this.userAge.toString();
      this.userService.createUser(this.user).subscribe((data) => {
        console.log('user Created succesfully', data);
        this.router.navigate(['/auth/login']);
      });
    }
  }
}
