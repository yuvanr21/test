import {chromium, test, expect} from '@playwright/test';
const exp = require('constants');
test('first product', async () => {
    const browser = await chromium.launch({
        headless :false
    });
    const page = await browser.newPage();
    await page.goto('https://store.ashleyfurniture.in/');

    await page.getByTestId('charset').click();

    const pagettext = await page.getByText('search-bar__input snize-input-style');
    console.log(pagettext);

    //await page.getByRole('searchbox', {name:"Search Here..." });
    //await page.getByLabel('Search form').getByRole("button");



});
   