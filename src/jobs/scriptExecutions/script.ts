export const script = {
    desktop_exec: `DEV=${process.env.DEV || "false"} ENVA=${process.env.ENVA} ENVB=${
        process.env.ENVB
    } NODE_ENV=${process.env.NODE_ENV} BRWS=${
        process.env.BRWS
    } ./node_modules/.bin/cucumber-js --retry ${
        process.env.RETRY || 3
    } --tags ${process.env.TAGS} --parallel ${
        process.env.PARALLEL
    } -f json:report/report.json`,

    reportGenerate: `cat ./report/report.json | npx cucumber-junit > ./report/e2etestsjunitreport.xml`,
    browser:`${process.env.BRWS || "chrome"}`,

    responsive_only: process.env.RESPONSIVE_ONLY || "false",
    desktop_only: process.env.DESKTOP_ONLY || "false",
}
