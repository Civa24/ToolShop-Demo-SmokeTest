import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{
    constructor(page){
        super(page);
    
      this.firstNameInput = page.locator('[data-test="first-name"]')
    this.lastNameInput = page.locator('[data-test="last-name"]')
    this.dateOfBirthInput = page.locator('[data-test="dob"]')
    this.streetInput = page.locator('[data-test="street"]')
    this.postcodeInput = page.locator('[data-test="postal_code"]')
    this.cityInput =  page.locator('[data-test="city"]')
    this.stateInput =  page.locator('[data-test="state"]')
    this.countryInput =  page.locator('[data-test="country"]')
    this.phoneInput =  page.locator('[data-test="phone"]')
    this.emailInput =  page.locator('[data-test="email"]')
    this.passwordInput =  page.locator('[data-test="password"]')
    this.registerButton = page.locator('[data-test="register-submit"]')
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
        this.page.waitForURL(/auth\/login/),
        await this.registerButton.click()
    ]);
   
    }
  




}