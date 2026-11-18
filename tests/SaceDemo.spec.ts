
import { test, expect } from '@playwright/test';

test('SauceDemo end-to-end checkout', async ({ page }) => {

  // 1. Launch application
  await page.goto('https://www.saucedemo.com/');

  // 2. Login
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Verify login successful
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('.title')).toHaveText('Products');

  // 3. Select Sauce Labs Fleece Jacket
  const product = page.locator('.inventory_item')
    .filter({ hasText: 'Sauce Labs Fleece Jacket' });

  await expect(product).toBeVisible();

  // 4. Add product to cart
  await product.locator('button').click();

  // Verify button changed to Remove
  await expect(product.locator('button')).toHaveText('Remove');

  // 5. Click shopping cart
  await page.locator('.shopping_cart_link').click();

  // 6. Verify selected product in cart
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Fleece Jacket');

  // Verify quantity
  await expect(page.locator('.cart_quantity')).toHaveText('1');

  // 7. Click Checkout
  await page.locator('#checkout').click();

  // 8. Fill checkout information
  await page.locator('#first-name').fill('Jagadish');
  await page.locator('#last-name').fill('Indla');
  await page.locator('#postal-code').fill('500039');

  // 9. Click Continue
  await page.locator('#continue').click();

  // 10. Verify checkout overview page
  await expect(page).toHaveURL(/checkout-step-two.html/);

  // Verify product description
  await expect(page.locator('.inventory_item_name'))
    .toHaveText('Sauce Labs Fleece Jacket');

  // Verify Payment Information
  await expect(page.locator('.summary_info_label')
    .filter({ hasText: 'Payment Information:' }))
    .toBeVisible();

  // Verify Shipping Information
  await expect(page.locator('.summary_info_label')
    .filter({ hasText: 'Shipping Information:' }))
    .toBeVisible();

  // Verify Price Total
  await expect(page.locator('.summary_total_label'))
    .toBeVisible();

  // Verify total price is displayed
  await expect(page.locator('.summary_total_label'))
    .toContainText('Total:');

  // 11. Click Finish
  await page.locator('#finish').click();

  // 12. Verify order confirmation
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

  await expect(page.locator('.complete-text'))
    .toBeVisible();

  console.log('Order placed successfully!');

});








test.skip('SauceDemo complete end-to-end checkout', async ({ page }) => {

  // 1. Launch application
  await page.goto('https://www.saucedemo.com/');

  // 2. Login using different locators
  await page.getByPlaceholder('Username').fill('standard_user');

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);

  await expect(page.getByText('Products', { exact: true }))
    .toBeVisible();

  // 3. Select Sauce Labs Fleece Jacket
  await page.getByText('Sauce Labs Fleece Jacket', { exact: true })
    .click();

  // Verify product details page
  await expect(page.getByText('Sauce Labs Fleece Jacket', { exact: true }))
    .toBeVisible();

  // 4. Add product to cart
  await page.getByRole('button', { name: 'Add to cart' }).click();

  // Verify Remove button
  await expect(page.getByRole('button', { name: 'Remove' }))
    .toBeVisible();

  // 5. Click shopping cart
  await page.getByRole('link', { name: '1' }).click();

  // 6. Verify product in cart
  await expect(page.getByText('Sauce Labs Fleece Jacket', { exact: true }))
    .toBeVisible();

  await expect(page.getByText('1', { exact: true })).toBeVisible();

  // 7. Click Checkout
  await page.getByRole('button', { name: 'Checkout' }).click();

  // 8. Fill checkout details
  await page.getByPlaceholder('First Name').fill('Jagadish');

  await page.getByPlaceholder('Last Name').fill('Indla');

  await page.getByPlaceholder('Zip/Postal Code').fill('500039');

  // 9. Click Continue
  await page.getByRole('button', { name: 'Continue' }).click();

  // 10. Verify checkout overview
  await expect(page).toHaveURL(/checkout-step-two.html/);

  // Verify product description
  await expect(page.getByText('Sauce Labs Fleece Jacket', { exact: true }))
    .toBeVisible();

  // Verify Payment Information
  await expect(page.getByText('Payment Information:'))
    .toBeVisible();

  // Verify Shipping Information
  await expect(page.getByText('Shipping Information:'))
    .toBeVisible();

  // Verify Item Total
  await expect(page.getByText(/Item total:/i))
    .toBeVisible();

  // Verify Tax
  await expect(page.getByText(/Tax:/i))
    .toBeVisible();

  // Verify Price Total
  await expect(page.getByText(/Total:/i))
    .toBeVisible();

  // 11. Click Finish
  await page.getByRole('button', { name: 'Finish' }).click();

  // 12. Verify order confirmation
  await expect(page.getByText('Thank you for your order!'))
    .toBeVisible();

  await expect(page.getByText('Your order has been dispatched'))
    .toBeVisible();

  console.log('Order placed successfully!');

});
