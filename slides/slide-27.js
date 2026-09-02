// slide-27.js — Cheat-Sheet Directives
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Cheat-Sheet: Directives', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    const directives = [
        [
            { text: 'Directive', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
            { text: 'Effect', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
            { text: 'Area', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'Latency', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'Use When', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } }
        ],
        [
            { text: 'PIPELINE II=N', options: { fontFace: 'Consolas', color: '4CAF50', bold: true } },
            { text: 'ทำ loop ใหม่ทุก N cycles', options: {} },
            { text: '+', options: { align: 'center' } },
            { text: '--', options: { align: 'center', color: '4CAF50' } },
            { text: 'inner loop', options: {} }
        ],
        [
            { text: 'UNROLL factor=N', options: { fontFace: 'Consolas', color: '2196F3', bold: true } },
            { text: 'สร้าง N× hardware copies', options: {} },
            { text: '++', options: { align: 'center', color: 'F44336' } },
            { text: '--', options: { align: 'center', color: '4CAF50' } },
            { text: 'loop เล็ก, ต้องการ throughput', options: {} }
        ],
        [
            { text: 'ARRAY_PARTITION', options: { fontFace: 'Consolas', color: 'FF9800', bold: true } },
            { text: 'แบ่ง array → multi-port', options: {} },
            { text: '++', options: { align: 'center', color: 'F44336' } },
            { text: '--', options: { align: 'center', color: '4CAF50' } },
            { text: 'memory bottleneck', options: {} }
        ],
        [
            { text: 'DATAFLOW', options: { fontFace: 'Consolas', color: '9C27B0', bold: true } },
            { text: 'ทำ function ขนานกัน', options: {} },
            { text: '+', options: { align: 'center' } },
            { text: '--', options: { align: 'center', color: '4CAF50' } },
            { text: 'pipeline ระหว่าง function', options: {} }
        ],
        [
            { text: 'INLINE', options: { fontFace: 'Consolas', color: '00BCD4', bold: true } },
            { text: 'แทน call ด้วย body', options: {} },
            { text: '-', options: { align: 'center', color: '4CAF50' } },
            { text: '+', options: { align: 'center' } },
            { text: 'small helper', options: {} }
        ],
        [
            { text: 'LOOP_FLATTEN', options: { fontFace: 'Consolas', color: '795548', bold: true } },
            { text: 'รวม nested loop เป็น loop เดียว', options: {} },
            { text: '+/-', options: { align: 'center' } },
            { text: '-', options: { align: 'center', color: '4CAF50' } },
            { text: 'nested loop', options: {} }
        ]
    ];
    slide.addTable(directives, {
        x: 0.5, y: 1.2, w: 9, h: 3.5,
        fontSize: 11, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [2.0, 2.6, 0.8, 0.9, 2.7]
    });

    slide.addText('27 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
