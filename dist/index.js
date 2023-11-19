"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetEnv = exports.executions = exports.params = exports.getScriptMultExec = exports.genReporter = exports.getScriptExec = exports.playLighthouse = exports.global = exports.Reporter = exports.TestFunctions = exports.compareToBaseImage = exports.axeCore = exports.CreateDirectory = exports.browserType = exports.browserTypes = exports.GetBrowser = void 0;
var TestFunctions_1 = __importDefault(require("./src/basepage/TestFunctions"));
exports.TestFunctions = TestFunctions_1.default;
var SetEnviroment_1 = __importDefault(require("./src/support/SetEnviroment"));
exports.SetEnv = SetEnviroment_1.default;
var executions_1 = require("./src/jobs/scriptExecutions/executions/executions");
Object.defineProperty(exports, "executions", { enumerable: true, get: function () { return executions_1.executions; } });
var script_1 = require("./src/jobs/scriptExecutions/script");
Object.defineProperty(exports, "getScriptExec", { enumerable: true, get: function () { return script_1.getScriptExec; } });
Object.defineProperty(exports, "genReporter", { enumerable: true, get: function () { return script_1.genReporter; } });
Object.defineProperty(exports, "getScriptMultExec", { enumerable: true, get: function () { return script_1.getScriptMultExec; } });
Object.defineProperty(exports, "params", { enumerable: true, get: function () { return script_1.params; } });
var allure_reporter_1 = require("./src/loaders/allure-report/allure-reporter");
Object.defineProperty(exports, "Reporter", { enumerable: true, get: function () { return allure_reporter_1.Reporter; } });
var globalthis_1 = __importDefault(require("./src/types/globalthis"));
exports.global = globalthis_1.default;
var playLighthouse_1 = require("./src/utils/lighthouse/playLighthouse");
Object.defineProperty(exports, "playLighthouse", { enumerable: true, get: function () { return playLighthouse_1.playLighthouse; } });
var compareImages_1 = require("./src/loaders/compare_images/compareImages");
Object.defineProperty(exports, "compareToBaseImage", { enumerable: true, get: function () { return compareImages_1.compareToBaseImage; } });
var acessibility_1 = __importDefault(require("./src/loaders/axe_core/acessibility"));
exports.axeCore = acessibility_1.default;
var CreateDirectory_1 = __importDefault(require("./src/helpers/create_directory/CreateDirectory"));
exports.CreateDirectory = CreateDirectory_1.default;
var getBrowser_1 = __importStar(require("./src/helpers/getbrowser/getBrowser"));
exports.GetBrowser = getBrowser_1.default;
Object.defineProperty(exports, "browserTypes", { enumerable: true, get: function () { return getBrowser_1.browserTypes; } });
Object.defineProperty(exports, "browserType", { enumerable: true, get: function () { return getBrowser_1.browserType; } });
