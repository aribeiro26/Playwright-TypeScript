import Searchpage from "../pages/SearchPage";
import {Given,When,Then} from "@cucumber/cucumber";

const search = new Searchpage();

Given(/Estar na pagina Google/,async() => {
    await search.SearchPage();

})


When('Pesquisar {string} no campo de busca',async(text) => {
    await search.Find(text)

})

Then(/Localizar o primeiro resultado da busca/,async() => {
    await search.FindValidate();
})