import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{
    constructor(page){
        super(page);
    
    }

    get firstNameInput() {
    return this.page.locator('[data-test="first-name"]')
    }
    get lastNameInput() {
    return this.page.locator('[data-test="last-name"]')
    }
    get dateOfBirthInput() {
    return this.page.locator('[data-test="dob"]')
    }
    get streetInput() {
    return this.page.locator('[data-test="street"]')
    }
    get postcodeInput() {
    return this.page.locator('[data-test="postal_code"]')
    }
    get cityInput() {
    return this.page.locator('[data-test="city"]')
    }
    get stateInput() {
    return this.page.locator('[data-test="state"]')
    }
    get countryInput() {
    return this.page.locator('[data-test="country"]')
    }
    get phoneInput() {
    return this.page.locator('[data-test="phone"]')
    }
    get emailInput() {
    return this.page.locator('[data-test="email"]')
    }
    get passwordInput() {
    return this.page.locator('[data-test="password"]')
    }
    get registerButton() {
    return this.page.locator('[data-test="register-submit"]')
    }


   goto =  async ()=>{
        await this.open('/auth/register');
    }

   register =  async (user)=>{
    await this.firstNameInput.fill(user.firstName);
    await this.lastNameInput.fill(user.lastName);
    await this.dateOfBirthInput.fill(user.dateOfBirth);
    await this.streetInput.fill(user.street);
    await this.postcodeInput.fill(user.postcode);
    await this.cityInput.fill(user.city);
    await this.stateInput.fill(user.state);
    await this.countryInput.selectOption({ label: user.country });
    await this.phoneInput.fill(user.phone);
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
   
   await Promise.all([
        this.page.waitForURL(/auth\/login/,{ timeout: 15000 }),
         await this.registerButton.click()
    ]);
    
    }
  




}