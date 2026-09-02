// slide-23.js — Best Practices
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Top 5 Best Practices', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    const tips = [
        { n: '1', title: 'Test ก่อน Optimize', desc: 'เขียน C → test → measure → optimize\nอย่า optimize แบบ blind', color: '4CAF50' },
        { n: '2', title: 'ใช้ Arbitrary Precision', desc: 'ap_int<8> แทน int เมื่อ bit-width พอ\nลด area ~30-50%', color: '2196F3' },
        { n: '3', title: 'Profile ก่อน Pipeline', desc: 'ใช้ report ดูว่า bottleneck อยู่ที่ไหน\n(compute, memory, หรือ I/O)', color: 'FF9800' },
        { n: '4', title: 'Self-Checking Testbench', desc: 'return 0 = PASS, !=0 = FAIL\nBambu จะ check ให้อัตโนมัติ', color: '9C27B0' },
        { n: '5', title: 'Verify หลายระดับ', desc: 'C test → Co-sim → Post-synth\nอย่า skip ขั้นใดขั้นหนึ่ง', color: 'F44336' }
    ];

    tips.forEach((t, i) => {
        const y = 1.2 + i * 0.78;
        // Number circle
        slide.addShape('ellipse', {
            x: 0.5, y, w: 0.6, h: 0.6,
            fill: { color: t.color }, line: { color: t.color }
        });
        slide.addText(t.n, {
            x: 0.5, y, w: 0.6, h: 0.6,
            fontSize: 22, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        // Text
        slide.addText(t.title, {
            x: 1.3, y: y - 0.05, w: 8, h: 0.3,
            fontSize: 14, bold: true, color: theme.primary, fontFace: 'Arial'
        });
        slide.addText(t.desc, {
            x: 1.3, y: y + 0.25, w: 8, h: 0.4,
            fontSize: 11, color: '555555', fontFace: 'Arial'
        });
    });

    slide.addText('23 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
