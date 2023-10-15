const dotenv = require("dotenv")
const loadEnvFile = async () => {
    try {
        return dotenv.config()
    } catch (e) {
        console.log(
            "LoadEnvFile - não iniciado, Favor Verificar - caminho -> utils -> loadEnvFile.js"
        )
    }
}
module.exports = {
    loadEnvFile,
}
