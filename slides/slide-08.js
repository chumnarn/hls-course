// slide-08.js — Allocation & Binding
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Allocation & Binding', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Definitions
    slide.addShape('rect', {
        x: 0.5, y: 1.2, w: 4.3, h: 1.5,
        fill: { color: 'E3F2FD' }, line: { color: theme.primary, width: 1 }
    });
    slide.addText('Allocation', {
        x: 0.6, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addText('เลือกว่าจะมี functional unit อะไรบ้าง เช่น:\n• 2× adder\n• 1× multiplier\n• 1× BRAM (256 words)\n• 32× register file', {
        x: 0.7, y: 1.7, w: 4.0, h: 0.95,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    slide.addShape('rect', {
        x: 5.2, y: 1.2, w: 4.3, h: 1.5,
        fill: { color: 'FFF3E0' }, line: { color: 'FF9800', width: 1 }
    });
    slide.addText('Binding', {
        x: 5.3, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: 'E65100',
        fontFace: 'Arial'
    });
    slide.addText('map operation แต่ละตัวไปยัง unit:\n• Op1: a+b → adder_0\n• Op3: e+1 → adder_0 (share)\n• Op2: c*d → mult_0', {
        x: 5.4, y: 1.7, w: 4.0, h: 0.95,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    // Trade-off
    slide.addText('Trade-off', {
        x: 0.5, y: 2.9, w: 9, h: 0.4,
        fontSize: 18, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });

    // Two arrows showing trade-off
    slide.addShape('rect', {
        x: 0.5, y: 3.4, w: 4.3, h: 1.5,
        fill: { color: 'E8F5E9' }, line: { color: '4CAF50' }
    });
    slide.addText('Share resource (1 adder)', {
        x: 0.6, y: 3.5, w: 4.1, h: 0.3,
        fontSize: 13, bold: true, color: '2E7D32', fontFace: 'Arial'
    });
    slide.addText('✓ Area น้อย\n✓ Power ต่ำ\n✗ Latency เพิ่ม (ต้องรอ)', {
        x: 0.7, y: 3.85, w: 4.0, h: 1.0,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    slide.addShape('rect', {
        x: 5.2, y: 3.4, w: 4.3, h: 1.5,
        fill: { color: 'FFEBEE' }, line: { color: 'F44336' }
    });
    slide.addText('ไม่ share (2 adders)', {
        x: 5.3, y: 3.5, w: 4.1, h: 0.3,
        fontSize: 13, bold: true, color: 'C62828', fontFace: 'Arial'
    });
    slide.addText('✓ Latency น้อย (ทำขนาน)\n✓ Throughput สูง\n✗ Area เพิ่ม 2 เท่า', {
        x: 5.4, y: 3.85, w: 4.0, h: 1.0,
        fontSize: 12, color: '333333', fontFace: 'Arial'
    });

    slide.addText('8 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
