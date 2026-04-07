import {test , expect} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ProductPage } from "../pages/ProductPage";
import { HeaderPage } from "../pages/HeaderPage";

test ('Home-Register-Login-Cart-SignOut ToolShop automation',async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);
    const productPage = new ProductPage(page);
    const headerPage = new HeaderPage(page);


    const year =new Date().getFullYear();
       // const uniqueEmail=`amesrkino${year}@gmail.com`;
    const uniqueEmail=`amesrkino${Date.now()}@gmail.com`;

    const user = {
        firstName : 'Amer',
        lastName : 'Ćivić',
        dateOfBirth : '2002-11-29',
        street : 'Ulica V-divizije NOP-a',
        postcode : '72240',
        city : 'Kakanj',
        state : 'Federacija',
        country : 'Bosnia and Herzegovina',
        phone : '061444555',
        email : uniqueEmail,
        password : 'Atlantko321.'

    };

    
    await homePage.goto();
    await homePage.clickSignin();
    await loginPage.clickRegisterYourAccount();
    
    await registerPage.register(user);
    //await  expect(page).toHaveURL(/auth\/login/);

    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');

    await loginPage.login(user.email, user.password);
    await homePage.goto();
    await homePage.openAnyProduct();
    await productPage.addToCart();
   
   await headerPage.openCart();
//await page.pause();
});