import el from "../elements/search.elements";
import TestFunctions from "../basepage/TestFunctions";
import global from "../types/globalthis";
import { Env } from "../support/enviroments";
import { expect } from "@playwright/test";
const v8toIstanbul = require("v8-to-istanbul");
import { writeFileSync } from "fs";

export default class SearchPage extends TestFunctions {
    async SearchPage() {
        await global.page.coverage.startJSCoverage();
        await global.page.goto(Env.server);
        const coverage = await global.page.coverage.stopJSCoverage();
        const coverageReport: any = [];
        for await (const entry of coverage) {
            const converter = v8toIstanbul("", 0, { source: entry.source });
            await converter.load();
            converter.applyCoverage(entry.functions);
            coverageReport.push(converter.toIstanbul()); // Adicione esta linha
        }
        writeFileSync("coverage.json", JSON.stringify(coverageReport, null, 2));
    }
    async Find(text: string) {
        await this.Test(el.INPUT_SEARCH, text).TypeText();
        await this.Test("Enter").Keyboard();
    }
    async FindValidate() {
        // await this.Test(el.LINK_CAPO).ValidateElementExist();
        // await this.Test(el.LINK_CAPO).ExecuteClick();
        await this.Test().WaiLoadPage();
        
    }
}
