"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractErrorDetails = void 0;
function extractErrorDetails(output) {
    var logsStartKeyword = "====== logs ======";
    var logsEndKeyword = "============================================================";
    var joinedOutput = output.join("\n");
    var errorIndex = joinedOutput.indexOf("✖ ");
    var logsStartIndex = joinedOutput.indexOf(logsStartKeyword);
    var logsEndIndex = joinedOutput.indexOf(logsEndKeyword, "==============================");
    var errorReason = joinedOutput
        .slice(errorIndex + 2, logsStartIndex)
        .trim();
    var logs = joinedOutput
        .slice(logsStartIndex + logsStartKeyword.length, logsEndIndex)
        .trim();
    console.log("##vso[task.logissue type=error] Motivo do Erro ========= ", "\n", "##vso[task.logissue type = error]" + errorReason, "\n\n", "##vso[task.logissue type=error] Conteúdo do Erro ========= ", "##vso[task.logissue type = error]" + logs, "\n\n");
    return { errorReason: errorReason, logs: logs };
}
exports.extractErrorDetails = extractErrorDetails;
