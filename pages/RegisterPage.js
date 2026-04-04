import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage{
    constructor(page){
        super(page);
    
      this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.dateOfBirthInput = page.locator('#dob');
    this.streetInput = page.locator('#street');
    this.postcodeInput = page.locator('#postal_code');
    this.cityInput = page.locator('#city');
    this.stateInput = page.locator('#state');
    this.countryInput = page.locator('#country');
    this.phoneInput = page.locator('#phone');
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.registerButton = page.getByRole('button', { name: /register/i });
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
    await this.registerButton.click();
    }
  




}