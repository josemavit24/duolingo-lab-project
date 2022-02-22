import { Component, OnInit } from '@angular/core';
import { LangItemModel } from '../navigation/lang-item.model';
import { mock_lang_list } from '../navigation/mock_lang_list';

@Component({
  selector: 'duo-get-started-card',
  templateUrl: './get-started-card.component.html',
  styleUrls: ['./get-started-card.component.css']
})

export class GetStartedCardComponent implements OnInit {

  ngOnInit(): void {
  }

  languages: LangItemModel [] = [];

  constructor(){
    for (var language of mock_lang_list){
      console.log(language);
      this.languages.push(language);

    }
    

  }

}
