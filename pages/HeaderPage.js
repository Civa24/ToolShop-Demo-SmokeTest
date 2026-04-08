export class HeaderPage {
    constructor(page){
    this.page = page;
    this.cartButton = page.locator('[data-test="nav-cart"], a[href="/checkout"]').first();
    this.userMenu = page.locator('[data-test="nav-menu"]');
    this.signOutOption = page.locator('[data-test="nav-sign-out"]');

    }
    openCart = async()=>{
        await this.cartButton.click();
    }   
    openUserMenu= async()=>{
        await this.userMenu.click();
    }
    signOut = async()=>{
        await this.signOutOption.waitFor();
        await this.signOutOption.click();
    }

}