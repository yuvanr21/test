// const {chromium , test} = require('@playwright/test');

import {chromium, test, expect} from '@playwright/test';

test('Browser launch Ashley furniture', async () => {
    const browser = await chromium.launch({
        headless: false,
    })
    const page = await browser.newPage();
    await page.goto('https://store.ashleyfurniture.in/');
    const pageTitle = await page.title();
    console.log(pageTitle);

    await page.getByTitle('account').click();
   const emailTxt = page.locator('input[name="customer[email]"]');
   const passwordTxt = page.locator('input[name="customer[password]"]');
//    const loginBtn = page.locator('input[type="submit"]');
   const loginBtn = page.locator('input[type="submit"][value="Log In"]');

//    console.log(loginBtn);
   await emailTxt.fill('yuvanksankar290@gmail.com');
   await passwordTxt.fill('test123');

    await loginBtn.click();
    // await page.waitForTimeout(20000);
    await page.close();
});