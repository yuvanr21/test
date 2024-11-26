// const {chromium , test} = require('@playwright/test');

import {chromium, test, expect} from '@playwright/test';
const exp = require('constants');
test('create an account in facebook', async () => {
    const browser = await chromium.launch({
        headless :false
    });
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/');
   

await page.getByTestId( 'open-registration-form-button' ).click();
const pagettext = await page.getByText( 'Create a new account');
console.log(pagettext);
await expect(await page.getByLabel('First name')).toBeVisible(); 
await page.getByLabel ('First name'). fill("yuvan"); 
await expect (await page.getByLabel('Surname' )).toBeEmpty();
await page.getByLabel('Surname' ).fill("s");

await page.locator ("#day"). selectOption ({index:29});

await page.getByLabel ('Month'). selectOption({value: "4"});

await page.locator ("#year"). selectOption("2020");

const radiobtn = await page. locator(' (//input[@type="radio"]) [1]');

const flag = await radiobtn.isChecked();


if(flag == false){
    await radiobtn.check();
    await expect(await radiobtn).toBeChecked();
}
await page.waitForTimeout(4000);
});