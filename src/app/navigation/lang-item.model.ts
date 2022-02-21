export class LangItemModel{
    lang: string;
    flag: string;
    learners: string;

    constructor(lang: string, flag: string, learners: string){
        this.lang = lang;
        this.flag = flag;
        this.learners = learners;
    }
}