import{test,expect} from '@playwright/test';
import testdata from '../testdata/data.json';
import testdata1 from '../testdata/data1.json';


test("verify multiple windows",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows");
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),page.getByText('Click Here').click() ]);

   
    await newPage.waitForLoadState();
    console.log("parent page title:", await page.title());
    console.log("child page title:",await newPage.title());

    await expect(newPage.getByText('New Window')).toBeVisible();
     await newPage.close();
    


});