const { promisify } = require("util")
const { exec: execCallback } = require("child_process")
const { platform } = require("os")

const exec = promisify(execCallback)

;(async function () {
    try {
        let command
        if (platform() === "win32") {
            command = "start .\\report\\cucumber-html-report.html"
        } else {
            command = "open ./report/cucumber.html"
        }
        await exec(
            "node report.js; cat report/report.json | npx cucumber-junit > report/junitreport.xml"
        )
        await exec(command)
    } catch (error) {
        console.error(`Erro ao executar o comando: ${error}`)
    }
})()
