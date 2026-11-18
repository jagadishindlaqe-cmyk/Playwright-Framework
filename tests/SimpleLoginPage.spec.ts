import { test, expect } from '@playwright/test';
//import { SimpleLoginPage } from '../pages/LoginPage';
import  { SimpleLoginPage }  from '../pages/SimpleLoginPage';

test('Verify successful login', async ({ page }) => {

    const loginPage = new SimpleLoginPage(page);

    // Open login page
    await loginPage.navigateToLoginPage();

    // Enter credentials and login
    await loginPage.login('standard_user', 'secret_sauce');

    // Verify successful login
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await expect(
        //page.getByRole('heading', { name: 'Secure Area' })
   // ).toBeVisible();

});

test('Verify invalid login', async ({ page }) => {

    const loginPage = new SimpleLoginPage(page);

    await loginPage.navigateToLoginPage();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toBeVisible();

});