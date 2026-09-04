import{test,expect} from '@playwright/test';
test('verify the page',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/dropdown");
    //await page.selectOption('1')
   const option2= await page.selectOption('#dropdown','2');
   await expect(option2).toEqual(['2']);

});