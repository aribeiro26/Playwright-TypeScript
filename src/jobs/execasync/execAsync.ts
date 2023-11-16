import { exec, ChildProcess } from "child_process"
import { extractErrorDetails } from "../errors/extractErrorDetails"

interface ExecAsyncResult {
    stdout: string
    stderrData: string
    failedScenarios: string[]
}

export function execAsync(command: string): Promise<ExecAsyncResult> {
    return new Promise((resolve, reject) => {
        const child: ChildProcess = exec(command)

        let stdoutData: string = ""
        let stderrData: string = ""
        let errorDetails: any
        let failedScenarios: string[] = []

        child.stdout?.on("data", (data: string) => {
            stdoutData += data
            console.log(data)

            if (data.includes("Scenario")) {
                failedScenarios.push("Failures: " + data)
                errorDetails = extractErrorDetails(failedScenarios)
            }

            if (errorDetails?.errorReason?.length > 0) {
                if (errorDetails.errorReason.includes("Timeout")) {
                    console.log(
                        "##vso[task.logissue type=warning]  Possível solução",
                        "\n",
                        "##vso[task.logissue type=warning]  https://playwright.com"
                    )
                    console.log(
                        "##vso[task.complete result=Failed;]DONE",
                        "\n\n"
                    )
                }
            }
        })

        child.stderr?.on("data", (data: string) => {
            stderrData += data
            console.log(stderrData)
        })

        child.on("close", (code: number) => {
            if (code !== 0) {
                const error: any = new Error(
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
