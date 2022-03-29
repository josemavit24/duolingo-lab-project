import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { LessonCardComponent } from './lessons/lessons.card.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HorizontalMenuComponent } from './navigation/horizontalscroll.component';
import { AppRoutingModule } from './app-routing.module';
import { LearnComponent } from './lessons/learn-layout.component';
import { HomeLayout } from './lessons/home-layout.component';
import { SigninComponent } from './lessons/signin-layout.component';
import { GetStartedLayoutComponent } from './get-started-layout/get-started-layout.component';
import { GetStartedCardComponent } from './get-started-card/get-started-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTopNavbarComponent } from './navigation/dashboard-top-navbar/dashboard-top-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { StoriesLayoutComponent } from './stories-layout/stories-layout.component';
import { DiscussLayoutComponent } from './discuss-layout/discuss-layout.component';
import { ShopLayoutComponent } from './shop-layout/shop-layout.component';
import { CourseLayoutComponent } from './course-layout/course-layout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AddLangComponent } from './add-lang/add-lang.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HorizontalMenuComponent,
    LessonCardComponent,
    LearnComponent,
    HomeLayout,
    SigninComponent,
    GetStartedLayoutComponent,
    GetStartedCardComponent,
    DashboardComponent,
    DashboardTopNavbarComponent,
    UserInfoComponent,
    StoriesLayoutComponent,
    DiscussLayoutComponent,
    ShopLayoutComponent,
    CourseLayoutComponent,
    AddLangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
