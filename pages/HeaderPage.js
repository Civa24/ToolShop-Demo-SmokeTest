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
  async openCart (){
    await this.cartButton.click();
  };
  async openUserMenu() {
    await this.userMenu.click();
  };
  async  signOut() {
    await this.signOutOption.waitFor();
    await this.signOutOption.click();
  };
}
