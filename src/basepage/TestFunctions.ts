import global from "../types/globalthis";
import { expect, Page } from 
"@playwright/test";

class TestFunctions{

    Test(elemento: string = "", text: string = ""){
        return{
            elemento: elemento,
            text: text,

            async ValidateTitle(){
                expect(global.page).toHaveTitle(`${text}`)
            },           
            async ExecuteClick(){
                await global.page.locator(`${elemento}`).click();
            },

            async ExecuteDoubleClick(){
                await global.page.locator(`${elemento}`).dblclick();
            },
            async ValidateText(){
                await expect.soft(global.page.locator(`${elemento}`)).toHaveText(`${text}`)

            },
            async IframeLocator(){
                await global.page.frameLocator(`${elemento}`).locator(`${text}`)

            },
            async TypeText(){
                await global.page.locator(`${elemento}`).fill(`${text}`,{force: true,noWaitAfter: true, timeout: 10000})

            },
            async ValidateUrl(){
                await global.page.waitForURL(`${elemento}`,{waitUntil: 'domcontentloaded'})

            },

            async WaiLoadPage(){
                await global.page.waitForLoadState('domcontentloaded')
            },
            async Keyboard(){
                await global.page.keyboard.press(`${elemento}`)
            },

            async ValidateElementExist(){
                await global.page.locator(`${elemento}`).waitFor({state: 'attached',timeout: 15000})
            },

            async ValidateHiddenElement(){
                await global.page.isHidden(`${elemento}`)
            },
            async isVisible(){
                await global.page.locator(`${elemento}`).isVisible();
            },


        }
    }
}

export default TestFunctions;