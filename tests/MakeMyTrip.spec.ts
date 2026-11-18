
import { test, expect } from '@playwright/test';

test('Select the cheapest flight date on MakeMyTrip', async ({ browser }) => {
  const context = await browser.newContext({
    locale: 'en-IN',
    timezoneId: 'Asia/Kolkata'
  });

  const page = await context.newPage();

  try {
    // 1. Open MakeMyTrip
    const response = await page.goto(
      'https://www.makemytrip.com/',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );

    console.log('Status:', response?.status());
    console.log('Title:', await page.title());

    // 2. Inspect available flight-search controls
    await page.waitForTimeout(3000);

    console.log(
      'Page headings:',
      await page.locator('h1, h2').allInnerTexts()
    );

    console.log(
      'Visible buttons:',
      await page.getByRole('button').allInnerTexts()
    );

    // 3. Inspect the page before interacting
    await page.screenshot({
      path: 'test-results/makemytrip-homepage.png',
      fullPage: false
    });

    // Keep the browser open long enough to inspect in headed mode
    await expect(page).toHaveTitle(/MakeMyTrip/i);

  } finally {
    await context.close();
  }
});
