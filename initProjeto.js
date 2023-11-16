const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;

function initProject(projectName) {
    const projectPath = path.join(process.cwd(), projectName);
    fs.ensureDirSync(projectPath);

    // Copiando templates
    const templatesPath = path.join(__dirname, 'templates');
    fs.copySync(templatesPath, projectPath);

    // Instalando o pacote principal
    execSync('npm install @playwright/test', { stdio: 'inherit', cwd: projectPath });
}

const projectName = process.argv[2] || 'playwright.typescript.cucumber';
initProject(projectName);
