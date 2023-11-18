interface EnvConfig {
    [key: string]: {
        server?: string;
        headless?: boolean;
        [additionalProp: string]: any;
    };
}

const SetEnvironments = (envConfig: EnvConfig): any => {
    const nodeEnv = process.env.NODE_ENV || "local";
    const isDev = process.env.DEV?.includes("true");

    const selectedEnvConfig = envConfig[nodeEnv];
    if (!selectedEnvConfig) {
        throw new Error(`Environment '${nodeEnv}' not defined`);
    }

    const envs = {
        server: selectedEnvConfig.server || process.env.SERVER || "defaultServer",
        headless: isDev ? false : selectedEnvConfig.headless || true,
    };

    for (const key in selectedEnvConfig) {
        if (selectedEnvConfig.hasOwnProperty(key)) {
            envs[key] = selectedEnvConfig[key] || process.env[key.toUpperCase()];
        }
    }

    return envs;
};

export default SetEnvironments;
