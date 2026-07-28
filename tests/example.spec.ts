import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

   // Get the page title
  const title = await page.title();

  // Print the title
  console.log("Page Title:", title);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
