import { expect } from "@playwright/test";
import el from "./Elements";
import basePage from "../basepage/basePage";
import global from "../../types/globalthis";

export default class HomePage extends basePage {
    url: string = "https://playwright.dev/";

    async Redicrect() {
        await global.page.goto(this.url,{timeout: 6000});
    }

    async ValidateHome() {
        await this.ValidateTitleElement('document.title',el.TITLE_HOME);
        // await expect(global.page).toHaveTitle(
            // // "Fast and reliable end-to-end testing for modern web apps | Playwright"
        // );
    }
    async ValidateTitle() {
        await global.page.locator(el.PAGE_TITLE).click();
        await expect(global.page).toHaveTitle(/Getting started/);
    }
}
