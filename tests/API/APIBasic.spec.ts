
import { test, expect } from '@playwright/test';

test('GET API - Fetch posts', async ({ request }) => {

  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts'
  );

  // Validate status code
  expect(response.status()).toBe(200);

  // Convert response into JSON
  const data = await response.json();

  // Validate response data
  expect(data.length).toBeGreaterThan(0);

  console.log(data);
});
