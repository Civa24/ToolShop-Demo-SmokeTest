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

    async clickProceedToCheckout(times)  {
    for (let i = 0; i < times; i++) {
      await this.proceedToCheckoutButton.click();
    }
  };

    async chooseCashOnDelivery() {
    await this.paymentDropdown.waitFor();
    await this.paymentDropdown.selectOption('cash-on-delivery');
  };
    async confirmPayment(times) {
    for (let i = 0; i < times; i++) {
      await this.confirmButton.click();
    }
  };
    async completeCheckout() {
    await this.clickProceedToCheckout(3);
    await this.chooseCashOnDelivery();
    await this.confirmPayment(2);
  };
}
