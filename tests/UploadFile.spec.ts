import{test,expect} from '@playwright/test';

test("verify able to upload the file",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("#file-upload").setInputFiles('C:/Users/Sowmya/Desktop/jagadish/Photo.jpeg');
    await page.locator("#file-submit").click();
    await expect(page.getByText('photo.jpeg')).toBeVisible();

});