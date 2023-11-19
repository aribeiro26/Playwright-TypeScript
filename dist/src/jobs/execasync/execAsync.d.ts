interface ExecAsyncResult {
    stdout: string;
    stderrData: string;
    failedScenarios: string[];
}
export declare function execAsync(command: string): Promise<ExecAsyncResult>;
export {};
