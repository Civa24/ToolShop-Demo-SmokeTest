import { BasePage } from './BasePage';

export class ProductPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get addToCartButton() {
    return this.page.locator('[data-test="add-to-cart"]');
  }

  async addToCart() {
    await this.addToCartButton.waitFor();
    await this.addToCartButton.click();
  };
}
