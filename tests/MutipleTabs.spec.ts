import { test, expect } from '@playwright/test';

test('Handle multiple tabs and close 4th tab', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // Open first tab
    await page.goto('https://the-internet.herokuapp.com/windows');

    // Suppose clicking links opens new tabs
    const tab2Promise = context.waitForEvent('page');
    await page.getByText('Click Here').click();
    const tab2 = await tab2Promise;

    const tab3Promise = context.waitForEvent('page');
    await page.getByText('Click Here').click();
    const tab3 = await tab3Promise;

    const tab4Promise = context.waitForEvent('page');
    await page.getByText('Click Here').click();
    const tab4 = await tab4Promise;

    // Get all opened tabs
    const pages = context.pages(); 

    
    console.log("Number of tabs:", pages.length);

    // Close 4th tab
    await pages[3].close();

    console.log("4th tab closed");

    // Verify remaining tabs
    console.log("Remaining tabs:", context.pages().length);
});