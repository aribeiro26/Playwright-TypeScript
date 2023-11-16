import enviroments from "../config/enviroments/enviroments.json"
interface EnvConfig {
    [key: string]: {
        server: string
        headless: boolean
        envA?: string
        envB?: string
    }
}
const environments: EnvConfig = {
    hml: enviroments.hml,
    local: enviroments.local,
}
const dev = {
    Node_Env: process.env.NODE_ENV || "hml",
    dev: process.env.DEV?.includes("true"),
}
const SelectEnv =
    dev.dev || ["hml"].includes(dev.Node_Env)
        ? dev.Node_Env
        : (dev.Node_Env = "local")
const Environments = {
    setEnv: function () {
        if (environments.hasOwnProperty(SelectEnv)) {
            return environments[SelectEnv]
        } else {
            throw new Error(`Environment '${SelectEnv}' not defined`)
        }
    },
}
export interface IEnv {
    server: string
    headless: boolean
    envA: string
    envB: string
}
const SetEnviroments = (): IEnv => {
    const Envs = {
        server:
            Environments.setEnv().server || process.env.url || typeof undefined,
        headless:
            dev.dev === true
                ? (Environments.setEnv().headless = false)
                : Environments.setEnv().headless || true,

        envA:
            Environments.setEnv().envA ||
            process.env.ENVA ||
            process.env.envA ||
            typeof undefined,
        envB:
            Environments.setEnv().envB ||
            process.env.ENVB ||
            process.env.envB ||
            typeof undefined,
    }
    return Envs
}
export default SetEnviroments
