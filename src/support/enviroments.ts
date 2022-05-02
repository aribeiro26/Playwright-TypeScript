import { EnvConfig } from '../support/enviroments-model';
import envconfigLocal from '../config/local.json'
import envconfigHml from '../config/hml.json'
import envconfigPrd from '../config/prd.json'

let envconfig: any = global;
export let Env: any = global;

if (process.env.NODE_ENV === 'hml'){
    envconfig = envconfigHml;
}
else if(process.env.NODE_ENV == 'prd'){
    envconfig = envconfigPrd
}
else if(process.env.NODE_ENV == 'local'){
    envconfig = envconfigLocal;
}
else{
    console.log(Error('Enviroments Undefined,Please Check enviroments.ts or package.json execution line'))
}

Env = envconfig as EnvConfig;