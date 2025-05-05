import{test as base, expect} from '@playwright/test'
import { HomePage } from '../PageModel/Homepage'
import { LoginPage } from '../PageModel/LoginPage'
import { SecurePage } from '../PageModel/SecurePage'




export const test= base.extend<{homePage:HomePage,loginPage:LoginPage,securePage:SecurePage}>({
    homePage:async({page},use)=>{
    const homePage = new HomePage(page);
    homePage.goto(process.env.URL);
    use(homePage);
},
loginPage:async({page},use)=>{
    const loginPage = new LoginPage(page);
    use(loginPage);
},

securePage:async({page},use)=>{
    const securePage= new SecurePage(page);
    use(securePage);
}

})

export {expect} from '@playwright/test'

