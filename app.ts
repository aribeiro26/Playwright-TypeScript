import { executions } from "./src/jobs/scriptExecutions/executions/executions"
import { script } from "./src/jobs/scriptExecutions/script"

const RunTests = async () => {
    console.log("Iniciando Testes...\n")

    switch (true) {
        case script.desktop_only.includes("true") &&
            script.responsive_only.includes("false"):
            process.env.DEVICE = undefined
            console.log(`Executando somente Desktop: ${script.browser}\n`)
            await executions(script.desktop_exec, script.reportGenerate)

            break

        default:
            break
    }
}

RunTests()
