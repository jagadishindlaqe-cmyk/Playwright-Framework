import { test, expect } from '@playwright/test';
import { APIUtils } from '../../Utlitls/APIUtils';

test('Get Users API', async ({ request }) => {

    const api = new APIUtils(request);

    const response = await api.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);

    expect(body.page).toBe(2);
});