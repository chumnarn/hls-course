// slide-11.js — PIPELINE Directive
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('PIPELINE Directive', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('เร่ง throughput — ทำให้ loop ใหม่เริ่มได้ทุก ๆ II cycles', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 13, italic: true, color: '666666',
        fontFace: 'Arial'
    });

    // Code
    slide.addShape('rect', {
        x: 0.5, y: 1.55, w: 5.0, h: 2.0,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: 'void foo(int a[16], int b[16], int c[16]) {\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS PIPELINE II=1\n', options: { color: '569CD6', bold: true } },
        { text: '    for (int i = 0; i < 16; i++) {\n', options: { color: 'D4D4D4' } },
        { text: '        c[i] = a[i] + b[i];\n', options: { color: 'D4D4D4' } },
        { text: '    }\n', options: { color: 'D4D4D4' } },
        { text: '}', options: { color: 'D4D4D4' } }
    ], {
        x: 0.7, y: 1.7, w: 4.7, h: 1.7,
        fontSize: 12, fontFace: 'Consolas'
    });

    // Comparison
    slide.addText('Before / After', {
        x: 5.7, y: 1.55, w: 3.8, h: 0.4,
        fontSize: 14, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const comp = [
        [
            { text: 'Metric', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
            { text: 'No PIPELINE', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'II=1', options: { bold: true, color: 'FFFFFF', fill: { color: '4CAF50' }, align: 'center' } }
        ],
        [
            { text: 'Latency', options: { bold: true } },
            { text: '16 cyc', options: { align: 'center' } },
            { text: '16 cyc', options: { align: 'center', color: '4CAF50' } }
        ],
        [
            { text: 'Initiation Interval', options: { bold: true } },
            { text: '16 cyc', options: { align: 'center' } },
            { text: '1 cyc', options: { align: 'center', color: '4CAF50' } }
        ],
        [
            { text: 'Throughput', options: { bold: true } },
            { text: '1/16 cyc', options: { align: 'center' } },
            { text: '1/cyc', options: { align: 'center', color: '4CAF50' } }
        ],
        [
            { text: 'LUTs (approx)', options: { bold: true } },
            { text: '~50', options: { align: 'center' } },
            { text: '~200', options: { align: 'center', color: 'F44336' } }
        ]
    ];
    slide.addTable(comp, {
        x: 5.7, y: 2.0, w: 3.8, h: 1.7,
        fontSize: 10, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [1.4, 1.2, 1.2]
    });

    // Tips
    slide.addText([
        { text: '• ', options: { color: theme.primary, bold: true } },
        { text: 'II=1 = เร็วสุด (1 iteration ต่อ cycle)\n', options: {} },
        { text: '• ', options: { color: theme.primary, bold: true } },
        { text: 'ถ้า II ไม่ลด — HLS จะบอก minimum II ที่ทำได้\n', options: {} },
        { text: '• ', options: { color: theme.primary, bold: true } },
        { text: 'เพิ่ม resource (UNROLL) เพื่อให้ II ลดลง', options: {} }
    ], {
        x: 0.5, y: 3.8, w: 9, h: 1.2,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    slide.addText('11 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
