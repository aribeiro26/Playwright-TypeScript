import fs from "fs"
import fsystem from "fs/promises"
const path = require("path")
import {
    setDefaultTimeout,
    World,
    Status,
    Before,
    AfterStep,
    AfterAll,
    BeforeAll,
    ITestCaseHookParameter,
    After,
} from "@cucumber/cucumber"
const dotenv = require("dotenv")
import CreateDirectory from "../utils/CreateDirectory"
import GetBrowser, { browserTypes, browserType } from "./getBrowser"
const { execSync } = require("child_process")
dotenv.config()
setDefaultTimeout(60 * 10000)
/**
 * Executa ações antes de todos os testes.
 * Este before trata da criacao do diretorio de report para nao falhar testes, e tabem inicia as instancias do browser, one é definido em GetBrowser, estes valores sao recebido via params do package.json ou via pipeline.
 *
 * @returns {Promise<void>}
 */
BeforeAll(async () => {
    await CreateDirectory("report")
    await GetBrowser()
   
})
/**
 * Executa ações antes de um teste especificado.
 *
 * @param {{ tags: string }} options - Opções para o hook.
 * @returns {Promise<any>}
 */
Before({ tags: "@ignore" }, async function () {
    return "skipped" as any
})
/**
 * Executa ações antes de um teste especificado.
 * Este before trata na parte de verificar sobre se ja existe imagens,c aso ja exista ele deleta, utilizamos por conta do retry cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
Before(async function (this: World, scenario: ITestCaseHookParameter) {
    const imagePath = `test-results/${scenario.pickle.name}.png`
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
    }
})
/**
 * Executa ações após cada etapa de um teste especificado.
 * Este after exclusivamente trata sobre os screenshots, onde sao adicionadas ao report cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
AfterStep(async function (this: World, scenario: ITestCaseHookParameter) {
    if (
        scenario.result?.status === Status.FAILED ||
        scenario.result?.status === Status.PASSED
    ) {
        await global.page.waitForTimeout(2000)
        const image = await global.page.screenshot({
            path: `test-results/${scenario.pickle.name}.png`,
            fullPage: true,
            timeout: 480000,
            scale: "css",
        })
        image && (await this.attach(image, "image/png"))
    }
})
/**
 *
 * Executa ações após um teste especificado.
 * Este after exclusivamente trata sobre os videos, onde sao adicionadas ao report cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
After(async function (this: World, scenario: ITestCaseHookParameter) {
    if (
        scenario.result?.status === Status.FAILED ||
        scenario.result?.status === Status.PASSED
    ) {
        const videoPath = await global.page.video()?.path()
        if (videoPath) {
            const video = fs.readFileSync(videoPath)
            const videoElement = `<video width="340" height="400" controls><source type="video/webm" src="data:video/webm;base64,${video.toString(
                "base64"
            )}"></video>`
            await this.attach(videoElement, "text/html")
        }
    }
})
/**
 * Executa ações após todos os testes.
 *
 * @returns {Promise<void>}
 */
;("")
const executeEvent = async () => {
    const currentPath = process.cwd()
    const pathfile = path.join(currentPath, "temp", "output.txt")
    const events = fs.readFileSync(pathfile, "utf-8")
    if (events?.includes("Timeout")) {
        await execSync("node src/utils/events.js")
    }
}
AfterAll(async () => {
    const currentPath = process.cwd()
    const pathfile = path.join(currentPath, "temp", "output.txt")
    if (!browserTypes[browserType as keyof typeof browserTypes]) {
        await global.browser.close()
        await global.page.close()
        if (fs.existsSync(pathfile)) {
            await executeEvent()
        }
    } else {
        await global.page.close()
        await global.context.close()
        await global.browser.close()
        if (fs.existsSync(pathfile)) {
            await executeEvent()
        }
    }
})
