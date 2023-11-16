
export function extractErrorDetails(output: any) {
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