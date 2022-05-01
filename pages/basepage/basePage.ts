import Hooks from "../../support/hooks";
import global from "../../types/globalthis";
import { expect } from 
"@playwright/test";

export default class basePage extends Hooks{
    
    Executeclick(elemento: string)
    {
        global.page.locator(elemento).click();
    }
    
    async ValidateTitleElement(elemento: string,text: string){
        await expect(global.page.locator(elemento)).toHaveTitle(text);
    }
}