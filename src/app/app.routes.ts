import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminDashComponent } from './components/admin-dash/admin-dash.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AdminMonitorComponent } from './components/admin-monitor/admin-monitor.component';
import { AdminSessionComponent } from './components/admin-session/admin-session.component';
import { AdminCarComponent } from './components/admin-car/admin-car.component';
import { AdminExamComponent } from './components/admin-exam/admin-exam.component';
import { CondidatHomeComponent } from './components/candidat/condidat-home/condidat-home.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth/signup', component: RegisterComponent },
    { path: 'auth/login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin-dashboard', component: AdminDashComponent },
    { path: 'admin-dashboard/user', component: AdminUserComponent },
    { path: 'admin-dashboard/moniteur', component: AdminMonitorComponent },
    { path: 'admin-dashboard/car', component: AdminCarComponent },
    { path: 'admin-dashboard/session', component:AdminSessionComponent},
    { path: 'admin-dashboard/exam', component:AdminExamComponent},
    {path:'candidat-home',component:CondidatHomeComponent}

    
];
