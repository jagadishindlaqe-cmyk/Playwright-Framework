import{test,expect} from '@playwright/test';
test("verify multiple windows",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows");
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),page.getByText('Click Here').click() ]);
    });