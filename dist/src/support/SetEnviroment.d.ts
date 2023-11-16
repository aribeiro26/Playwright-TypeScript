export interface IEnv {
    server: string;
    headless: boolean;
    envA: string;
    envB: string;
}
declare const SetEnviroments: () => IEnv;
export default SetEnviroments;
