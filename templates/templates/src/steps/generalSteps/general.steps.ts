import {
    global,
    ICustomWorld,
    compareToBaseImage,
    axeCore,
    playLighthouse,
} from "playwright.typescript.cucumber"
import { Given, Then, World } from "@cucumber/cucumber"
import { join } from "path"
import { Commons } from "../../support/Commons"

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

Then(
    "Comparar a imagem base com atual {string}",
    async function (this: ICustomWorld, name: string) {
        await global.page.waitForTimeout(1000)
        const screenshot = await global.page.screenshot()
        await compareToBaseImage(this, name, screenshot as Buffer)
    }
)

Then("Execute analise lighthouse {string}", async function (name: string) {
    await playLighthouse(name)
})

Then(
    "Execute analise de acessibilidade {string}",
    async function (url: string) {
        await axeCore(global.page, url)
    }
)
