const fs = require('fs');
const path = require('path');
const libReport = require('istanbul-lib-report');
const reports = require('istanbul-reports');

// Caminho para o arquivo de cobertura
const coverageFilePath = path.resolve(__dirname, 'coverage.json');

// Ler os dados de cobertura do arquivo
const coverageData = JSON.parse(fs.readFileSync(coverageFilePath, 'utf8'));

// Caminho para o diretório de relatórios
const reportDir = path.resolve(__dirname, 'coverage');

// Criar um contexto de relatório
const context = libReport.createContext({
    dir: reportDir,
    coverageMap: coverageData,
});

// Criar um relatório HTML
const htmlReporter = reports.create('html', {
    skipEmpty: false,
    skipFull: false,
});

htmlReporter.execute(context);

console.log(`Relatório gerado em: ${reportDir}`);
