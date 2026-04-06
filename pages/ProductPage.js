import { BasePage } from "./BasePage";

export class ProductPage extends BasePage{
    constructor(page){
        super(page);
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    }
    addToCart = async()=>{
        await this.addToCartButton.waitFor();
        await this.addToCartButton.click();
    }
}