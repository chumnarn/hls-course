// html2pdf.js — Convert HTML files to PDF using Playwright
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function htmlToPdf(htmlFile, pdfFile) {
    const absHtml = path.resolve(htmlFile);
    const absPdf = path.resolve(pdfFile);
    const browser = await chromium.launch();
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.goto('file:///' + absHtml.replace(/\\/g, '/'));
    await page.waitForLoadState('networkidle');
    await page.pdf({
        path: absPdf,
        format: 'A4',
        printBackground: true,
        margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '20mm' },
    });
    await browser.close();
    console.log('Created:', absPdf);
}

(async () => {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        const html = args[i];
        const pdf = args[i + 1];
        if (fs.existsSync(html)) {
            await htmlToPdf(html, pdf);
        } else {
            console.warn('Missing:', html);
        }
    }
})();
