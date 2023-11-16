import { BrowserType } from "@playwright/test";
type browsertypes = {
    chrome: BrowserType;
    firefox: BrowserType;
    safari: BrowserType;
};
export declare const browserTypes: browsertypes;
export declare const browserType: string;
export default function getBrowser(): Promise<void>;
export {};
