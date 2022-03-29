
import { Injectable } from "@angular/core";
import { LangItemModel } from "./lang-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})

export class LangsService{

    constructor(private db: AngularFireDatabase){

    }

    public getLangs(){
        return this.db.list<LangItemModel>("languages/languages").valueChanges();

    }

    addLang(language: LangItemModel){
        this.db.list<LangItemModel>("languages/languages").push(language)
    }

}