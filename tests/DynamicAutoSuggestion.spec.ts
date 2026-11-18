import { test, expect } from '@playwright/test';

test('Handle dynamic auto suggestion', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/autocomplete');

    const country = 'Canada';

    await page
        .getByPlaceholder('Country name')
        .fill(country.substring(0, 2));

    const suggestions = page.locator('ul li');

    const count = await suggestions.count();

    for (let i = 0; i < count; i++) {

        const text = await suggestions.nth(i).innerText();

        if (text.trim() === country) {
            await suggestions.nth(i).click();
            break;
        }
    }
});