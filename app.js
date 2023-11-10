const { exec } = require ("child_process");

function extractErrorDetails(output) {
    const logsStartKeyword = "====== logs ======"
    const logsEndKeyword =
        "============================================================"

    const joinedOutput = output.join("\n")

    const errorIndex = joinedOutput.indexOf("✖ ")
    const logsStartIndex = joinedOutput.indexOf(logsStartKeyword)
    const logsEndIndex = joinedOutput.indexOf(
        logsEndKeyword,
        "=============================="
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
        "\n\n"
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
                        "##vso[task.logissue type=warning]  https:playwright.com"
                    )
                    console.log(
                        "##vso[task.complete result=Failed;]DONE",
                        "\n\n"
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
                    `Erro ao executar o comando: ${command}`
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

const Executions = {
    CreateDirectory: `./node_modules/.bin/ts-node src/utils/CreateDirectory.ts`,
    Desktop: {
        MultiExec: {
            DesktopExec: `DEV=${process.env.DEV || "false"} ENVA='${
                process.env.ENVA
            }' ENVB='${process.env.ENVB}' NODE_ENV=${
                process.env.NODE_ENV
            } BRWS='${
                process.env.BRWS
            }' ./node_modules/.bin/cucumber-js --retry ${
                process.env.RETRY || "3"
            } --tags '${process.env.TAGS}' --parallel ${
                process.env.PARALLEL
            } -f json:report/report1.json`,

            Desktopreport: `cat ./report/report1.json | npx cucumber-junit > ./report/e2etestsjunitreport1.xml`,
            DesktopGeneratereport: `node src/utils/ReportOptions/Desktop/reportDesktop.js`,
        },

        Only: {
            DesktopExecOnly: `DEV=${process.env.DEV || "false"} ENVA=${
                process.env.ENVA
            } ENVB=${process.env.ENVB} NODE_ENV=${process.env.NODE_ENV} BRWS=${
                process.env.BRWS
            } ./node_modules/.bin/cucumber-js --retry ${
                process.env.RETRY || 3
            } --tags ${process.env.TAGS} --parallel ${
                process.env.PARALLEL
            } -f json:report/report.json`,

            DesktopreportOnly: `cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml`,

            DesktopGeneratereportOnly: `node src/utils/ReportOptions/Desktop/reportDesktopOnly.js`,
        },
    },
    Mobile: {
        MultiExec: {
            MobileExec: `DEV=${process.env.DEV || "false"} ENVA=${
                process.env.ENVA
            } ENVB=${process.env.ENVB} NODE_ENV=${
                process.env.NODE_ENV
            } DEVICE='${
                process.env.DEVICE
            }' ./node_modules/.bin/cucumber-js --retry ${
                process.env.RETRY || "3"
            } --tags ${process.env.TAGS} --parallel ${
                process.env.PARALLEL
            } -f json:report/report2.json`,

            Mobilereport: `cat ./report/report2.json | npx cucumber-junit > ./report/junitreport2.xml`,
            MobileGeneratereport: `node src/utils/ReportOptions/Responsive/reportResponsive.js`,
        },
        Only: {
            MobileExecOnly: `DEV=${process.env.DEV || "false"} ENVA=${
                process.env.ENVA
            } ENVB=${process.env.ENVB} NODE_ENV=${
                process.env.NODE_ENV
            } DEVICE='${
                process.env.DEVICE
            }' ./node_modules/.bin/cucumber-js --retry ${
                process.env.RETRY || "3"
            } --tags ${process.env.TAGS} --parallel ${
                process.env.PARALLEL
            } -f json:report/report.json`,

            MobilereportOnly: `cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml`,
            MobileGeneratereportOnly: `node src/utils/ReportOptions/Responsive/reportResponsiveOnly.js`,
        },
    },
    MergeReports: {
        Mergereport:
            "cat report/report.json | npx cucumber-junit > report/e2etestsjunitreport.xml",
        MergeGeneratereport:
            "node src/utils/ReportOptions/MergeReport/reportMerger.js",
    },
}
const Enviroments = {
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
        await execAsync(Executions.Desktop.Only.DesktopExecOnly)

        await execAsync(Executions.Desktop.Only.DesktopreportOnly)
        console.log(
            `Script gerar report.json e junit.xml executado com sucesso`
        )
        await execAsync(Executions.Desktop.Only.DesktopGeneratereportOnly)
        console.log(`Script reportDesktopOnly.js executado com sucesso`)
    } catch (error) {
        console.error(`Erro ao executar o script do Cucumber: \n ${error} \n\n`)
    } finally {
        await execAsync(Executions.Desktop.Only.DesktopGeneratereportOnly)
    }
}
const ResponsiveOnly = async () => {
    const ChildB = exec(
        Executions.Mobile.Only.MobileExecOnly,
        (error, stdout, stderr) => {
            if (error) {
                console.error(
                    `Erro ao executar o Script de MobileOnly: ${error}`
                )
                return
            }
            console.log(`Script MobileOnly executado com sucesso: ${stdout}`)
        }
    )
    ChildB.on("exit", async () => {
        const ChildB1 = exec(
            Executions.Mobile.Only.MobilereportOnly,
            (error, stdout, stderr) => {
                if (error) {
                    console.error(
                        `Erro ao executar o Script de report.json: ${error}`
                    )
                    return
                }
                console.log(
                    `Script gerar report.json e junit.xml executado com sucesso: ${stdout}`
                )
            }
        )
        ChildB1.on("exit", async () => {
            exec(
                Executions.Mobile.Only.MobileGeneratereportOnly,
                (error, stdout, stderr) => {
                    if (error) {
                        console.error(
                            `Erro ao executar o Script reportMobileOnly.js: ${error}`
                        )
                        return
                    }
                    console.log(
                        `Script reportMobileOnly.js executado com sucesso: ${stdout}`
                    )
                }
            )
        })
    })
}
async function MergeReport() {
    process.env.DEVICE = undefined

    const ChildC = exec(
        Executions.Desktop.MultiExec.DesktopExec,
        (error, stdout, stderr) => {
            if (error) {
                console.error(
                    `Erro ao executar o Script de DesktopOnly: ${error}`
                )
                return
            }
            console.log(`Script DesktopOnly executado com sucesso: ${stdout}`)
        }
    )
    ChildC.on("exit", async () => {
        const ChildC1 = exec(
            Executions.Desktop.MultiExec.Desktopreport,
            (error, stdout, stderr) => {
                if (error) {
                    console.error(
                        `Erro ao executar o Script de report.json: ${error}`
                    )
                    return
                }
                console.log(
                    `Script gerar report.json e junit.xml executado com sucesso: ${stdout}`
                )
            }
        )
        ChildC1.on("exit", async () => {
            const ChildC2 = exec(
                Executions.Desktop.MultiExec.DesktopGeneratereport,
                (error, stdout, stderr) => {
                    if (error) {
                        console.error(
                            `Erro ao executar o Script reportDesktopOnly.js: ${error}`
                        )
                        return
                    }
                    console.log(
                        `Script reportDesktopOnly.js executado com sucesso: ${stdout}`
                    )
                }
            )

            ChildC2.on("exit", async () => {
                const ChildD = exec(
                    Executions.Mobile.MultiExec.MobileExec,
                    (error, stdout, stderr) => {
                        if (error) {
                            console.error(
                                `Erro ao executar o Script de MobileMulti: ${error}`
                            )
                            return
                        }
                        console.log(
                            `Script MobileMulti executado com sucesso: ${stdout}`
                        )
                    }
                )

                ChildD.on("exit", async () => {
                    const ChildD1 = exec(
                        Executions.Mobile.MultiExec.Mobilereport,
                        (error, stdout, stderr) => {
                            if (error) {
                                console.error(
                                    `Erro ao executar o Script de report.json: ${error}`
                                )
                                return
                            }
                            console.log(
                                `Script gerar report.json e junit.xml executado com sucesso: ${stdout}`
                            )
                        }
                    )
                    ChildD1.on("exit", async () => {
                        const ChildD2 = exec(
                            Executions.Mobile.MultiExec.MobileGeneratereport,
                            (error, stdout, stderr) => {
                                if (error) {
                                    console.error(
                                        `Erro ao executar o Script reportMobileOnly.js: ${error}`
                                    )
                                    return
                                }
                                console.log(
                                    `Script reportMobileOnly.js executado com sucesso: ${stdout}`
                                )
                            }
                        )

                        ChildD2.on("exit", async () => {
                            const ChildD3 = exec(
                                Executions.MergeReports.MergeGeneratereport,
                                (error, stdout, stderr) => {
                                    if (error) {
                                        console.error(
                                            `Erro ao executar o comando Merger: ${error}`
                                        )
                                        return
                                    }
                                    console.log(
                                        `Comando Merger executado com sucesso: ${stdout}`
                                    )
                                }
                            )
                            ChildD3.on("exit", async () => {
                                exec(
                                    Executions.MergeReports.Mergereport,
                                    (error, stdout, stderr) => {
                                        if (error) {
                                            console.error(
                                                `Erro ao executar o comando Merger: ${error}`
                                            )
                                            return
                                        }
                                        console.log(
                                            `Comando Merger executado com sucesso: ${stdout}`
                                        )
                                    }
                                )
                            })
                        })
                    })
                })
            })
        })
    })
}

const RunTests = async () => {
    
    console.log("Iniciando Testes...\n")

    if (
        Enviroments.DESKTOP_ONLY.includes("true") &&
        Enviroments.RESPONSIVE_ONLY.includes("false")
    ) {
        console.log(`Executando somente Desktop: ${Enviroments.BROWSER}\n`)
        await ExecDesktopOnly()
    } else if (
        Enviroments.DESKTOP_ONLY.includes("false") &&
        Enviroments.RESPONSIVE_ONLY.includes("true")
    ) {
        console.log(`Executando somente Mobile: ${Enviroments.DEVICE}\n`)
        await ResponsiveOnly()
    } else {
        console.log(
            `Executando Desktop: ${Enviroments.BROWSER} E Mobile: ${Enviroments.DEVICE}\n`
        )
        await MergeReport()
    }
}

RunTests()
