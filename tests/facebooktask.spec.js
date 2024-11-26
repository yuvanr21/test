const { chromium,test } = require('@playwright/test');

test('facebook page login' , async () => {
 
  const accounts = [
    { email: 'yuvanksankar290@gmail.com', password: 'yuvan9566' },
    //{ email: 'your-email2@example.com', password: 'password2' }
  ];


  const actions = [
    { action: 'clickProfile', profileName: 'FriendName1' },
   // { action: 'clickProfile', profileName: 'FriendName2' }
  ];

 
  const browser = await chromium.launch({ headless: false }); 
  for (let account of accounts) {
    const page = await browser.newPage(); 

    
    await page.goto('https://www.facebook.com/login');
    await page.fill('input[name="email"]', account.email);
    await page.fill('input[name="pass"]', account.password);
    await page.click('button[name="login"]');
}  
await browser.close();
});