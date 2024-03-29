import { visualcompConfig } from "../../support/config"
import { ensureFile, pathExists } from "fs-extra"
import pixelmatch from "pixelmatch"
import { PNG } from "pngjs"
import * as fs from "fs"
import { writeFileSync } from "fs"
import { join } from "path"
import { World } from "@cucumber/cucumber"
import * as messages from "@cucumber/messages"

/**
 * Compares a screenshot to a base image,
 * if the base image doesn't exist it fails the test but creates a new base image based on
 * the screenshot passed so it can be used on the next run.
 * @param screenshot a playwright screenshot
 * @param customWorld needed to create the base image path
 * @param threshold the difference threshold
 */

interface ImagePathOptions {
    skipOs: boolean
}
export interface ICustomWorld extends World {
    debug: boolean
    feature?: messages.Pickle
    testName?: string
    startTime?: Date
}
export function getImagePath(
    customWorld: ICustomWorld,
    name: string,
    options?: ImagePathOptions
): string {
    return join(
        "report/screenshots",
        customWorld.feature?.uri || "",
        options?.skipOs ? "" : process.platform,
        process.env.BRWS || "chrome",
        `${name}.png`
    )
}
export async function compareToBaseImage(
    customWorld: ICustomWorld,
    name: string,
    screenshot: Buffer,
    threshold?: { threshold: number }
) {
    let baseImage
    const baseImagePath = getImagePath(customWorld, name)
    const baseImgExist = await pathExists(baseImagePath)
    if (baseImgExist) {
        baseImage = PNG.sync.read(fs.readFileSync(baseImagePath))
    } else {
        await ensureFile(baseImagePath)
        writeFileSync(baseImagePath, screenshot)
        customWorld.log(
            `The base Image doesn't exist, a screenshot was taken to ${baseImagePath} so it can be used for next run`
        )
        return
    }
    const img1 = PNG.sync.read(screenshot)
    const difference = getDifference(name,img1, baseImage, threshold)
    if (difference) {
        await customWorld.attach(difference, "image/png;base64")
        throw new Error(`Screenshot does not match : ${baseImagePath}`)
    }
}

/**
 * Returns the difference between 2 images
 * @param img1
 * @param img2
 * @param threshold the difference threshold
 */
export function getDifference(
    name: string,
    img1: PNG,
    img2: PNG,
    threshold = visualcompConfig.IMG_THRESHOLD
): Buffer | undefined {
    const { width, height } = img2
    const diff = new PNG({ width, height })
    const difference = pixelmatch(
        img1.data,
        img2.data,
        diff.data,
        width,
        height,
        threshold
    )
    if (difference > 0) {
        writeFileSync(
            `report/screenshots/${process.platform}/${
                process.env.BRWS || "chrome"
            }/${name}_diff.png`,
            PNG.sync.write(diff)
        )
        return PNG.sync.write(diff)
    }
    return undefined
}
