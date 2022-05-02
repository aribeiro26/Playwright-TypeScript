const reporter = require("cucumber-html-reporter")
const options ={
     theme:'bootstrap',
     jsonFile:'report/report.json',
     output:'report/cucumber-html-report.html',
     screenshotsDirectory: 'test-results/',
     reportSuiteAsScenaros:true,
     launchReport:false,
     scenarioTimestamp: true,
}
reporter.generate(options)