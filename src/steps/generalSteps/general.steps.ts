import global from "../../types/globalthis";
import { World,Then } from "@cucumber/cucumber";
import {join} from "path";

Then('Snapshot {string}', async function (this: World, name: string) {

    await global.page.screenshot({path: join('test-results', `${name}.png`)})    
})

Then('Snapshot', async function (this: World) {
    const image = await global.page.screenshot();
    image && (await this.attach(image, "image/png"))
    
})

Then('debug',async function (){
    debugger;    
});