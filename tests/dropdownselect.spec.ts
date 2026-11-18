import {test, expect} from '@playwright/test';

test('verify user able to select the dropdown of Price (high to low)', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');
    await page.getByRole('button',{name: 'Login'}).click();
    const drodown = page.getByLabel('Sort products');
    drodown.click();
    await drodown.selectOption({value:'az'})
    // Verify selected option
await expect(drodown).toHaveValue('az');

});
