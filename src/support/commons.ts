// Declare aqui seus modulos de comandos personalizados.
import TestFunctions from "../basepage/testFunctions"
import global from "../types/globalthis"
import SetEnv, { IEnv } from "./SetEnviroment"

export class Commons extends TestFunctions {
    private _env: IEnv
    constructor() {
        super()
        this._env = SetEnv()
    }
    public async GoHome() {
        console.log(this._env.server)
        await this.Redirect(this._env.server, { timeout: 60 })
        await this.ValidateUrl(this._env.server, { timeout: 60 })
        await this.SetStorage()
    }
}
