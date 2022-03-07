import { Component, OnInit } from '@angular/core';
import { LangItemModel } from '../navigation/lang-item.model';
import { LangsService } from '../navigation/lang.service';


@Component({
  selector: 'duo-get-started-card',
  templateUrl: './get-started-card.component.html',
  styleUrls: ['./get-started-card.component.css']
})

export class GetStartedCardComponent implements OnInit {
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