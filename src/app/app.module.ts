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
    GetStartedCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
