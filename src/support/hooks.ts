import global from "../types/globalthis";
import { chromium } from "@playwright/test";
import { setDefaultTimeout,BeforeAll,AfterAll,Before,World,After, Status } from "@cucumber/cucumber";
import { Env } from "./enviroments";

setDefaultTimeout(60*10000);

BeforeAll(async () => {
    global.browser = await chromium.launch({
        slowMo: 100,
        headless: Env.headless,
        // args: ["--disable-web-security"]
    });
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
})
Before({tags: "@ignore"},async function (){
    return "skipped" as any;
})
Before(async () =>{
    global.context.clearCookies();
})
After(async function(this: World, scenario)  {
    if(
        scenario.result?.status === Status.FAILED || scenario.result?.status === Status.PASSED

    ){
        const image = await global.page.screenshot({
            path:`test-results/${scenario.pickle.name}.png`,
            fullPage: true
        });
        image && (await this.attach(image, "image/png"))
    }
});
AfterAll(async () => {
    global.page.close();    
    global.context.close();
    global.browser.close();    
})