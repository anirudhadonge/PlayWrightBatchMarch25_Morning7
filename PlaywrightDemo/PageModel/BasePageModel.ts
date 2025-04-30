import { Locator, Page } from "@playwright/test";


export class BasePageModel{
    page:Page;
    constructor(page:Page){
        this.page = page;
    }

    async clickOnElement(locator:Locator){
        await locator.click();
    }

    async getLocator(locator:string):Promise<Locator>{
        return await this.page.locator(locator);
    }

    async fillText(locator:Locator,text:string):Promise<void>{
        await locator.fill(text);
    }

    async pressSequencially(locator:Locator,text:string,time:number=300){
        await locator.pressSequentially(text,{delay:time})
    }

    async goto(url:string){
        await this.page.goto(url);
    }
}