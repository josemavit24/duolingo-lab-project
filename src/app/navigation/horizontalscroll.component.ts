import { Component, Input } from "@angular/core";
import { LangItemModel } from "./lang-item.model";
import { mock_lang_list } from "./mock_lang_list";


@Component({
    selector: 'duo-hscroll',
    templateUrl: 'horizontalscroll.component.html',
    styleUrls: ['horizontalscroll.component.css']
})
export class HorizontalMenuComponent{
    languages: LangItemModel [] = [];

    constructor(){
      for (var language of mock_lang_list){
        console.log(language);
        this.languages.push(language);
  
      }
      
  
    }

}
