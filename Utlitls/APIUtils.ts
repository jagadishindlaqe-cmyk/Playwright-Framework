import { APIRequestContext } from '@playwright/test';
import { BASE_URLAPI, REQRES_API_KEY } from './envConfig';

export class APIUtils {
    constructor(private request: APIRequestContext) {}

    async getUsers() {
        return await this.request.get(`${BASE_URLAPI}/users?page=2`, {
            headers: {
                'x-api-key': REQRES_API_KEY,
                'Content-Type': 'application/json'
            }
        });
    }
}