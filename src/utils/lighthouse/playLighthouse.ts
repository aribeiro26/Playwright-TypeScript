import { chromium } from "@playwright/test"
import { playAudit } from "../../loaders/playwright-lighthouse/index.js"

export const playLighthouse = async (url: string) => {
    const browser = await chromium.launch({
        args: ["--remote-debugging-port=9222"],
    })
    const page = await browser.newPage()
    await page.goto(url, { timeout: 80000 })

    await playAudit({
        page: page,
        thresholds: {
            performance: 50,
            accessibility: 50,
            "best-practices": 50,
            seo: 50,
            // pwa: 50,
        },
        port: 9222,

        reports: {
            formats: {
                json: true, //defaults to false
                html: true, //defaults to false
                csv: true, //defaults to false
            },
            name: `lighthouse-${new Date().getTime()}`, //defaults to `lighthouse-${new Date().getTime()}`
            directory: `report/lighthouse`, //defaults to `${process.cwd()}/lighthouse`
        },
    })

    await browser.close()
}
