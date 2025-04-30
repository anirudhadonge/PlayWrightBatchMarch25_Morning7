import { expect, Page } from "@playwright/test";
import { BasePageModel } from "./BasePageModel";

export class SecurePage extends BasePageModel{

    subHeader:string=".subheader"
    constructor(page:Page){
        super(page);
    }

    async validateLoginIsSuccessfull():Promise<void>{
        await expect(await this.getLocator(this.subHeader)).toHaveText('Welcome to the Secure Area. When you are done click logout below.');
    }
}