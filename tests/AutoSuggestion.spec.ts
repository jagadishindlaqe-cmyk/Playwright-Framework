import { test, expect } from '@playwright/test';

test('handle auto suggestion', async ({ page }) => {

    await page.goto("https://practice.expandtesting.com/autocomplete");
    const countryList= await page.getByPlaceholder("Country name");
    await countryList.fill("Ga");
    await expect(page.getByText('Gabon',{exact:true})).toBeVisible();
    await page.getByText('Gabon',{exact:true}).click();

});