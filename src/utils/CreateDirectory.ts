import fs from "fs"
import path from "path"
 
const CreateDirectory = async (dirname: string) => {
    if (!fs.existsSync(path.resolve(dirname))) {
        fs.mkdirSync(dirname)
        // for (let i = 1; i <= 2; i++) {
        //     fs.writeFileSync(path.resolve(dirname, `report${i}.json`), '');
        // }
    }
}
export default CreateDirectory