import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { RegisterformComponent } from './registerform/registerform.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterformComponent },
    { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterformComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
   ReactiveFormsModule,
   MatFormFieldModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
