interface EnvConfig {
    [key: string]: {
        server?: string;
        headless?: boolean;
        [propName: string]: any;
    };
}


const SetEnvironments = (envConfig: EnvConfig = defaultEnvConfig): any => {
    const nodeEnv = process.env.NODE_ENV || "local";
    
    const selectedEnvConfig = envConfig[nodeEnv] || envConfig['default'] || defaultEnvConfig['default'];
    if (!selectedEnvConfig) {
        throw new Error(`Environment '${nodeEnv}' not defined`);
    }
    
    const envs: { [key: string]: any } = {};
    for (const key in defaultEnvConfig['default']) {
        envs[key] = selectedEnvConfig[key] !== undefined ? selectedEnvConfig[key] : defaultEnvConfig['default'][key];
    }

    return envs;
};
const defaultEnvConfig: EnvConfig = {   
    default: {
        server: "http://google.com.br",
        headless: true,
        
    }
};

export default SetEnvironments;
