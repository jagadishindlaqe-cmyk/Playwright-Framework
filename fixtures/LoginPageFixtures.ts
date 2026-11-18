import { test as base, type Page } from '@playwright/test';

export const test = base.extend<{ loginPage: Page }>({
    loginPage: async ({ page }, use) => {
        await use(page);
    },
});
