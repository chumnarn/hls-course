// slide-13.js — DATAFLOW
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('DATAFLOW — Task-Level Parallelism', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('ทำให้ function หลาย ๆ ตัวทำงานพร้อมกัน โดยเชื่อมด้วย hls::stream', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 13, italic: true, color: '666666',
        fontFace: 'Arial'
    });

    // Pipeline diagram
    const stages = ['+1', '×2', '-5'];
    const stageW = 1.2, gap = 0.6;
    const startX = 0.7;
    stages.forEach((label, i) => {
        const x = startX + i * (stageW + gap);
        // Stage box
        slide.addShape('rect', {
            x, y: 1.7, w: stageW, h: 0.8,
            fill: { color: theme.primary },
            line: { color: theme.primary }
        });
        slide.addText('Stage ' + (i + 1) + '\n' + label, {
            x, y: 1.75, w: stageW, h: 0.7,
            fontSize: 13, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        // Arrow
        if (i < stages.length - 1) {
            slide.addText('→', {
                x: x + stageW - 0.05, y: 1.95, w: gap + 0.1, h: 0.4,
                fontSize: 24, bold: true, color: theme.accent,
                fontFace: 'Arial', align: 'center'
            });
        }
    });

    // Timeline
    slide.addText('Pipeline Timeline:', {
        x: 0.5, y: 2.8, w: 9, h: 0.3,
        fontSize: 12, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const cells = [
        ['', 'a', '', ''],
        ['', '', 'a', ''],
        ['', '', '', 'a'],
        ['', 'b', '', ''],
        ['', '', 'b', ''],
        ['', '', '', 'b'],
        ['', 'c', '', ''],
        ['', '', 'c', '']
    ];
    const cellData = [];
    cellData.push([
        { text: 'Stage', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary } } },
        { text: 'cyc 0', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
        { text: 'cyc 1', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
        { text: 'cyc 2', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
        { text: 'cyc 3', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } }
    ]);
    [['1', 'a', '', '', ''], ['2', '', 'a', '', ''], ['3', '', '', 'a', ''], ['output', '', '', '', 'a']].forEach(row => {
        cellData.push(row.map((v, j) => ({
            text: v,
            options: { align: 'center', fill: { color: v ? 'C8E6C9' : 'F5F5F5' } }
        })));
    });
    slide.addTable(cellData, {
        x: 0.5, y: 3.15, w: 5.0, h: 1.5,
        fontSize: 10, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [1.0, 1.0, 1.0, 1.0, 1.0]
    });

    // Code
    slide.addShape('rect', {
        x: 5.7, y: 2.8, w: 3.8, h: 1.85,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: 'void pipeline(\n', options: { color: 'D4D4D4' } },
        { text: '  hls::stream<int>& in,\n', options: { color: 'D4D4D4' } },
        { text: '  hls::stream<int>& out) {\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS DATAFLOW\n', options: { color: '569CD6', bold: true } },
        { text: '  stage1(in, mid1);\n', options: { color: 'D4D4D4' } },
        { text: '  stage2(mid1, mid2);\n', options: { color: 'D4D4D4' } },
        { text: '  stage3(mid2, out);', options: { color: 'D4D4D4' } }
    ], { x: 5.85, y: 2.9, w: 3.6, h: 1.7, fontSize: 10, fontFace: 'Consolas' });

    slide.addText('13 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
