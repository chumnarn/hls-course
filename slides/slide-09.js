// slide-09.js — Coding Style
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Coding Style สำหรับ HLS', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Good vs Bad
    const items = [
        {
            rule: 'Loop bound ต้องรู้ตอน compile-time',
            bad: 'for (int i = 0; i < n; i++)  // n จาก input',
            good: '#pragma HLS LOOP_TRIPCOUNT min=8 max=64\nfor (int i = 0; i < n; i++)'
        },
        {
            rule: 'Pointer aliasing',
            bad: 'void foo(int* a, int* b) { *a = *b + 1; }',
            good: 'void foo(int* restrict a, int* restrict b) { *a = *b + 1; }'
        },
        {
            rule: 'Dynamic memory',
            bad: 'int* buf = malloc(N * sizeof(int));',
            good: 'int buf[1024];  // static array'
        },
        {
            rule: 'Top function = design entry',
            bad: '// synthesize ทั้งโปรแกรม',
            good: 'void dut(int a, int b, int* c) { *c = a + b; }  // top'
        }
    ];

    let y = 1.2;
    items.forEach((it, i) => {
        slide.addText(it.rule, {
            x: 0.5, y, w: 9, h: 0.3,
            fontSize: 13, bold: true, color: theme.primary,
            fontFace: 'Arial'
        });
        // Bad
        slide.addShape('rect', {
            x: 0.5, y: y + 0.32, w: 4.4, h: 0.55,
            fill: { color: 'FFEBEE' }, line: { color: 'F44336' }
        });
        slide.addText('❌ ' + it.bad, {
            x: 0.6, y: y + 0.36, w: 4.2, h: 0.5,
            fontSize: 10, color: 'C62828', fontFace: 'Consolas'
        });
        // Good
        slide.addShape('rect', {
            x: 5.1, y: y + 0.32, w: 4.4, h: 0.55,
            fill: { color: 'E8F5E9' }, line: { color: '4CAF50' }
        });
        slide.addText('✅ ' + it.good, {
            x: 5.2, y: y + 0.36, w: 4.2, h: 0.5,
            fontSize: 10, color: '1B5E20', fontFace: 'Consolas'
        });
        y += 0.95;
    });

    slide.addText('9 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
