import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    constructor(page){
        super(page);
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
        this.firstProductCard=page.locator('a[data-test^="product-"]').first();
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