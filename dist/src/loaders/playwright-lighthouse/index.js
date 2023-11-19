"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playAudit = void 0;
/**
 * @description
 * Performs lighthouse audit based on the testcafe lighthouse configuration
 *
 * @example
 *
 * import { playAudit } from 'playwright-lighthouse';
 *
 * test('user page performance with specific thresholds', async () => {
 *      await playAudit({
 *              page:Page,
 *              thresholds: {
 *                  performance: 50,
 *                  accessibility: 50,
 *                  'best-practices': 50,
 *                  seo: 50,
 *                  pwa: 50,
 *               },
 *              port: 9222
 *      });
 * });
 *
 */
function playAudit(playwrightLHConfiguration) {
    return playwrightLHConfiguration;
}
exports.playAudit = playAudit;
