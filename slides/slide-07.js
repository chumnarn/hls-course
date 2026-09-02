// slide-07.js — Scheduling Concept
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Scheduling — จัดสรร "เวลา"', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('โจทย์: ตัดสินใจว่าแต่ละ operation ทำงานใน clock cycle ใด', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 13, color: '666666', italic: true,
        fontFace: 'Arial'
    });

    // Code example
    slide.addShape('rect', {
        x: 0.5, y: 1.55, w: 4.3, h: 1.6,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: 'c = a + b;\n', options: { color: 'D4D4D4' } },
        { text: 'e = c * d;\n', options: { color: 'D4D4D4' } },
        { text: 'f = e + 1;', options: { color: 'D4D4D4' } }
    ], {
        x: 0.7, y: 1.7, w: 4.0, h: 1.4,
        fontSize: 14, fontFace: 'Consolas'
    });

    // Schedule table
    slide.addText('Schedule (adder=1cy, mul=2cy):', {
        x: 5.1, y: 1.6, w: 4.5, h: 0.3,
        fontSize: 12, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const rows = [
        [
            { text: 'Cycle', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: '0', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: '1', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: '2', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: '3', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } }
        ],
        [
            { text: 'Op', options: { bold: true, fill: { color: 'F0F0F0' } } },
            { text: '+', options: { align: 'center', fill: { color: 'C8E6C9' } } },
            { text: '', options: {} },
            { text: '', options: {} },
            { text: '', options: {} }
        ],
        [
            { text: 'Op', options: { bold: true, fill: { color: 'F0F0F0' } } },
            { text: '', options: {} },
            { text: '*', options: { align: 'center', fill: { color: 'FFE0B2' } } },
            { text: '*', options: { align: 'center', fill: { color: 'FFE0B2' } } },
            { text: '', options: {} }
        ],
        [
            { text: 'Op', options: { bold: true, fill: { color: 'F0F0F0' } } },
            { text: '', options: {} },
            { text: '', options: {} },
            { text: '', options: {} },
            { text: '+', options: { align: 'center', fill: { color: 'C8E6C9' } } }
        ]
    ];
    slide.addTable(rows, {
        x: 5.1, y: 2.0, w: 4.4, h: 1.5,
        fontSize: 11, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [0.7, 0.9, 0.9, 0.9, 0.9],
        rowH: 0.32
    });

    // Bottom: Algorithms
    slide.addText('Scheduling Algorithms', {
        x: 0.5, y: 3.4, w: 9, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const algs = [
        { name: 'ASAP', desc: 'As Soon As Possible — เร็วสุดเท่าที่ data deps อนุญาต' },
        { name: 'ALAP', desc: 'As Late As Possible — ยืดเวลาให้ใช้ resource น้อย' },
        { name: 'List Scheduling', desc: 'Priority-based — เร็วและนิยมที่สุด' },
        { name: 'Force-Directed', desc: 'กระจายงานสม่ำเสมอ ลด resource peak' }
    ];
    algs.forEach((a, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + col * 4.6;
        const y = 3.85 + row * 0.55;
        slide.addText([
            { text: a.name + '  ', options: { bold: true, color: theme.primary, fontSize: 11 } },
            { text: a.desc, options: { color: '333333', fontSize: 11 } }
        ], { x, y, w: 4.5, h: 0.5, fontFace: 'Arial' });
    });

    slide.addText('7 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
