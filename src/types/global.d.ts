import { Page, Browser, BrowserContext } from "@playwright/test";
import { World } from "@cucumber/cucumber";

declare global {
  var browserName: Browser;
  var page: Page;
  var B: World;
  var browser: Browser;
  var context: BrowserContext;
  var cookies: any;
  
}

export {};
