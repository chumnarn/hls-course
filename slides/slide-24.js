// slide-24.js — Top 5 Pitfalls
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Top 5 Pitfalls ที่พบบ่อย', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    const pitfalls = [
        { title: 'Loop bound ไม่คงที่', fix: 'ใช้ #pragma HLS LOOP_TRIPCOUNT' },
        { title: 'Pointer aliasing', fix: 'ใช้ restrict keyword' },
        { title: 'Array access conflict', fix: 'ใช้ shift register หรือ ARRAY_PARTITION' },
        { title: 'Resource ไม่พอ (II ไม่ลด)', fix: 'เพิ่ม UNROLL/PARTITION หรือยอมรับ II สูง' },
        { title: 'Printf ใน synthesized function', fix: 'เอา printf ออกจาก top function' }
    ];

    pitfalls.forEach((p, i) => {
        const y = 1.2 + i * 0.75;
        slide.addShape('rect', {
            x: 0.5, y, w: 9, h: 0.65,
            fill: { color: 'FFEBEE' }, line: { color: 'F44336' }
        });
        slide.addText('⚠', {
            x: 0.6, y, w: 0.5, h: 0.65,
            fontSize: 22, color: 'C62828', fontFace: 'Arial',
            align: 'center', valign: 'middle'
        });
        slide.addText([
            { text: p.title, options: { bold: true, color: 'C62828', fontSize: 13, breakLine: true } },
            { text: '→ แก้: ', options: { color: '666666', fontSize: 11 } },
            { text: p.fix, options: { color: '1B5E20', fontSize: 11, italic: true } }
        ], {
            x: 1.2, y: y + 0.05, w: 8.2, h: 0.6,
            fontFace: 'Arial', valign: 'middle'
        });
    });

    slide.addText('24 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
