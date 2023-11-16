import { execAsync } from "../../execasync/execAsync"

export const executions = async (scriptExec: string, scriptReport: string) => {
    try {
        await execAsync(scriptExec)
        console.log(`Gerando XML e junit`)
        await execAsync(scriptReport)
    } catch (error) {
        console.error(`Erro ao executar o script de teste: \n ${error} \n\n`)
        await execAsync(scriptReport)
    }
}
