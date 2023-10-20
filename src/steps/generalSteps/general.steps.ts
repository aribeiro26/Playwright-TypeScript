import global from "../../types/globalthis"
import { Given, Then, World, ITestCaseHookParameter } from "@cucumber/cucumber"
import { Commons } from "../../support/commons"
const commons = new Commons()
import {
    ICustomWorld,
    compareToBaseImage,
    getImagePath,
} from "../../utils/compareImages"

Given(/Estar na pagina Google/, async () => {
    await commons.GoHome()
})

Then(
    "Snapshot {string}",
    async function (this: ICustomWorld, scenario: ITestCaseHookParameter) {
        await global.page.screenshot({
            path: getImagePath(this, scenario.pickle.name),
        })
    },
)

Then("Snapshot", async function () {
    const image = await global.page.screenshot()
    image && (await this.attach(image, "image/png"))
})

Then("debug", async function () {
    await global.page.pause()
})

Then(
    "Screen matches the base image {string}",
    async function (this: ICustomWorld, name: string) {
        await global.page.waitForTimeout(1000)
        const screenshot = await global.page.screenshot()
        await compareToBaseImage(this, name, screenshot as Buffer)
    },
)
