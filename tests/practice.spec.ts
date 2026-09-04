import {test, expect} from '@playwright/test';
test("verify multiple window",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows");
    const[newPage]= await Promise.all([
        page.waitForEvent('popup'),page.getByText('Elemental Selenium').click()])
        await page.waitForLoadState();
        console.log("mainwindow",await page.title());
        console.log("childwindow",await page.title());
        await expect(newPage.getByText('elementalselenium')).toBeVisible();
        await newPage.close();




   
})