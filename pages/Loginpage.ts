import { Loginlocators } from "../locators/Loginlocators";
import { Page } from "@playwright/test";


export class Loginpage{
    constructor (private page : Page){

    }
    async login(username:string,password:string){
        await this.page.fill(Loginlocators.userNameInput,username);
        await this.page.fill(Loginlocators.passwordInput,password);
        await this.page.click(Loginlocators.loginButton)

    }
}