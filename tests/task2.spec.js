const { chromium, test, expect } = require('@playwright/test');

test('Browser launch Ashley furniture', async () => {
    const browser = await chromium.launch({
        headless: false,
    }
    )
    const page = await browser.newPage();
    //await page.goto('https://www.ashleyfurniture.com/');
    await page.goto('https://store.ashleyfurniture.in/');
    const pageTitle = await page.title();
    await expect(page).toHaveTitle(pageTitle);
    console.log(pageTitle);

    const pageurl = await page.url();
    await expect(page).toHaveURL(pageurl);
    console.log(pageurl);
    
    await page.getByTitle('account').click();
   // await page.getByRole('button', { name: 'account' }).click();
    
    // await page.waitForTimeout(20000);
    
}
);