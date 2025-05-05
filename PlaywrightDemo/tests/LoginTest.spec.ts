import {test,expect} from './../Fixtures/fixture.ts'
import testData from './../TestData/LoginCredentials.json'

// test('This is a login Test',async({page})=>{
//     const homePage:HomePage = new HomePage(page);
//     await homePage.goto("https://the-internet.herokuapp.com/");
//     await homePage.clickOnFormAuthencation();
    
//     const loginPage:LoginPage = new LoginPage(page);
//     await loginPage.inputUserName('tomsmith');
//     await loginPage.inputPassword('SuperSecretPassword!');
//     await loginPage.clickOnLoginIn();

//     const securePage:SecurePage = new SecurePage(page);
//     await securePage.validateLoginIsSuccessfull();    
// })

test('This is example of custom fixture',async({homePage,loginPage,securePage})=>{
        await homePage.clickOnFormAuthencation();
        
        await loginPage.inputUserName(testData.username);
        await loginPage.inputPassword(testData.password);
        await loginPage.clickOnLoginIn();

        await securePage.validateLoginIsSuccessfull();    
})