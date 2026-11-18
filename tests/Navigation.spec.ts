
import { test, expect } from '@playwright/test';

test('Check browser navigation', async ({ page }) => {
  await page.goto('https://example.com', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await expect(page).toHaveTitle(/Example Domain/);
});
