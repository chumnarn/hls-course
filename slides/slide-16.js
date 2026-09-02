// slide-16.js — Lab 1 Simple Adder
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    // Lab badge
    slide.addShape('rect', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fill: { color: '4CAF50' }, line: { color: '4CAF50' }
    });
    slide.addText('LAB 1', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fontSize: 14, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    slide.addText('Simple Adder — Hello World of HLS', {
        x: 1.8, y: 0.3, w: 7.7, h: 0.6,
        fontSize: 26, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Objective
    slide.addText('Objective', {
        x: 0.5, y: 1.15, w: 9, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    slide.addText('แปลงฟังก์ชันบวกเลขง่าย ๆ จาก C เป็น Verilog และตรวจสอบ RTL ที่ได้', {
        x: 0.6, y: 1.55, w: 9, h: 0.4,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    // Code
    slide.addShape('rect', {
        x: 0.5, y: 2.0, w: 5.0, h: 2.6,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText('adder.c', {
        x: 0.6, y: 2.05, w: 4.8, h: 0.3,
        fontSize: 11, bold: true, color: 'FFD700', fontFace: 'Arial'
    });
    slide.addText([
        { text: 'void adder(int a, int b, int* c) {\n', options: { color: 'D4D4D4' } },
        { text: '    *c = a + b;\n', options: { color: 'D4D4D4' } },
        { text: '}\n\n', options: { color: 'D4D4D4' } },
        { text: 'int main() {\n', options: { color: 'D4D4D4' } },
        { text: '    int c;\n', options: { color: 'D4D4D4' } },
        { text: '    adder(5, 7, &c);\n', options: { color: 'D4D4D4' } },
        { text: '    if (c != 12) return 1;  // FAIL\n', options: { color: '6A9955' } },
        { text: '    return 0;  // PASS', options: { color: '6A9955' } }
    ], { x: 0.7, y: 2.4, w: 4.7, h: 2.1, fontSize: 10, fontFace: 'Consolas' });

    // Results
    slide.addText('Expected Results', {
        x: 5.7, y: 2.0, w: 3.8, h: 0.3,
        fontSize: 13, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    const results = [
        [
            { text: 'Resource', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
            { text: 'Value', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } }
        ],
        ['LUTs', '~10'],
        ['FFs', '~50'],
        ['DSPs', '0'],
        ['BRAMs', '0'],
        ['Latency', '1 cyc'],
        ['Interval', '1 cyc']
    ];
    slide.addTable(results, {
        x: 5.7, y: 2.4, w: 3.8, h: 2.0,
        fontSize: 11, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [2.0, 1.8]
    });

    slide.addText('16 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
