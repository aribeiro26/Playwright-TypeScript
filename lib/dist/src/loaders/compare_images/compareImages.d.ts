/// <reference types="node" />
import { PNG } from "pngjs";
import { World } from "@cucumber/cucumber";
import * as messages from "@cucumber/messages";
/**
 * Compares a screenshot to a base image,
 * if the base image doesn't exist it fails the test but creates a new base image based on
 * the screenshot passed so it can be used on the next run.
 * @param screenshot a playwright screenshot
 * @param customWorld needed to create the base image path
 * @param threshold the difference threshold
 */
interface ImagePathOptions {
    skipOs: boolean;
}
export interface ICustomWorld extends World {
    debug: boolean;
    feature?: messages.Pickle;
    testName?: string;
    startTime?: Date;
}
export declare function getImagePath(customWorld: ICustomWorld, name: string, options?: ImagePathOptions): string;
export declare function compareToBaseImage(customWorld: ICustomWorld, name: string, screenshot: Buffer, threshold?: {
    threshold: number;
}): Promise<void>;
/**
 * Returns the difference between 2 images
 * @param img1
 * @param img2
 * @param threshold the difference threshold
 */
export declare function getDifference(name: string, img1: PNG, img2: PNG, threshold?: {
    threshold: number;
}): Buffer | undefined;
export {};
