import{test, expect} from '@playwright/test';

test("verify all issue pages",async({page})=>{
    await page.goto("https://www.saucedemo.com/");
})