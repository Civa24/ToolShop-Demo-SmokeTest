import {test} from "@playwright/test"
import { BasePage } from "../pages/BasePage"

test ('Open ToolShop website',async({page})=>{
    const basePage = new BasePage(page);
    await basePage.open("/"); 
})