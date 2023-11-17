import { platform } from "os"

const isMobile =
    (process.env.RESPONSIVE_ONLY || "false").toLowerCase() === "true"
const isDesktop = (process.env.DESKTOP_ONLY || "false").toLowerCase() === "true"
const isWindows = platform() === "win32"
const pathSeparator = isWindows ? "\\" : "/"

const getNameReport = () =>
    isMobile && isDesktop ? "report1.json" : "report.json"

const createScriptBase = (isMobile: boolean) => {
    const devicePart = isMobile ? `DEVICE=${process.env.DEVICE}` : ""
    return `DEV=${process.env.DEV || "false"} ENVA=${process.env.ENVA} ENVB=${
        process.env.ENVB
    } NODE_ENV=${process.env.NODE_ENV} BRWS=${process.env.BRWS} ${devicePart}`
}

const createCucumberScript = (reportName: string, isMobile = false) => {
    const scriptBase = createScriptBase(isMobile)
    return `${scriptBase} .${pathSeparator}node_modules${pathSeparator}.bin${pathSeparator}cucumber-js --retry ${
        process.env.RETRY || 3
    } --tags ${process.env.TAGS} --parallel ${
        process.env.PARALLEL
    } -f json:report${pathSeparator}${reportName}`
}

export const getScriptExec = (): string => {
    if (!isMobile && isDesktop) {
        return createCucumberScript(getNameReport())
    } else if (isMobile && !isDesktop) {
        return createCucumberScript(getNameReport(), true)
    }
    return "Parâmetros incorretos"
}

export const getScriptMultExec = () => ({
    desktop: createCucumberScript("report.json"),
    mobile: createCucumberScript("report2.json", true),
})

export const genReporter = () =>
    `cat .${pathSeparator}report${pathSeparator}report.json | npx cucumber-junit > .${pathSeparator}report${pathSeparator}e2etestsjunitreport.xml`

export const params = {
    isMobile: process.env.RESPONSIVE_ONLY || "false",
    isDesktop: process.env.DESKTOP_ONLY || "false",
    browser: process.env.BRWS || "chrome",
}
