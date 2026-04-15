import { BasePage } from './BasePage';
import { expect } from 'allure-playwright';

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get registeryourAccountLink() {
    return this.page.locator('[data-test="register-link"]');
  }

  get emailInput() {
    return this.page.locator('[data-test="email"]');
  }

  get passwordInput() {
    return this.page.locator('[data-test="password"]');
  }

  get loginButton() {
    return this.page.locator('[data-test="login-submit"]');
  }



  async goto(){
    await this.open('/auth/login');
  };
  async clickRegisterYourAccount(){
    await this.registeryourAccountLink.click();
  };
  
  async enterEmail(email) {
    await this.emailInput.fill(email);
  };
  async enterPassword(password){
    await this.passwordInput.fill(password);
  };
  
  async clickLogin(){
     await this.loginButton.click();
  };

  async login(email, password) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLogin();
  };
}
