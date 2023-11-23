// Declare aqui seus modulos de comandos personalizados.
import { testFunctions } from "playwright.typescript.cucumber"
import SetEnv from "./SetEnviroment"
import enviroments from "../config/enviroments/enviroments.json"

export class Commons extends testFunctions {
   
    constructor() {
        super()
       
    }
    public async GoHome() {
        await this.Redirect(SetEnv(enviroments).server, { timeout: 60 })
        await this.ValidateUrl(SetEnv(enviroments).server, { timeout: 60 })
        await this.SetStorage()
    }
}
