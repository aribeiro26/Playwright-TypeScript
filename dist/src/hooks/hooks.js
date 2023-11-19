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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globalthis_1 = __importDefault(require("../types/globalthis"));
var fs_1 = __importDefault(require("fs"));
var util_1 = require("util");
var fs_2 = require("fs");
var path = require("path");
var cucumber_1 = require("@cucumber/cucumber");
var dotenv = require("dotenv");
var CreateDirectory_1 = __importDefault(require("../helpers/create_directory/CreateDirectory"));
var getBrowser_1 = __importStar(require("../helpers/getbrowser/getBrowser"));
var execSync = require("child_process").execSync;
dotenv.config();
(0, cucumber_1.setDefaultTimeout)(60 * 10000);
/**
 * Executa ações antes de todos os testes.
 * Este before trata da criacao do diretorio de report para nao falhar testes, e tabem inicia as instancias do browser, one é definido em GetBrowser, estes valores sao recebido via params do package.json ou via pipeline.
 *
 * @returns {Promise<void>}
 */
(0, cucumber_1.BeforeAll)(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, CreateDirectory_1.default)("report")];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, getBrowser_1.default)()];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
/**
 * Executa ações antes de um teste especificado.
 *
 * @param {{ tags: string }} options - Opções para o hook.
 * @returns {Promise<any>}
 */
(0, cucumber_1.Before)({ tags: "@ignore" }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, "skipped"];
        });
    });
});
/**
 * Executa ações antes de um teste especificado.
 * Este before trata na parte de verificar sobre se ja existe imagens,c aso ja exista ele deleta, utilizamos por conta do retry cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
(0, cucumber_1.Before)(function (scenario) {
    return __awaiter(this, void 0, void 0, function () {
        var imagePath;
        return __generator(this, function (_a) {
            imagePath = "test-results/".concat(scenario.pickle.name, ".png");
            if (fs_1.default.existsSync(imagePath)) {
                fs_1.default.unlinkSync(imagePath);
            }
            return [2 /*return*/];
        });
    });
});
/**
 * Executa ações após cada etapa de um teste especificado.
 * Este after exclusivamente trata sobre os screenshots, onde sao adicionadas ao report cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
(0, cucumber_1.AfterStep)(function (scenario) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var image, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!(((_a = scenario.result) === null || _a === void 0 ? void 0 : _a.status) === cucumber_1.Status.FAILED ||
                        ((_b = scenario.result) === null || _b === void 0 ? void 0 : _b.status) === cucumber_1.Status.PASSED)) return [3 /*break*/, 5];
                    return [4 /*yield*/, globalthis_1.default.page.waitForTimeout(2000)];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, globalthis_1.default.page.screenshot({
                            path: "test-results/".concat(scenario.pickle.name, ".png"),
                            fullPage: true,
                            timeout: 480000,
                            scale: "css",
                        })];
                case 2:
                    image = _d.sent();
                    _c = image;
                    if (!_c) return [3 /*break*/, 4];
                    return [4 /*yield*/, this.attach(image, "image/png")];
                case 3:
                    _c = (_d.sent());
                    _d.label = 4;
                case 4:
                    _c;
                    _d.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
});
/**
 *
 * Executa ações após um teste especificado.
 * Este after exclusivamente trata sobre os videos, onde sao adicionadas ao report cucumber.
 *
 * @param {World} this - O objeto World.
 * @param {ITestCaseHookParameter} scenario - O objeto ITestCaseHookParameter.
 * @returns {Promise<void>}
 */
(0, cucumber_1.After)(function (scenario) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var video, videoPath, videoBuffer, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (!(((_a = scenario.result) === null || _a === void 0 ? void 0 : _a.status) === cucumber_1.Status.FAILED ||
                        ((_b = scenario.result) === null || _b === void 0 ? void 0 : _b.status) === cucumber_1.Status.PASSED)) return [3 /*break*/, 6];
                    return [4 /*yield*/, globalthis_1.default.page.video()];
                case 1:
                    video = _e.sent();
                    return [4 /*yield*/, ((_c = globalthis_1.default.page.video()) === null || _c === void 0 ? void 0 : _c.path())];
                case 2:
                    videoPath = _e.sent();
                    if (!videoPath) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, util_1.promisify)(fs_2.readFile)(videoPath)];
                case 3:
                    videoBuffer = _e.sent();
                    _d = video;
                    if (!_d) return [3 /*break*/, 5];
                    return [4 /*yield*/, this.attach(videoBuffer, "video/webm")];
                case 4:
                    _d = (_e.sent());
                    _e.label = 5;
                case 5:
                    _d;
                    _e.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    });
});
("");
var executeEvent = function () { return __awaiter(void 0, void 0, void 0, function () {
    var currentPath, pathfile, events;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentPath = process.cwd();
                pathfile = path.join(currentPath, "temp", "output.txt");
                events = fs_1.default.readFileSync(pathfile, "utf-8");
                if (!(events === null || events === void 0 ? void 0 : events.includes("Timeout"))) return [3 /*break*/, 2];
                return [4 /*yield*/, execSync("node src/utils/events.js")];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [2 /*return*/];
        }
    });
}); };
(0, cucumber_1.AfterAll)(function () { return __awaiter(void 0, void 0, void 0, function () {
    var currentPath, pathfile;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                currentPath = process.cwd();
                pathfile = path.join(currentPath, "temp", "output.txt");
                if (!!getBrowser_1.browserTypes[getBrowser_1.browserType]) return [3 /*break*/, 5];
                return [4 /*yield*/, globalthis_1.default.browser.close()];
            case 1:
                _a.sent();
                return [4 /*yield*/, globalthis_1.default.page.close()];
            case 2:
                _a.sent();
                if (!fs_1.default.existsSync(pathfile)) return [3 /*break*/, 4];
                return [4 /*yield*/, executeEvent()];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [3 /*break*/, 10];
            case 5: return [4 /*yield*/, globalthis_1.default.page.close()];
            case 6:
                _a.sent();
                return [4 /*yield*/, globalthis_1.default.context.close()];
            case 7:
                _a.sent();
                return [4 /*yield*/, globalthis_1.default.browser.close()];
            case 8:
                _a.sent();
                if (!fs_1.default.existsSync(pathfile)) return [3 /*break*/, 10];
                return [4 /*yield*/, executeEvent()];
            case 9:
                _a.sent();
                _a.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); });
