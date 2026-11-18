import { Page, Locator } from '@playwright/test';

export class SimpleLoginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.getByText('Invalid username or password');
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(user: string) {
        await this.username.fill(user);
    }

    async enterPassword(pass: string) {
        await this.password.fill(pass);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async login(user: string, pass: string) {
        await this.enterUsername(user);
        await this.enterPassword(pass);
        await this.clickLogin();
    }
}