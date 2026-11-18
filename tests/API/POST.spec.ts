import{test,  expect} from '@playwright/test';
//import{test, expect} from '@playwright/test';

test('POST API - Create Post', async ({ request }) => {

    // Request body
    const requestBody = {
        title: 'Playwright',
        body: 'API Automation',
        userId: 1
    };

    const response = await request.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            data: requestBody
        }
    );

    expect(response.status()).toBe(201);

    const responseData = await response.json();

    console.log(responseData);

});