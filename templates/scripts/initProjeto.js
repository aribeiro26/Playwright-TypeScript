#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const execSync = require('child_process').execSync;
const readline = require('readline');

function initProject(projectName, templateNumber) {
    const projectPath = path.join(process.cwd(), projectName);
    fs.ensureDirSync(projectPath);

    const templatesPath = path.join(__dirname, `../templates/template${templateNumber}`);
    fs.copySync(templatesPath, projectPath);

    execSync('npm install playwright.typescript.cucumber', { stdio: 'inherit', cwd: projectPath });

    execSync('npx playwright install', { stdio: 'inherit', cwd: projectPath });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, escolha um template (1 para Template 1, 2 para Template 2, etc.): ', (answer) => {
    const projectName = process.argv[2] || 'playwright.typescript.cucumber';
    initProject(projectName, answer);
    rl.close();
});
