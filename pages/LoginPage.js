import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.registeryourAccountLink = page.getByRole('link',{ name: /register your account/i });
      // this.emailInput = page.locator('[data-test="email"]');
       /*  this.emailInput=page.locator('#email');
      this.passwordInput = page.locator('[data-test="password"]'); */
      this.emailInput=page.locator('input[type="email"]').first();
      this.passwordInput = page.locator('input[type="password"]');
        this.loginButton = page.locator('[data-test="login-submit"]');
    }
    goto = async()=>{
        await this.open('/auth/login');
    }
    clickRegisterYourAccount = async()=>{
        await this.registeryourAccountLink.click();
    }
   enterEmail = async (email)=> {
    await this.emailInput.fill(email);
  }

 enterPassword = async (password) => {
    await this.passwordInput.fill(password);
  }

clickLogin =  async ()=> {
    await this.loginButton.click();
  }

 login= async (email, password)=> {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  }
}