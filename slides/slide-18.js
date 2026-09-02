// slide-18.js — Lab 3 Matrix Multiplication
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addShape('rect', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fill: { color: '4CAF50' }, line: { color: '4CAF50' }
    });
    slide.addText('LAB 3', {
        x: 0.5, y: 0.3, w: 1.2, h: 0.4,
        fontSize: 14, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    slide.addText('Matrix Multiplication — Memory Optimization', {
        x: 1.8, y: 0.3, w: 7.7, h: 0.6,
        fontSize: 22, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('Objective: ใช้ ARRAY_PARTITION แก้ปัญหา memory bottleneck', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 12, color: '333333', italic: true, fontFace: 'Arial'
    });

    // Directives used
    slide.addShape('rect', {
        x: 0.5, y: 1.55, w: 9, h: 1.2,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: '#pragma HLS ARRAY_PARTITION variable=A complete dim=2\n', options: { color: '569CD6' } },
        { text: '#pragma HLS ARRAY_PARTITION variable=B complete dim=1\n', options: { color: '569CD6' } },
        { text: '#pragma HLS ARRAY_PARTITION variable=C complete dim=2\n\n', options: { color: '569CD6' } },
        { text: 'for (int i = 0; i < N; i++) {\n', options: { color: 'D4D4D4' } },
        { text: '  for (int j = 0; j < N; j++) {\n', options: { color: 'D4D4D4' } },
        { text: '    for (int k = 0; k < N; k++) {\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS PIPELINE II=1\n', options: { color: '569CD6' } },
        { text: '#pragma HLS UNROLL factor=4\n', options: { color: '569CD6' } },
        { text: '      sum += A[i][k] * B[k][j];\n', options: { color: 'D4D4D4' } }
    ], { x: 0.7, y: 1.65, w: 8.5, h: 1.0, fontSize: 10, fontFace: 'Consolas' });

    // Visualization
    slide.addText('Memory access pattern', {
        x: 0.5, y: 2.9, w: 9, h: 0.3,
        fontSize: 13, bold: true, color: theme.primary, fontFace: 'Arial'
    });

    // Before / After schematic
    slide.addShape('rect', {
        x: 0.5, y: 3.3, w: 4.3, h: 1.5,
        fill: { color: 'FFEBEE' }, line: { color: 'F44336' }
    });
    slide.addText('❌ Single port (slow)', {
        x: 0.6, y: 3.35, w: 4.1, h: 0.3,
        fontSize: 12, bold: true, color: 'C62828', fontFace: 'Arial'
    });
    slide.addText('A[i][0]→A[i][1]→...→A[i][7]\n1 element ต่อ cycle\n8 cycle ต่อ row', {
        x: 0.6, y: 3.7, w: 4.1, h: 1.0,
        fontSize: 11, color: '333333', fontFace: 'Arial', align: 'center'
    });

    slide.addShape('rect', {
        x: 5.2, y: 3.3, w: 4.3, h: 1.5,
        fill: { color: 'E8F5E9' }, line: { color: '4CAF50' }
    });
    slide.addText('✅ 8-port parallel (fast)', {
        x: 5.3, y: 3.35, w: 4.1, h: 0.3,
        fontSize: 12, bold: true, color: '2E7D32', fontFace: 'Arial'
    });
    slide.addText('A[i][0..7] พร้อมกัน\n8 elements / cycle\n1 cycle ต่อ row', {
        x: 5.3, y: 3.7, w: 4.1, h: 1.0,
        fontSize: 11, color: '333333', fontFace: 'Arial', align: 'center'
    });

    slide.addText('18 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
