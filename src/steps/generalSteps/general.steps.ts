import global from "../../types/globalthis"
import { Given, Then, World } from "@cucumber/cucumber"
import { join } from "path"
import { Commons } from "../../support/commons"
const commons = new Commons()

Given(/Estar na pagina Google/, async () => {
    await commons.GoHome()
})

Then("Snapshot {string}", async function (this: World, name: string) {
    await global.page.screenshot({ path: join("test-results", `${name}.png`) })
})
Then("Snapshot", async function () {
    const image = await global.page.screenshot()
    image && (await global.B.attach(image, "image/png"))
})
Then("debug", async function () {
    debugger
})
