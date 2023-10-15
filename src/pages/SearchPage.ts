import el from "../elements/elements.json"
import TestFunctions from "../basepage/TestFunctions"

export default class SearchPage extends TestFunctions {
    async Find(text: string) {
        await this.TypeText(el.searchelements.INPUT_SEARCH, {}, text)
        await this.KeyBoard("", "Enter")
    }
    async FindValidate() {
        await this.ValidateElementExist(el.searchelements.LINK_CAPO)
        await this.Executeclick(el.searchelements.LINK_CAPO)
        await this.WaitLoadPage()
    }
}
