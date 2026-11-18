import{test, expect} from '@playwright/test';
test('verify the iframes in playwright', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');
    // Locate the iframe and then the text editor inside it
   const textbox= page.frameLocator('#mce_0_ifr').locator('#tinymce');
  // Clear existing text
     await textbox.clear();
       // Enter new text
  await textbox.fill('Hello Playwright');
    // Verify the entered text
  await expect(textbox).toHaveText('Hello Playwright');
});