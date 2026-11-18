import { test } from '@playwright/test';

test('Print only mobile brand names', async ({ page }) => {

    await page.goto('https://www.flipkart.com/mobile-phones-store');

    // Locate only the links/cards which contain the mobile brand images
    const mobileBrands = page.locator(
        "//a[.//img[contains(@class,'r-1awozwy')]]"
    );

    const count = await mobileBrands.count();

    console.log('Total brands:', count);

    for (let i = 0; i < count; i++) {
        const brandName = await mobileBrands.nth(i).innerText();

        if (brandName.trim()) {
            console.log(brandName.trim());
        }
    }
});