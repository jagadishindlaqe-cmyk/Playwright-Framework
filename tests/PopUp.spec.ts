import { test, expect } from '@playwright/test';

test('handle JS alert popup', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        console.log('Popup message:', dialog.message());

        await expect(dialog.message()).toBe('I am a JS Alert');

        await dialog.accept();
    });

    await page.getByRole('button', {
        name: 'Click for JS Alert'
    }).click();

});


test.skip('handle popup message',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog',async dialog=>{
        console.log('pupup message:',dialog.message());
        await expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.dismiss();
    })
    await page.getByRole('button',{name:'Click for JS Confirm'
}).click();

});





test.skip('Handle JS Prompt', async ({ page }) => {

    const text = 'Hello Playwright';

    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts',
        { waitUntil: 'domcontentloaded' }
    );

    // Handle the JavaScript prompt
    page.on('dialog', async dialog => {

        console.log('Popup message:', dialog.message());

        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');

        // Enter text and click OK
        await dialog.accept(text);
    });

    // Click "Click for JS Prompt"
    await page.getByRole('button', {
        name: 'Click for JS Prompt'
    }).click();

    // Verify entered text
    await expect(
        page.getByText(`You entered: ${text}`)
    ).toBeVisible();
});