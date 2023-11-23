"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.params = exports.genReporter = exports.getScriptMultExec = exports.getScriptExec = void 0;
var os_1 = require("os");
var isMobile = (process.env.RESPONSIVE_ONLY || "false").toLowerCase() === "true";
var isDesktop = (process.env.DESKTOP_ONLY || "false").toLowerCase() === "true";
var isWindows = (0, os_1.platform)() === "win32";
var pathSeparator = isWindows ? "\\" : "/";
var getNameReport = function () {
    return isMobile && isDesktop ? "report1.json" : "report.json";
};
var createScriptBase = function (isMobile) {
    var devicePart = isMobile ? "DEVICE=".concat(process.env.DEVICE) : "";
    return "DEV=".concat(process.env.DEV || "false", " ENVA=").concat(process.env.ENVA, " ENVB=").concat(process.env.ENVB, " NODE_ENV=").concat(process.env.NODE_ENV, " BRWS=").concat(process.env.BRWS, " ").concat(devicePart);
};
var createCucumberScript = function (reportName, isMobile) {
    if (isMobile === void 0) { isMobile = false; }
    var scriptBase = createScriptBase(isMobile);
    return "".concat(scriptBase, " .").concat(pathSeparator, "node_modules").concat(pathSeparator, ".bin").concat(pathSeparator, "cucumber-js --retry ").concat(process.env.RETRY || 3, " --tags ").concat(process.env.TAGS, " --parallel ").concat(process.env.PARALLEL, " -f json:report").concat(pathSeparator).concat(reportName);
};
var getScriptExec = function () {
    if (!isMobile && isDesktop) {
        return createCucumberScript(getNameReport());
    }
    else if (isMobile && !isDesktop) {
        return createCucumberScript(getNameReport(), true);
    }
    return "Parâmetros incorretos";
};
exports.getScriptExec = getScriptExec;
var getScriptMultExec = function () { return ({
    desktop: createCucumberScript("report.json"),
    mobile: createCucumberScript("report2.json", true),
}); };
exports.getScriptMultExec = getScriptMultExec;
var genReporter = function () {
    return "cat .".concat(pathSeparator, "report").concat(pathSeparator, "report.json | npx cucumber-junit > .").concat(pathSeparator, "report").concat(pathSeparator, "e2etestsjunitreport.xml");
};
exports.genReporter = genReporter;
exports.params = {
    isMobile: process.env.RESPONSIVE_ONLY || "false",
    isDesktop: process.env.DESKTOP_ONLY || "false",
    browser: process.env.BRWS || "chrome",
};
