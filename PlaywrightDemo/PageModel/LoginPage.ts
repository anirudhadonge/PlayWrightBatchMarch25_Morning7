import { Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";


export class LoginPage extends BasePageModel{

    userNameInput:string = "#username";
    passwordInput:string ="#password";
    signInBtn:string = ".radius";
    constructor(page:Page){
        super(page);
    }

    async inputUserName(userName:string){
        await this.fillText(await this.getLocator(this.userNameInput),userName);
    }

    async inputPassword(password:string){
        await this.fillText(await this.getLocator(this.passwordInput),password);
    }

    async clickOnLoginIn(){
        await this.clickOnElement(await this.getLocator(this.signInBtn));
    }
    
}