const reporter = require("cucumber-html-reporter")

const options = {
    theme: "bootstrap",
    jsonFile: "report/report1.json",
    output: "report/cucumber.html",
    reportSuiteAsScenaros: true,
    scenarioTimestamp: true,
    launchReport: false,
}
reporter.generate(options)