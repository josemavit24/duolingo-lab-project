import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { LessonCardComponent } from './lessons/lessons.card.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HorizontalMenuComponent } from './navigation/horizontalscroll/horizontalscroll.component';
import { AppRoutingModule } from './app-routing.module';
import { LearnComponent } from './lessons/learn-layout.component';
import { HomeLayout } from './lessons/home-layout.component';
import { SigninComponent } from './lessons/signin-layout.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
