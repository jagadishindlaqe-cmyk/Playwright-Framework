import{test,expect} from '@playwright/test';

test('verify the url once login with user name and password', async({page})=>{
await page.goto('https://www.saucedemo.com/');
await page.getByPlaceholder('Username').fill('standard_user');
await page.getByPlaceholder('Password').fill('secret_sauce');
await page.getByRole('button',{name:'Login'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// 3. Select Add to cart for Sauce Labs Fleece Jacket
const selectproductname = 'Sauce Labs Fleece Jacket'
await page.locator('.inventory_item')
    .filter({ hasText: selectproductname })
    .getByRole('button', { name: 'Add to cart' })
    .click();
await page.locator('#shopping_cart_container').click();
// 5. Verify selected product in cart
const comparecart= await page.locator('.inventory_item_name').textContent();
//Compare select product with cartproduct
expect(comparecart?.trim()).toBe(selectproductname);
console.log('after comparing should me match successfully')
await page.getByRole('button',{name: 'Checkout'}).click();
await page.getByPlaceholder('First Name').fill('Indla');
await page.getByPlaceholder('Last Name').fill('king');
await page.getByPlaceholder('Zip/Postal Code').fill('508207');
await page.getByRole('button',{name: 'Continue'}).click();
});

