const common = `
--require src/hooks/hooks.ts
--require src/steps/**/*.ts
--require-module ts-node/register
--require src**/*.ts
--format json:report/report.json
--format message:report/report.ndjson
--format html:report/report.html
--format summary
--format progress-bar
--format @cucumber/pretty-formatter

`;

module.exports = {
    default: `${common} src/features/**/*.feature`,
};
