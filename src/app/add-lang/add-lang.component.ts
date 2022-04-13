import { Component, OnInit } from '@angular/core';
import { LangItemModel } from 'src/app/navigation/lang-item.model';
import { LangsService } from 'src/app/navigation/lang.service';

@Component({
  selector: 'duo-add-lang',
  templateUrl: './add-lang.component.html',
  styleUrls: ['./add-lang.component.css']
})
export class AddLangComponent implements OnInit {

  constructor(public ls: LangsService) { }

  ngOnInit(): void {
  }

  addProduct(language: LangItemModel){
    console.log("You clicked add language");
    console.log(language);
    this.ls.addLang(language);
  }

}
