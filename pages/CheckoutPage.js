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

  clickProceedToCheckout = async (times) => {
    for (let i = 0; i < times; i++) {
      await this.proceedToCheckoutButton.click();
    }
  };

  chooseCashOnDelivery = async () => {
    await this.paymentDropdown.waitFor();
    await this.paymentDropdown.selectOption('cash-on-delivery');
  };
  confirmPayment = async (times) => {
    for (let i = 0; i < times; i++) {
      await this.confirmButton.click();
    }
  };
  completeCheckout = async () => {
    await this.clickProceedToCheckout(3);
    await this.chooseCashOnDelivery();
    await this.confirmPayment(2);
  };
}
