import{test, expect} from '@playwright/test';

test.skip('verify that alert able to writwe the text', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog',async (dialog)=>{
        console.log('Dialog type:',dialog.type());
        console.log('Dailog message:',dialog.message());
        await dialog.accept("hello playwright");
      
    });
    await page.getByRole('button',{name: 'Prompt Alert'}).click();
      await expect(page.locator('#demo'))
    .toContainText('hello playwright');
    

});


test('verify that alert able to writwe the text other  ', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-alerts');
    page.on('dialog',async (dialog)=>{
        console.log('Dialog type:',dialog.type());
        console.log('Dailog message:',dialog.message());
        await dialog.accept("hello playwright6181");
          await page.screenshot({
        path: 'screenshots/PromptAlert123-success.png',
        fullPage: true
    });
    });
    //await page.getByRole('button',{name: 'Prompt Alert'}).click();
    await page.getByTestId('btn-prompt-alert').click();
      await expect(page.locator('#prompt-result-section'))
    .toContainText('hello playwright6181');
    

});



test('verify that  SIMPLE ALERT able to click on Ok ', async({page})=>{
    await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com#section-alerts');
    page.on('dialog',async (dialog)=>{
       expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am an alert box!');
    await dialog.accept();

});
await page.getByTestId('btn-simple-alert').click();

});