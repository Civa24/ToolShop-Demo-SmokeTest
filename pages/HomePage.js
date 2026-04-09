import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    constructor(page){
        super(page);
    }

     get signInButton() {
    return this.page.locator('[data-test="nav-sign-in"]');
    }

    get firstProductCard() {
    return this.page.locator('a[data-test^="product-"]').first();
    }
   goto=  async ()=>{
        await this.open('/');
    }
   clickSignin= async ()=>{
        await this.signInButton.click();
    }
  openAnyProduct = async  ()=>{
        await this.firstProductCard.click();
    }


}