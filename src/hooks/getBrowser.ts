import {
    chromium,
    firefox,
    webkit,
    BrowserType,
    devices,
} from "@playwright/test"
import { config } from "../support/config"
let user_dir = "./userDataDir"
type browsertypes = {
    chrome: BrowserType
    firefox: BrowserType
    safari: BrowserType
}
export const browserTypes: browsertypes = {
    chrome: chromium,
    firefox: firefox,
    safari: webkit,
}
export const browserType = process.env.BRWS || "chrome"
export default async function getBrowser() {
    if (!browserTypes[browserType as keyof typeof browserTypes]) {
        global.context = await chromium.launchPersistentContext(
            user_dir,
            config.browserOptions
        )
        global.page = await global.context.newPage()
    } else {
        const browser = await browserTypes[
            browserType as keyof typeof browserTypes
        ].launch(config.browserOptions)
        global.browser = browser
        global.context = await global.browser.newContext({
            ...config.browserContextOptions,
            ...devices[process.env.DEVICE || ""],
        })
        global.page = await global.context.newPage()
    }
}
