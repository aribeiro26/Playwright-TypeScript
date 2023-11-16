"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.script = void 0;
exports.script = {
    desktop_exec: "DEV=".concat(process.env.DEV || "false", " ENVA=").concat(process.env.ENVA, " ENVB=").concat(process.env.ENVB, " NODE_ENV=").concat(process.env.NODE_ENV, " BRWS=").concat(process.env.BRWS, " ./node_modules/.bin/cucumber-js --retry ").concat(process.env.RETRY || 3, " --tags ").concat(process.env.TAGS, " --parallel ").concat(process.env.PARALLEL, " -f json:report/report.json"),
    reportGenerate: "cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml",
    browser: "".concat(process.env.BRWS || "chrome"),
    responsive_only: process.env.RESPONSIVE_ONLY || "false",
    desktop_only: process.env.DESKTOP_ONLY || "false",
};
