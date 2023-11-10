export default async function playLighthouse(url: string) {
    const chromeLauncher = await import("chrome-launcher");
    const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });

    const options = {
        logLevel: "info" as const,
        output: "html" as const,
        onlyCategories: ["performance", "accessibility", "best-practices", "seo", "pwa"],
        port: chrome.port,
    };

    try {
        const lighthouse = await import("lighthouse");
        const runnerResult = await lighthouse.default(url, options);

        if (runnerResult && runnerResult.report) {
            const fsPromises = await import('fs/promises');
            await fsPromises.writeFile("report/lighthouse/lhreport.html", runnerResult.report);

            console.log("Report is done for", runnerResult.lhr.finalDisplayedUrl);
            if (runnerResult.lhr.categories.performance && runnerResult.lhr.categories.performance.score !== null) {
                console.log("Performance score was", runnerResult.lhr.categories.performance.score * 100);
            }
        }
    } catch (error) {
        console.error("There was an error running Lighthouse:", error);
    } finally {
        await chrome.kill();
    }
}
