import { executions } from "./src/jobs/scriptExecutions/executions/executions"
import {
    getScriptExec,
    genReporter,
    getScriptMultExec,
    params,
} from "./src/jobs/scriptExecutions/script"

const configureEnvironment = () => {
    if (params.isDesktop.includes("true") && params.isMobile.includes("true")) {
        console.log("Executando em ambos: Desktop e Mobile.\n")
        return "both"
    } else if (params.isDesktop.includes("true")) {
        process.env.DEVICE = undefined
        console.log(`Executando somente Desktop: ${params.browser}\n`)
        return "desktop"
    } else if (params.isMobile.includes("true")) {
        console.log("Executando somente Mobile.\n")
        return "mobile"
    }

    return null
}

const executeTests = async (config: string) => {
    if (config === "both") {
        await executions(getScriptMultExec().desktop, genReporter())
        await executions(getScriptMultExec().mobile, genReporter())
    } else {       
        await executions(getScriptExec(), genReporter())
    }
}

const runTests = async () => {
    console.log("Iniciando Testes...\n")

    try {
        const config = configureEnvironment()
        if (config) {
            await executeTests(config)
        } else {
            console.log("Nenhuma configuração de ambiente válida encontrada.")
        }
    } catch (error) {
        console.error("Erro na execução do script:", error)
    }
}

runTests()
