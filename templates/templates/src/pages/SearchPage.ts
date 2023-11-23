import el from "../elements/elements.json"
import {testFunctions} from "playwright.typescript.cucumber"

export default class SearchPage extends testFunctions {
    async Find(text: string) {
        await this.TypeText(el.searchelements.INPUT_SEARCH, {}, text)
        await this.KeyBoard("", "Enter")
    }
    async FindValidate(text: string) {
        await this.ValidateElementExist(`[data-pcu^='https://www.${text}']`)
        await this.Executeclick(`[data-pcu^='https://www.${text}']`)
        await this.WaitLoadPage()
    }
}
