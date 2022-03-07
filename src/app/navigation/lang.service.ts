import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LangItemModel } from "./lang-item.model";

@Injectable({
    providedIn: 'root'
})

export class LangsService{
    private baseUrl:string = "https://duolingo-project-default-rtdb.firebaseio.com";
    private langsEndpoint: string = "/languages/languages.json";

    constructor(private http:HttpClient){

    }

    public getLangs(){
        return this.http.get<LangItemModel[]>(this.baseUrl + this.langsEndpoint);

    }
}