const{ firefox,test} = require('playwright');

( async()=>{

    const browser = await firefox.launch({headless: false});
    const page = await browser.newPage();
    
await page.goto('https://www.amazon.in/');
const pageTitle = await page.title();
await expect(page).toHaveTitle(pageTitle);
console.log(pageTitle);

const pageurl = await page.url();
await expect(page).toHaveURL(pageurl);
console.log(pageurl);

})();