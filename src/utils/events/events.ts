import fs from "fs"
import path from "path"

const readEvents = async (): Promise<string> => {
    try {
        const currentPath = process.cwd()
        const pathfile = path.join(currentPath, "temp", "output.txt")
        const content = fs.readFileSync(pathfile, "utf-8")
        return content
    } catch (error) {
        console.error("Ocorreu um erro: ", error)
        return ""
    }
}

interface ParseEventsResult {
    errorReason: string
    logs: string
}

async function parseEvents(output: string): Promise<ParseEventsResult> {
    const logsStartKeyword = "====== logs ======"
    const logsEndKeyword =
        "============================================================"

    const errorIndex = output.indexOf("✖ ")
    const logsStartIndex = output.indexOf(logsStartKeyword)
    const logsEndIndex = output.indexOf(logsEndKeyword, logsStartIndex)
    const errorReason = output.slice(errorIndex + 2, logsStartIndex).trim()
    const logs = output
        .slice(logsStartIndex + logsStartKeyword.length, logsEndIndex)
        .trim()

    if (errorReason && errorReason.includes("Timeout")) {
        console.error(
            "\n\n",
            "##vso[task.logissue type=warning] Causa do Erro",
            "\n",
            "##vso[task.logissue type=warning]" + errorReason
        )
        console.error(
            "\n\n",
            "##vso[task.logissue type=warning] Possível solução",
            "\n",
            "##vso[task.logissue type=warning] https:playwright.com"
        )
    }

    return { errorReason, logs }
}

const executeEvents = async () => {
    const output = await readEvents()

    if (output.length > 0) {
        await parseEvents(output)
    } else {
        console.log("Arquivo vazio", output)
    }
}

executeEvents()
