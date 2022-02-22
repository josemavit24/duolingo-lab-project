import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './lessons/learn-layout.component';
import { HomeLayout } from './lessons/home-layout.component';
import { SigninComponent } from './lessons/signin-layout.component';
import { GetStartedLayoutComponent } from './get-started-layout/get-started-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'learn', component: LearnComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: HomeLayout},
  {path: 'get-started', component: GetStartedLayoutComponent},
  {path: 'dashboard', component: DashboardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
    
})
export class AppRoutingModule {}
