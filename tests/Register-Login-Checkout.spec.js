import {test} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test ('Home-Register-Login-Cart-SignOut ToolShop automation',async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);


    
    await homePage.goto();
    await homePage.clickSignin();
    await loginPage.clickRegisterYourAccount();

})