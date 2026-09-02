// slide-12.js — UNROLL & ARRAY_PARTITION
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('UNROLL & ARRAY_PARTITION', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // UNROLL section
    slide.addShape('rect', {
        x: 0.5, y: 1.2, w: 4.3, h: 3.5,
        fill: { color: 'E3F2FD' }, line: { color: theme.primary, width: 1 }
    });
    slide.addText('UNROLL', {
        x: 0.6, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addText('สร้าง hardware ซ้ำหลายชุดเพื่อทำงานขนาน', {
        x: 0.7, y: 1.7, w: 4.0, h: 0.3,
        fontSize: 11, color: '333333', italic: true,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.7, y: 2.05, w: 4.0, h: 1.4,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: '#pragma HLS UNROLL factor=4\n', options: { color: '569CD6', bold: true } },
        { text: 'for (int i = 0; i < 16; i++) {\n', options: { color: 'D4D4D4' } },
        { text: '    c[i] = a[i] * b[i];\n', options: { color: 'D4D4D4' } },
        { text: '}', options: { color: 'D4D4D4' } }
    ], { x: 0.85, y: 2.15, w: 3.8, h: 1.2, fontSize: 11, fontFace: 'Consolas' });

    slide.addText('• factor=N → unroll N ครั้ง (N× units)\n• ไม่มี factor → unroll เต็ม\n• Cost: area เพิ่ม, Benefit: throughput เพิ่ม', {
        x: 0.7, y: 3.5, w: 4.0, h: 1.0,
        fontSize: 11, color: '333333', fontFace: 'Arial'
    });

    // ARRAY_PARTITION
    slide.addShape('rect', {
        x: 5.2, y: 1.2, w: 4.3, h: 3.5,
        fill: { color: 'FFF3E0' }, line: { color: 'FF9800', width: 1 }
    });
    slide.addText('ARRAY_PARTITION', {
        x: 5.3, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: 'E65100',
        fontFace: 'Arial'
    });
    slide.addText('แบ่ง array เพื่อเข้าถึงหลาย element พร้อมกัน', {
        x: 5.4, y: 1.7, w: 4.0, h: 0.3,
        fontSize: 11, color: '333333', italic: true,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 5.4, y: 2.05, w: 4.0, h: 1.4,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText([
        { text: 'int buf[16];\n', options: { color: 'D4D4D4' } },
        { text: '#pragma HLS ARRAY_PARTITION\n', options: { color: '569CD6', bold: true } },
        { text: '   variable=buf complete\n', options: { color: 'D4D4D4' } },
        { text: '// buf[0..15] คนละ register', options: { color: '6A9955', italic: true } }
    ], { x: 5.55, y: 2.15, w: 3.8, h: 1.2, fontSize: 11, fontFace: 'Consolas' });

    slide.addText('Modes:\n• complete — แยกทุก element\n• block factor=N — แบ่ง block\n• cyclic factor=N — round-robin', {
        x: 5.4, y: 3.5, w: 4.0, h: 1.0,
        fontSize: 11, color: '333333', fontFace: 'Arial'
    });

    slide.addText('12 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
