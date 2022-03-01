import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './lessons/learn-layout.component';
import { HomeLayout } from './lessons/home-layout.component';
import { SigninComponent } from './lessons/signin-layout.component';
import { GetStartedLayoutComponent } from './get-started-layout/get-started-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoriesLayoutComponent } from './stories-layout/stories-layout.component';
import { DiscussLayoutComponent } from './discuss-layout/discuss-layout.component';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { CourseLayoutComponent } from './course-layout/course-layout.component';


const routes: Routes = [
  {path: 'learn', component: LearnComponent},
  {path: 'signin', component: SigninComponent},
  {path: '', component: HomeLayout},
  {path: 'get-started', component: GetStartedLayoutComponent},
  {
    path: 'dashboard', 
    component: DashboardComponent,
    children:[
      {
        path: 'course',
        component: CourseLayoutComponent
      },
      {
        path:'stories',
        component: StoriesLayoutComponent
      },
      {
        path:'discuss',
        component: DiscussLayoutComponent
      },
      {
        path:'shop',
        component: ShopLayoutComponent
      }
    ]

  }
  
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
