import { When, Then } from "@cucumber/cucumber"
import Searchpage from "../pages/SearchPage"

const search = new Searchpage()

When("Pesquisar {string} no campo de busca", async text => {
    await search.Find(text)
})

Then(/Localizar o primeiro resultado da busca/, async () => {
    await search.FindValidate()
})
