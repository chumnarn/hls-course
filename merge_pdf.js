// merge_pdf.js — Combine multiple PDFs into one
const { chromium } = require('playwright');
const path = require('path');

async function mergePDFs() {
    const browser = await chromium.launch();
    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    // Use Chromium's print to merge approach: open each PDF, print all
    // Easier: use PDFMerger via PDF-lib
    // But we don't have pdf-lib. Let me use a different approach:
    // Open all HTML files in sequence and produce a single multi-section PDF
    // via PDF bookmark trick.

    // Simpler approach: use pdf-lib via dynamic require
    let PDFLib;
    try {
        PDFLib = require('pdf-lib');
    } catch (e) {
        // Fallback: use PDFKit
        console.log('pdf-lib not found, trying alternative...');
        await browser.close();
        return;
    }

    const fs = require('fs');
    const merged = await PDFLib.PDFDocument.create();

    const files = [
        'hls-course-part1-theory.pdf',
        'hls-course-part2-practice.pdf',
        'README.pdf'
    ];

    for (const f of files) {
        if (fs.existsSync(f)) {
            const bytes = fs.readFileSync(f);
            const doc = await PDFLib.PDFDocument.load(bytes);
            const pages = await merged.copyPages(doc, doc.getPageIndices());
            pages.forEach(p => merged.addPage(p));
            console.log('Added', f, '(', pages.length, 'pages)');
        }
    }

    const out = await merged.save();
    fs.writeFileSync('hls-course-complete.pdf', out);
    console.log('Created: hls-course-complete.pdf');
    await browser.close();
}

mergePDFs().catch(e => { console.error(e); process.exit(1); });
