import { Component } from '@angular/core';
import { LangItemModel } from './navigation/lang-item.model';
import { mock_lang_list } from './navigation/mock_lang_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duolingo-lab-project';

  languages: LangItemModel [] = [];

  constructor(){
    for (var language of mock_lang_list){
      console.log(language);
      this.languages.push(language);

    }
    

  }

}
