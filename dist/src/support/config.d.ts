import { LaunchOptions, BrowserContextOptions } from "@playwright/test";
export declare const visualcompConfig: {
    IMG_THRESHOLD: {
        threshold: number;
    };
};
export declare const config: {
    browserOptions: LaunchOptions;
    getBrowserContextOptions: () => BrowserContextOptions;
    browserContextOptions: BrowserContextOptions;
    visualcompConfig: {
        IMG_THRESHOLD: {
            threshold: number;
        };
    };
};
