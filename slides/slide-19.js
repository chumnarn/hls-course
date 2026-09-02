// slide-19.js — Lab 4 Dataflow Streaming
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addShape('rect', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fill: { color: '4CAF50' }, line: { color: '4CAF50' }
    });
    slide.addText('LAB 4', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fontSize: 14, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    slide.addText('Dataflow Streaming — Task Pipeline', {
        x: 1.8, y: 0.3, w: 7.7, h: 0.6,
        fontSize: 24, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('Objective: ใช้ DATAFLOW + hls::stream สร้าง streaming pipeline 3 stages', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 12, color: '333333', italic: true, fontFace: 'Arial'
    });

    // Pipeline diagram
    const stages = [
        { name: 'Stage 1', op: '+1', color: theme.primary },
        { name: 'Stage 2', op: '×2', color: 'FF9800' },
        { name: 'Stage 3', op: '-5', color: '4CAF50' }
    ];
    stages.forEach((s, i) => {
        const x = 0.7 + i * 3.0;
        slide.addShape('rect', {
            x, y: 1.6, w: 1.6, h: 1.0,
            fill: { color: s.color }, line: { color: s.color }
        });
        slide.addText([
            { text: s.name + '\n', options: { fontSize: 12, bold: true } },
            { text: s.op, options: { fontSize: 22, bold: true } }
        ], {
            x, y: 1.7, w: 1.6, h: 0.8,
            color: 'FFFFFF', fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        if (i < stages.length - 1) {
            // Stream connector
            slide.addText('hls::stream', {
                x: x + 1.6, y: 1.9, w: 1.4, h: 0.4,
                fontSize: 10, italic: true, color: theme.accent,
                fontFace: 'Arial', align: 'center'
            });
            slide.addText('→', {
                x: x + 1.6, y: 2.0, w: 1.4, h: 0.4,
                fontSize: 24, bold: true, color: theme.secondary,
                fontFace: 'Arial', align: 'center'
            });
        }
    });

    // Code
    slide.addShape('rect', {
        x: 0.5, y: 2.95, w: 9, h: 1.7,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText('dataflow.cpp', {
        x: 0.6, y: 3.0, w: 4.8, h: 0.3,
        fontSize: 11, bold: true, color: 'FFD700', fontFace: 'Arial'
    });
    slide.addText([
        { text: 'void pipeline(hls::stream<int>& in, hls::stream<int>& out) {\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS DATAFLOW\n', options: { color: '569CD6', bold: true } },
        { text: '    hls::stream<int> mid1, mid2;\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS STREAM variable=mid1 depth=4\n', options: { color: '569CD6' } },
        { text: '    stage1(in, mid1);\n', options: { color: 'D4D4D4' } },
        { text: '    stage2(mid1, mid2);\n', options: { color: 'D4D4D4' } },
        { text: '    stage3(mid2, out);\n', options: { color: 'D4D4D4' } },
        { text: '}', options: { color: 'D4D4D4' } }
    ], { x: 0.7, y: 3.3, w: 8.7, h: 1.3, fontSize: 11, fontFace: 'Consolas' });

    slide.addText([
        { text: '✓ Latency (first sample): 3 cycles  •  ', options: { color: '4CAF50', bold: true } },
        { text: 'Throughput: 1 sample / cycle', options: { color: '333333' } }
    ], {
        x: 0.5, y: 4.75, w: 9, h: 0.3,
        fontSize: 11, fontFace: 'Arial', align: 'center'
    });

    slide.addText('19 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
