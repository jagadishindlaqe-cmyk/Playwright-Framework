import{test,expect} from '@playwright/test';
import { skip } from 'node:test';
test.skip('verify all alerts',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //enabling the alerts dilog
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator('#alertBtn').click();

    });

   test.skip ('verify conformation alert with OK and Cancle ',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //enabling the alerts dilog
    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    })
    await page.locator('#alertBtn').click();

    });


test('verify confirmation alert with prompt', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {

        console.log('Dialog message:', dialog.message());

        await dialog.accept('Kaha');
    });

    // Click Prompt Alert
    await page.locator('#promptBtn').click();

    // Verify the result displayed on the webpage
    await expect(page.getByText('Hello Kaha!')).toBeVisible();

    // Screenshot after verification
    await page.screenshot({
        path: 'screenshots/PromptAlert-success.png',
        fullPage: true
    });
});





    
