import { Component, Input } from "@angular/core";

@Component({
    selector: 'duo-category-card',
    templateUrl: 'lessons.card.component.html',
    styleUrls: ['lessons.card.component.css']
})
export class LessonCardComponent{
    @Input() img: string;
    @Input() cap: string;

    constructor(){
        this.img = "";
        this.cap = "XXXXX";
    }
}