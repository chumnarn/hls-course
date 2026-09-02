// slide-17.js — Lab 2 FIR Filter
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addShape('rect', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fill: { color: '4CAF50' }, line: { color: '4CAF50' }
    });
    slide.addText('LAB 2', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fontSize: 14, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    slide.addText('FIR Filter — Pipelining', {
        x: 1.8, y: 0.3, w: 7.7, h: 0.6,
        fontSize: 26, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('Objective: เปรียบเทียบ baseline vs PIPELINE II=1 บน 8-tap FIR filter', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 12, color: '333333', italic: true, fontFace: 'Arial'
    });

    // FIR formula
    slide.addShape('rect', {
        x: 0.5, y: 1.55, w: 9, h: 0.6,
        fill: { color: 'F0F7FF' }, line: { color: theme.primary }
    });
    slide.addText('y[n] = Σ h[k] · x[n-k]    (k = 0..7)', {
        x: 0.5, y: 1.6, w: 9, h: 0.5,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial',
        align: 'center', valign: 'middle'
    });

    // Comparison table
    slide.addText('Before / After Optimization', {
        x: 0.5, y: 2.3, w: 9, h: 0.3,
        fontSize: 14, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    const comp = [
        [
            { text: 'Configuration', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
            { text: 'Latency', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'II', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'DSPs', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'LUTs', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } }
        ],
        [
            { text: 'A. Baseline', options: { bold: true } },
            { text: '~50 cyc', options: { align: 'center' } },
            { text: '50', options: { align: 'center' } },
            { text: '1', options: { align: 'center' } },
            { text: '~200', options: { align: 'center' } }
        ],
        [
            { text: 'B. PIPELINE II=1 + UNROLL', options: { bold: true, color: '4CAF50' } },
            { text: '~10 cyc', options: { align: 'center', color: '4CAF50' } },
            { text: '1', options: { align: 'center', color: '4CAF50', bold: true } },
            { text: '8', options: { align: 'center', color: 'F44336' } },
            { text: '~800', options: { align: 'center', color: 'F44336' } }
        ]
    ];
    slide.addTable(comp, {
        x: 0.5, y: 2.65, w: 9, h: 1.3,
        fontSize: 11, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [3.0, 1.5, 1.5, 1.5, 1.5]
    });

    // Insight
    slide.addText([
        { text: '💡 ข้อสังเกต: ', options: { bold: true, color: theme.primary } },
        { text: 'PIPELINE II=1 เพิ่ม throughput 50× แต่ area เพิ่ม 4× — เป็น area vs throughput trade-off', options: { color: '333333' } }
    ], {
        x: 0.5, y: 4.15, w: 9, h: 0.6,
        fontSize: 12, fontFace: 'Arial', align: 'center'
    });

    slide.addText('17 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
