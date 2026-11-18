import { test as base, expect } from '@playwright/test';

type MyFixtures = {
    message: string;
};

export const test = base.extend<MyFixtures>({
    message: async ({}, use) => {
        await use('Hello Playwright');
    }
});

export { expect };