import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopNavBarComponent } from 'src/app/navigation/topnavbar.component';

import { AppComponent } from './app.component';
import { LessonCardComponent } from './lessons/lessons.card.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HorizontalMenuComponent } from './navigation/horizontalscroll/horizontalscroll.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    FooterComponent,
    HorizontalMenuComponent,
    LessonCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
