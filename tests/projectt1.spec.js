import { chromium, test, expect } from '@playwright/test';

test('Browser launch Ashley furniture', async () => {
  const browser = await chromium.launch({

  });

  const page = await browser.newPage();

  await page.goto('https://store.ashleyfurniture.in/');
  const pageTitle = await page.title();
  console.log(pageTitle);

  const menus = await page.$$('xpath=//div[contains(@class, "menu_item group")]//a[contains(@class, "menu_item__link")]//span');


  let menuTexts = [];
              
  for (const menuItem of menus){
    const text = await menuItem.textContent();    
    menuTexts.push(text.trim());    
  }
  console.log(menuTexts);
  //await page.waitForTimeout(20000);
  await browser.close();

});