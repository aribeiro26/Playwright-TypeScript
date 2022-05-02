import el from "../elements/search.elements";
import TestFunctions from "../basepage/TestFunctions";
import global from "../types/globalthis";
import { Env } from "../support/enviroments";
import { expect } from "@playwright/test";

export default class SearchPage extends TestFunctions {
    
    async SearchPage() {
        await global.page.goto(Env.server);
    }
    async Find(text: string) {
        await this.Test(el.INPUT_SEARCH,text).TypeText();
        await this.Test('Enter').Keyboard();
       
    }
    async FindValidate() {
        
        await this.Test(el.LINK_CAPO).ValidateElementExist();
        await this.Test(el.LINK_CAPO).ExecuteClick();
        await this.Test().WaiLoadPage()        
    }
}
