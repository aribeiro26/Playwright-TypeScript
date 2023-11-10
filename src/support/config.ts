import { LaunchOptions, BrowserContextOptions } from "@playwright/test"
import fs from "fs"
import Env from "./SetEnviroment"
import { Locale } from "../types/ElementsTypes"
/**
 * Define as opções de lançamento do navegador.
 *
 * @type {LaunchOptions}
 */
const browserOptions: LaunchOptions = {
    slowMo: 500,
    headless: Env().headless,
    args: [
        "--disable-web-security",
        "--disable-dev-shm-usage",
        "--disable-features=site-per-process",
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--max_old_space_size=6144"
    ],
}
/**
 * Define o caminho do arquivo de armazenamento a ser usado.
 *
 * @type {{ getStoragepath: string|undefined }}
 */
const storage = {
    getStoragepath: fs.existsSync("playwright/.auth/user.json")
        ? "playwright/.auth/user.json"
        : undefined,
}
/**
 * Define a configuração regional (locale) a ser usada.
 *
 * @type {{ locale: Locale }}
 */
const locale: { locale: Locale } = {
    locale: "pt-BR",
}
/**
 * Retorna as opções para criar um novo contexto de navegador.
 *
 * @returns {BrowserContextOptions}
 */
const getBrowserContextOptions = (): BrowserContextOptions => {
    const storageState = storage.getStoragepath
    return {
        viewport: { width: 1280, height: 900 },
        storageState,
        recordVideo: {
            dir: "videos",
            size: { width: 1280, height: 900 },
        },
        locale: locale.locale,
    }
}
export const visualcompConfig = {
    IMG_THRESHOLD: { threshold: 0.4 },
}

export const config = {
    browserOptions,
    getBrowserContextOptions,
    browserContextOptions: getBrowserContextOptions(),
    visualcompConfig,
}
