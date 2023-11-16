import { Page, BrowserType, Browser, BrowserContext } from "@playwright/test";
import { World } from "@cucumber/cucumber";
declare namespace global {
    let browserName: BrowserType;
    let page: Page;
    let B: World;
    let browser: Browser;
    let context: BrowserContext;
    let cookies: any;
}
export = global;
