import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
  }

  get signInButton() {
    return this.page.locator('[data-test="nav-sign-in"]');
  }

  get firstProductCard() {
    return this.page.locator('a[data-test^="product-"]').first();
  }
  async goto() {
    await this.open('/');
  };
  async clickSignin(){
    await this.signInButton.click();
  };
  async openAnyProduct(){
    await this.firstProductCard.click();
  };
}
