import { Component, Input } from "@angular/core";

@Component({
    selector: 'duo-hlangcard',
    templateUrl: 'horizontal.lang.card.component.html',
    styleUrls: ['horizontal.lang.card.component.css']
})
export class HorizontalLangCardComponent{
    @Input() lang: string;
    @Input() flag: string;

    constructor(){
        this.lang = "Blub";
        this.flag = "";
    }

}