import { chromium, test, expect } from '@playwright/test';

test('Browser launch Ashley furniture', async () => {
    const browser = await chromium.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://store.ashleyfurniture.in/');
    const searchTerm = "Table";


    const searchbox = await page.locator('input[type="search"]');
    await page.focus('input[type="search"]');
    await page.keyboard.type("table", { delay: 1000 });

    await page.waitForSelector('.snize-ac-results-content');

    const dropdownItems = await page.$$('#snize-ac-items-container-1 > li.snize-suggestion');
    console.log(dropdownItems.length);

    const dropdownLength = dropdownItems.length;

    const selectedItem = dropdownItems[dropdownLength - 2];
    const selectedText = await selectedItem.evaluate(el => el.textContent);
    console.log(selectedText);

    selectedItem.click();

    await page.waitForSelector('.snize-search-results-content');
    await page.waitForTimeout(10000);
    const productItems = await page.$$('.snize-search-results-content > li');
    console.log(productItems.length);


    const firstProduct = productItems[0];

    const link = await firstProduct.$('a.snize-view-link');
        await link.click();
    await page.waitForTimeout(10000);
});