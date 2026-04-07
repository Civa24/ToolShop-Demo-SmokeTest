import { BasePage } from './BasePage.js';

export class CheckoutPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get proceedToCheckoutButton() {
    return this.page.getByRole('button', { name: /proceed to checkout/i });
  }

get paymentDropdown() {
  return this.page.locator('[data-test="payment-method"]');
}

  get confirmButton() {
  return this.page.locator('[data-test="finish"]');
}

 clickProceedToCheckout =  async ()=> {
    await this.proceedToCheckoutButton.click();
  }
chooseCashOnDelivery =  async ()=> {
    await this.paymentDropdown.waitFor();
    await this.paymentDropdown.selectOption('cash-on-delivery');
  }
confirmPayment =  async ()=> {
    await this.confirmButton.click();
  }
}