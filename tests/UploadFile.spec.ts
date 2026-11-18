import { test, expect } from '@playwright/test';

test.skip('verify to upload the file', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload');

    const filePath = 'C:\\Users\\Sowmya\\Desktop\\upload.txt';

    await page.getByTestId('file-input').setInputFiles(filePath);

    await page.getByRole('button', { name: 'Upload' }).click();

    await expect(
        page.getByRole('heading', { name: 'File Uploaded!' })
    ).toBeVisible();
});


test("verify the uploading the file from my system", async({page})=>{
    await page.goto('https://practice.expandtesting.com/upload');
    const fileuploadpath= 'C:\\Users\\Sowmya\\Desktop\\jagadish\\fileupload.txt';
    await page.getByTestId('file-input').setInputFiles(fileuploadpath);
    await page.getByTestId('file-submit').click();
   await expect(page.getByRole('heading',{name:'File Uploaded!'})).toBeVisible();


});