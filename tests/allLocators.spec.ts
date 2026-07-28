import{test,expect} from '@playwright/test';

test("verify all the locators",async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator("#user-name").fill("standard_user")
await page.locator("#password").fill("secret_sauce")
await page.locator("#login-button").click();
await expect(page).toHaveTitle("Swag Labs");
  // Get the page title
  const title = await page.title();

  // Print the title
  console.log("Page Title:", title);
await page.getByText("Add to cart").first().click();
await page.locator(".product_sort_container").click();
await page.locator(".product_sort_container").selectOption({
    label: "Price (low to high)"
    });
await page.locator("#shopping_cart_container").click();
await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
console.log("swagLabs");
await page.screenshot({
        path: 'screenshots/swagLabs-success.png',
        fullPage: true
        });
await page.locator("#checkout").click();
await expect(page.locator(".title")).toHaveText("Checkout: Your Information");
console.log("Checkout: Your Information");
await page.screenshot({
        path: 'screenshots/Checkoutinfo-success.png',
        fullPage: true
        });
await page.locator("#first-name").fill("Indla");
await page.locator("#last-name").fill("Jagadish");
await page.locator("#postal-code").fill("508207");
await page.locator("#continue").click();
await page.locator("#finish").click();
await expect(page.locator(".complete-header")).toHaveText("Thank you for your order!");
console.log("Thank you for your order!");
await page.screenshot({
        path: 'screenshots/Thanksordering-success.png',
        fullPage: true
        });
await page.locator("#react-burger-menu-btn").click();
await page.locator("#logout_sidebar_link").click();
await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
console.log("Swag Labs");
await page.screenshot({
        path: 'screenshots/Logout-success.png',
        fullPage: true
        });
   


})