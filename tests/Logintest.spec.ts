import { test, expect } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { BASE_URL,USERNAME,PASSWORD } from '../Utlitls/envConfig';


test('verify login page',async({page})=>{
    const loginpage =new Loginpage(page)
    await page.goto(BASE_URL);
    await loginpage.login(USERNAME,PASSWORD);
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})
