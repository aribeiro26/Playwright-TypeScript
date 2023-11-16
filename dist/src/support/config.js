"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.visualcompConfig = void 0;
var fs_1 = __importDefault(require("fs"));
var SetEnviroment_1 = __importDefault(require("./SetEnviroment"));
/**
 * Define as opções de lançamento do navegador.
 *
 * @type {LaunchOptions}
 */
var browserOptions = {
    slowMo: 500,
    headless: (0, SetEnviroment_1.default)().headless,
    args: [
        "--disable-web-security",
        "--disable-dev-shm-usage",
        "--disable-features=site-per-process",
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--max_old_space_size=6144"
    ],
};
/**
 * Define o caminho do arquivo de armazenamento a ser usado.
 *
 * @type {{ getStoragepath: string|undefined }}
 */
var storage = {
    getStoragepath: fs_1.default.existsSync("playwright/.auth/user.json")
        ? "playwright/.auth/user.json"
        : undefined,
};
/**
 * Define a configuração regional (locale) a ser usada.
 *
 * @type {{ locale: Locale }}
 */
var locale = {
    locale: "pt-BR",
};
/**
 * Retorna as opções para criar um novo contexto de navegador.
 *
 * @returns {BrowserContextOptions}
 */
var getBrowserContextOptions = function () {
    var storageState = storage.getStoragepath;
    return {
        viewport: { width: 1280, height: 900 },
        storageState: storageState,
        recordVideo: {
            dir: "videos",
            size: { width: 1280, height: 900 },
        },
        locale: locale.locale,
    };
};
exports.visualcompConfig = {
    IMG_THRESHOLD: { threshold: 0.4 },
};
exports.config = {
    browserOptions: browserOptions,
    getBrowserContextOptions: getBrowserContextOptions,
    browserContextOptions: getBrowserContextOptions(),
    visualcompConfig: exports.visualcompConfig
};
