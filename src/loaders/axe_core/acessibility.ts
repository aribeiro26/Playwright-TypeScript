import { expect, Page } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"
import fs from "fs"

export default async function axeCore(page: Page, url: string) {
    await page.goto(url, { timeout: 800000 })

    const acessibilityScanResults = await new AxeBuilder({ page }).analyze()

    fs.writeFileSync(
        "report/acessibilidade/acessibilidade_report.json",
        JSON.stringify(acessibilityScanResults.violations, null, 2)
    )

    assertAcessibility(acessibilityScanResults.violations)
}
const assertAcessibility = (violations: any) => {
    if (violations.lenght) {
        let errorMessage = "Encontradas violação de acessibilidade:\n\n"

        violations.forEach((violation: any, index: number) => {
            errorMessage += `# Violação ${index + 1} Descrção: ${
                violation.description
            }:\n`

            errorMessage += `# Impacto: ${violation.impact}\n`
            errorMessage += `# Elementos afetados: ${violation.nodes
                .map((node: { target: any }) => node.target)
                .join(",")}\n`

            var occurences = violation.nodes
            occurences.forEach(
                (occurence: { failureSumary: any; html: any }) => {
                    errorMessage += `## Ocorrência:\n\n`
                    errorMessage += `## Resumo da falha: ${occurence.failureSumary}\n`
                    errorMessage += `## Resumo da falha html: ${occurence.html}\n`
                    errorMessage += `\n`
                }
            )
        })

        throw new Error(errorMessage)
    }
}
