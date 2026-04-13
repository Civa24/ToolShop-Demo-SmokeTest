export class HeaderPage {
  constructor(page) {
    this.page = page;
  }

  get cartButton() {
    return this.page.locator('[data-test="nav-cart"], a[href="/checkout"]').first();
  }
  get userMenu() {
    return this.page.locator('[data-test="nav-menu"]');
  }
  get signOutOption() {
    return this.page.locator('[data-test="nav-sign-out"]');
  }
  openCart = async () => {
    await this.cartButton.click();
  };
  openUserMenu = async () => {
    await this.userMenu.click();
  };
  signOut = async () => {
    await this.signOutOption.waitFor();
    await this.signOutOption.click();
  };
}
