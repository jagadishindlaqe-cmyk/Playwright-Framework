import{test,expect} from '@playwright/test';
test("verify the dynamic dropdwin",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("[name='q']").fill("shoes");
    
});