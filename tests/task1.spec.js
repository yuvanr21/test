const {chromium,test,expect}= require('@playwright/test');

test('Browser launch Ashley furniture', async()=>{
    const browser = await chromium.launch({headless:false,
}
)
const page = await browser.newPage();
await page.goto('https://www.ashleyfurniture.com/');
const pageTitle = await page.title();
await expect(page).toHaveTitle(pageTitle);
    console.log(pageTitle);

const pageurl = await page.url();
await expect(page).toHaveURL(pageurl);
console.log(pageurl);
}
);