const { exec } = require("child_process")

function extractErrorDetails(output) {
    const logsStartKeyword = "====== logs ======"
    const logsEndKeyword =
        "============================================================"

    const joinedOutput = output.join("\n")

    const errorIndex = joinedOutput.indexOf("✖ ")
    const logsStartIndex = joinedOutput.indexOf(logsStartKeyword)
    const logsEndIndex = joinedOutput.indexOf(
        logsEndKeyword,
        "==============================",
    )
    const errorReason = joinedOutput
        .slice(errorIndex + 2, logsStartIndex)
        .trim()
    const logs = joinedOutput
        .slice(logsStartIndex + logsStartKeyword.length, logsEndIndex)
        .trim()

    console.log(
        "##vso[task.logissue type=error] Motivo do Erro ========= ",
        "\n",
        "##vso[task.logissue type = error]" + errorReason,
        "\n\n",
        "##vso[task.logissue type=error] Conteúdo do Erro ========= ",
        "##vso[task.logissue type = error]" + logs,
        "\n\n",
    )

    return { errorReason, logs }
}

function execAsync(command) {
    return new Promise((resolve, reject) => {
        const child = exec(command)

        let stdoutData,
            stderrData,
            errorDetails = ""
        let failedScenarios = []

        child.stdout.on("data", data => {
            stdoutData += data
            console.log(data)

            if (data.includes("Scenario")) {
                failedScenarios.push("Failures: " + data)
                errorDetails = extractErrorDetails(failedScenarios)
            }
            if (errorDetails.errorReason?.length > 0) {
                if (errorDetails.errorReason?.includes("Timeout")) {
                    console.log(
                        "##vso[task.logissue type=warning]  Possível solução",
                        "\n",
                        "##vso[task.logissue type=warning]  https:playwright.com",
                    )
                    console.log(
                        "##vso[task.complete result=Failed;]DONE",
                        "\n\n",
                    )
                }
            }
        })

        child.stderr.on("data", data => {
            stderrData += data
            console.log(stderrData)
        })

        child.on("close", code => {
            if (code !== 0) {
                const error = new Error(
                    `Erro ao executar o comando: ${command}`,
                )
                error.code = code
                error.stdout = stdoutData
                error.stderr = stderrData
                reject(error)
            } else {
                resolve({ stdout: stdoutData, stderrData, failedScenarios })
            }
        })
    })
}

const env = {
    ENVA: (String = process.env.ENVA || ""),
    ENVB: (String = process.env.ENVB || ""),
    NODE_ENV: (String = process.env.NODE_ENV || "local"),
    DEVICE: (String = process.env.DEVICE || undefined),
    TAGS: (String = process.env.TAGS || "@regressivo"),
    PARALLEL: (String = process.env.PARALLEL || "1"),
    RESPONSIVE_ONLY: (String = process.env.RESPONSIVE_ONLY || "false"),
    DESKTOP_ONLY: (String = process.env.DESKTOP_ONLY || "false"),
    BROWSER: (String = process.env.BRWS || "chrome"),
}

const ExecDesktopOnly = async () => {
    process.env.DEVICE = undefined
    try {
        await execAsync(
            `DEV=${process.env.DEV || "false"} ENVA=${process.env.ENVA} ENVB=${
                process.env.ENVB
            } NODE_ENV=${process.env.NODE_ENV} BRWS=${
                process.env.BRWS
            } ./node_modules/.bin/cucumber-js --retry ${
                process.env.RETRY || 3
            } --tags ${process.env.TAGS} --parallel ${
                process.env.PARALLEL
            } -f json:report/report.json`,
        )
        console.log(
            `Gerando XML e junit`,
        )
        await execAsync(
            `cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml`,
        )
        
    } catch (error) {
        console.error(`Erro ao executar o script do Cucumber: \n ${error} \n\n`)
        await execAsync(
            `cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml`,
        )
        
    }
}
const RunTests = async () => {
    console.log("Iniciando Testes...\n")

    switch (true) {
        case env.DESKTOP_ONLY.includes("true") &&
            env.RESPONSIVE_ONLY.includes("false"):
            console.log(`Executando somente Desktop: ${env.BROWSER}\n`)

            await ExecDesktopOnly()

            break

        default:
            break
    }
}

RunTests()
