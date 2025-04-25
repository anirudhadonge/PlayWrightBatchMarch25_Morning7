import {test,expect, BrowserContext, Page} from'@playwright/test'

test('This is my first test',async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.screenshot();
    await page.locator(".getStarted_Sjon").click();
    await expect(page.locator(".theme-doc-markdown.markdown h1")).toHaveText("Installation");
})

test('Locator Description Test',async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");
    // await page.locator('[href="/checkboxes"]').click();
    // await page.getByRole('checkbox').nth(0).click();
    await page.getByPlaceholder("Enter your company").nth(0).fill('xyz@xyz.com');
    await page.getByText("Submit").click();
    await page.getByTitle("Enter your first crush name").fill("xyz");
    //await page.getByAltText()
})

test.describe('All test were performed on herokuapp',async()=>{
    test.beforeAll('This is a before all block',async()=>{
        console.log('This is a before all block');
    })
    test.beforeEach('Navigation to HeroKuapp Url',async({page})=>{
        console.log("This is a before each block");
        await page.goto("https://the-internet.herokuapp.com/");
    })

    test.afterEach('This is a after each block',async()=>{
        console.log('This is a after each method');
    })

    test.afterAll('This is a after all block',async()=>{
        console.log('This is After all block');
    })
    test('Interacting with text/Input elements',async({page})=>{
        await page.getByText("Form Authentication").click();
        let userNameInput = await page.locator("#username");
        //await userNameInput.fill("tomsmith");
        await userNameInput.pressSequentially("tomsmith",{delay:1000})
    })
    
    test('Interacting with dropdowns',async({page})=>{
        await page.waitForTimeout(15000);
        await page.getByText("Dropdown").click();
        let dropDown = page.locator("#dropdown");
        dropDown.selectOption({index:2});
    })
    
    test("Interacting with CheckBox and Radio button",{
        tag:"@abc"
    },async({page})=>{
         await page.getByText("Checkboxes").click();
        let checkBoxElement = page.locator('[type="checkbox"]').nth(0);
        // if(!checkBoxElement.isChecked()){
        // await checkBoxElement.click();
        // }
        await checkBoxElement.check();
        await checkBoxElement.uncheck();
    })
    
    test('@smoke Uploading the file',async({page})=>{
        await page.getByText("File Upload").click();
        //await page.locator("#file-upload").setInputFiles('C:\\UploadFiles\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg');
        const fileChooser = page.waitForEvent('filechooser');
        await page.locator("#file-upload").click();
        const fileEvent = await fileChooser;
        await fileEvent.setFiles('C:\\UploadFiles\\1000_F_561609331_cmOdHBvlRGhWqPZuB1QBLLlc6nQ1m1eq.jpg');
    })
    
    
    test("Interacting with Iframe/Frame",async({page})=>{
        await page.locator('[href="/frames"]').click();
        await page.locator('[href="/iframe"]').click();
        let frame = page.frameLocator('#mce_0_ifr');
        await expect(frame.locator("#tinymce p")).toBeVisible();
      
    })
    
    test('@smoke Download files test',async({page})=>{
        await page.locator('[href="/download"]').click();
        const downloadPromise = page.waitForEvent('download');
        await page.locator('[href="download/RC-Interns.docx"]').click();
        const download = await downloadPromise;
        await download.saveAs("C:\\UploadFiles\\"+download.suggestedFilename());
    })
    
    test('@smoke Hover test',async({page})=>{
         await page.locator("[href='/hovers']").click();
        await page.locator('[src="/img/avatar-blank.jpg"]').nth(0).hover();
        await expect(page.locator('[href="/users/1"]')).toHaveText('View profile');
    })
    
    test('@regression Multiple window',async({page,context})=>{
        await page.locator('[href="/windows"]').click();
        const newPage = await clickForNewPage('[href="/windows/new"]',page,context);
        await expect(newPage.locator('.example h3')).toHaveText('New Window');
    })

    test("Basic Authenication test",async({browser})=>{
        const context = await browser.newContext({
            httpCredentials:{
                username:'admin',
                password:'admin'
            }
        })
        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/");
        await page.locator('[href="/digest_auth"]').click();
        await expect(page.locator('.example p')).toContainText('Congratulations! You must have the proper credentials.');
    })
    
    test('Drag and Drop test',async({page})=>{
        await page.locator('[href="/drag_and_drop"]').click();
        const source = page.locator('#column-a')
        const destination = page.locator('#column-b')
        await expect(destination).toHaveText('B');
        await source.dragTo(destination)
        await expect(destination).toHaveText('A');
    })
    
    test('Interacting with Javascript Alerts',async({page})=>{
        await page.locator('[href="/javascript_alerts"]').click();
        await expect(page).toHaveURL("https://the-internet.herokuapp.com/javascript_alerts");
        await expect(page).toHaveTitle('The Internet');
        const jsAlert = page.locator('[onclick="jsAlert()"]');
        const jsConfirm = page.locator('[onclick="jsConfirm()"]');
        const jsPrompt = page.locator('[onclick="jsPrompt()"]');
        page.on('dialog',(dialog)=>{
            console.log(dialog.message());
            dialog.accept("this is a prompt");
        })
        //await jsAlert.click();
        //await jsConfirm.click();
        await jsPrompt.click();
        //await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
        //await expect(page.locator('#result')).toHaveText('You clicked: Ok');
        await expect(page.locator('#result')).toHaveText('You entered: this is a prompt');
        await expect(page.locator('#result')).toHaveId('result');
        const value = 5;
        const flag = false;
        expect(value).toBe(5)
        expect(flag).toBeFalsy();
    })
})


async function clickForNewPage(locator:string,page:Page,context:BrowserContext):Promise<Page>{
    const newWindowPromise = context.waitForEvent('page');
    await page.locator(locator).click();
    return await newWindowPromise
}




// test.only('waits in playwright',async({page})=>{
//     await page.goto("https://the-internet.herokuapp.com/");
//     console.log("Before timeout wait");
//     await page.waitForTimeout(5000); // static or dumb wait 
//     console.log("After timeout wait");
//     page.locator('[href="/javascript_alerts"]').waitFor({state:'visible'})
//     page.waitForLoadState()
//     await page.locator('[href="/javascript_alerts"]').click();
// })

// Assertions: Validations that you perform on the page.

/**
 * Page Assertions : Validation on the page.
 * Locator Assertions
 * Generic Assertions: This does not have autowait
 * 
 */

