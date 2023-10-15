const readEvents = async () => {
    const fs = require("fs")
    const path = require("path")
    try {
        const currentPath = process.cwd()

        const pathfile = path.join(currentPath, "temp", "output.txt")
        const content = fs.readFileSync(pathfile, "utf-8")

        return content
    } catch (error) {
        console.error("Ocorreu um erro: ", error)
    }
}
async function parseEvents(output) {
    const logsStartKeyword = "====== logs ======"
    const logsEndKeyword =
        "============================================================"

    const events = output

    const errorIndex = events.indexOf("✖ ")
    const logsStartIndex = events.indexOf(logsStartKeyword)
    const logsEndIndex = events.indexOf(
        logsEndKeyword,
        "=========  ====================="
    )
    const errorReason = events.slice(errorIndex + 2, logsStartIndex).trim()
    const logs = events
        .slice(logsStartIndex + logsStartKeyword.length, logsEndIndex)
        .trim()

    if (errorReason?.length > 0) {
        if (errorReason?.includes("Timeout")) {
            console.error(
                "\n\n",
                "##vso[task.logissue type=warning]  Causa do Erro",
                "\n",
                "##vso[task.logissue type=warning]" + errorReason
            )

            console.error(
                "\n\n",
                "##vso[task.logissue type=warning]  Possível solução",
                "\n",
                "##vso[task.logissue type=warning]  https:playwright.com"
            )
        }
    }

    return { errorReason, logs }
}
const ExecuteEvents = async () => {
    const output = await readEvents()

    if (output.length > 0) {
        await parseEvents(output)
    } else {
        console.log("file empty", output)
    }
}
ExecuteEvents()
