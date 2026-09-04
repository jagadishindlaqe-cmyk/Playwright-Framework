import { test, expect } from '@playwright/test';

test('verify browser context', async ({ browser }) => {

    // Create first browser context
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();

    await page1.goto('https://the-internet.herokuapp.com/dropdown');

    // Create second browser context
    const context2 = await browser.newContext();
    const page2 = await context2.newPage();

    await page2.goto('https://the-internet.herokuapp.com/dropdown');

    // Select Option 1 in first context
    const option1 = await page1.selectOption('#dropdown', '1');
    await expect(option1).toEqual(['1']);

    // Select Option 2 in second context
    const option2 = await page2.selectOption('#dropdown', '2');
    await expect(option2).toEqual(['2']);

    // Close contexts
    await context1.close();
    await context2.close();
});