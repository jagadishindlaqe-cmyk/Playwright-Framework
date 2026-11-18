import { test, expect } from '@playwright/test';

test('verify file download', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/download');

    const downloadPromise = page.waitForEvent('download');

    await page.getByTestId('1793080069289_acentos_qa.txt').click();

    const download = await downloadPromise;

    console.log('File name:', download.suggestedFilename());

    await download.saveAs('downloads/1793080069289_acentos_qa.txt');



 const downloadPromise1 = page.waitForEvent('download');

    await page.getByTestId('1793081140003_DNDAgentFile.txt').click();

    const download1 = await downloadPromise1;

    console.log('File name:', download1.suggestedFilename());

    await download1.saveAs('downloads/1793081140003_DNDAgentFile.txt');



     const downloadPromise2 = page.waitForEvent('download');

    await page.getByTestId('1793084757674_DNDAgentFile.txt').click();

    const download2 = await downloadPromise2;

    console.log('File name:', download2.suggestedFilename());

    await download2.saveAs('downloads/1793084757674_DNDAgentFile.txt');



    const downloadPromise4= page.waitForEvent('download');
    await page.locator('').click();
    const download4= await downloadPromise4;
    console.log('File name:', download4.suggestedFilename());
    await download4.saveAs('downloads/downloadfinename.text')

});


