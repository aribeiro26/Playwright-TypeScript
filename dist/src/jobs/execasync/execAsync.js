"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execAsync = void 0;
var child_process_1 = require("child_process");
var extractErrorDetails_1 = require("../errors/extractErrorDetails");
function execAsync(command) {
    return new Promise(function (resolve, reject) {
        var _a, _b;
        var child = (0, child_process_1.exec)(command);
        var stdoutData = "";
        var stderrData = "";
        var errorDetails;
        var failedScenarios = [];
        (_a = child.stdout) === null || _a === void 0 ? void 0 : _a.on("data", function (data) {
            var _a;
            stdoutData += data;
            console.log(data);
            if (data.includes("Scenario")) {
                failedScenarios.push("Failures: " + data);
                errorDetails = (0, extractErrorDetails_1.extractErrorDetails)(failedScenarios);
            }
            if (((_a = errorDetails === null || errorDetails === void 0 ? void 0 : errorDetails.errorReason) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                if (errorDetails.errorReason.includes("Timeout")) {
                    console.log("##vso[task.logissue type=warning]  Possível solução", "\n", "##vso[task.logissue type=warning]  https://playwright.com");
                    console.log("##vso[task.complete result=Failed;]DONE", "\n\n");
                }
            }
        });
        (_b = child.stderr) === null || _b === void 0 ? void 0 : _b.on("data", function (data) {
            stderrData += data;
            console.log(stderrData);
        });
        child.on("close", function (code) {
            if (code !== 0) {
                var error = new Error("Erro ao executar o comando: ".concat(command));
                error.code = code;
                error.stdout = stdoutData;
                error.stderr = stderrData;
                reject(error);
            }
            else {
                resolve({ stdout: stdoutData, stderrData: stderrData, failedScenarios: failedScenarios });
            }
        });
    });
}
exports.execAsync = execAsync;
