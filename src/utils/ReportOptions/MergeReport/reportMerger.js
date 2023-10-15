const reporter = require("cucumber-html-reporter")
const fs = require("fs")

const jsonFiles = ["report/report1.json", "report/report2.json"]

const mergedJson = jsonFiles.reduce((merged, file) => {
    const contents = fs.readFileSync(file, "utf8")
    const json = JSON.parse(contents)
    merged.push(...json)
    return merged
}, [])

const mergedFile = "report/report.json"
fs.writeFileSync(mergedFile, JSON.stringify(mergedJson))

const mergedReportOptions = {
    theme: "bootstrap",
    jsonFile: mergedFile,
    output: "report/cucumber.html",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: false,
}

reporter.generate(mergedReportOptions)
