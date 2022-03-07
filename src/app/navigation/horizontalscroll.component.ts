import { Component, Input, OnInit } from "@angular/core";
import { LangItemModel } from "./lang-item.model";
import { LangsService } from "./lang.service";

@Component({
  selector: 'duo-hscroll',
  templateUrl: 'horizontalscroll.component.html',
  styleUrls: ['horizontalscroll.component.css']
})
export class HorizontalMenuComponent implements OnInit {
  languages: LangItemModel[] = [];

  constructor(private langsService: LangsService) {


  }

  ngOnInit(): void {
    this.langsService.getLangs().subscribe(data => {
      console.log("Fetching lang data");
      console.log(data);
      for (var language of data) {
        console.log(language);
        this.languages.push(language);
      }
    })
  }

}
