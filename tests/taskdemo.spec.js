const {chromium,test,expect} = require('@playwright/test')

test('test automation' , async()=>{
    const browser = await chromium.launch({
}

)
const page = await browser.newPage();
await page.goto('https://testautomationpractice.blogspot.com/')
const pageTitle = await page.title();
await expect(page).toHaveTitle(pageTitle);
    console.log(pageTitle);

    const nameTxt = page.locator('input[type="text"][id="name"]');
    const emailTxt = page.locator('input[type="text"][id="email"]');

    const phoneTxt = page.locator('input[type="text"][id="phone"]');
    const addressTxt = page.locator('input[id="textarea"]:has-text("address")');

    

    // const submitBtn = page.locator('input[type="submit"][class="submit-btn"]');


    await nameTxt.fill('yuvan');
    await emailTxt.fill('yuvan@gmail.com');
    await phoneTxt.fill('1234567890');
    if (await addressTxt.isVisible()) {
        // Do something if the element is visible
        await addressTxt.fill('chennai');
    }
    
    //await submitBtn.click();
    await page.waitForTimeout(4000);
    await page.screenshot();
    await page.close();


    
});