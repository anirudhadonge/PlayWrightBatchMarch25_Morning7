import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class HomePage extends BasePageModel{
    formAuthencation='[href="/login"]';
    constructor(page:Page){
        super(page);
    }

    async clickOnFormAuthencation(){
        await this.clickOnElement(await this.getLocator(this.formAuthencation));
    }

    
}