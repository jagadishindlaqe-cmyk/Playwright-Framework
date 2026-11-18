import { test, expect } from '@playwright/test';

test('Login functionality using context fixture', async ({ context }) => {

    // Create a new browser page using context
    const page = await context.newPage();

    // Navigate to application
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.locator('#user-name').fill('standard_user');

    // Enter password
    await page.locator('#password').fill('secret_sauce');

    // Click on Login button
    await page.locator('#login-button').click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory/);

    console.log('Login successful');

    await page.close();

});