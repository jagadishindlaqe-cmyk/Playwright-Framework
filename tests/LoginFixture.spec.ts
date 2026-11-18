import { test as base } from '@playwright/test';

export const test = base.extend({
    loginPage: async ({ page }, use) => {

        // Setup
        await page.goto('https://www.saucedemo.com/');

        // Provide page to test
        await use(page);

        // Teardown (if required)
    }
});