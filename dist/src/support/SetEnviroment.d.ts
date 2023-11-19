interface EnvConfig {
    [key: string]: {
        server?: string;
        headless?: boolean;
        [propName: string]: any;
    };
}
declare const SetEnvironments: (envConfig?: EnvConfig) => any;
export default SetEnvironments;
