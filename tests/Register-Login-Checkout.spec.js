import {test} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

test ('Home-Register-Login-Cart-SignOut ToolShop automation',async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const registerPage = new RegisterPage(page);


    const year =new Date().getFullYear();
    const uniqueEmail=`amerko${year}@gmail.com`;

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

})