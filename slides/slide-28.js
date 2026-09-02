// slide-28.js — Final Project Sobel Filter
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    // Final project badge
    slide.addShape('rect', {
        x: 0.5, y: 0.3, w: 1.6, h: 0.4,
        fill: { color: 'F44336' }, line: { color: 'F44336' }
    });
    slide.addText('FINAL PROJECT', {
        x: 0.5, y: 0.3, w: 1.6, h: 0.4,
        fontSize: 11, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    slide.addText('Sobel Edge Detector', {
        x: 2.2, y: 0.3, w: 7.3, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Spec
    slide.addText('Specification', {
        x: 0.5, y: 1.15, w: 9, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    const specs = [
        'Input: 64×64 grayscale image (8-bit pixel)',
        'Output: 64×64 edge magnitude',
        'Kernels: Gx, Gy (3×3 Sobel)',
        'Output = |Gx| + |Gy| (fast approx)'
    ];
    slide.addText(specs.map(s => ({ text: '• ' + s, options: { color: '333333' } })), {
        x: 0.6, y: 1.55, w: 9, h: 1.2,
        fontSize: 12, fontFace: 'Arial', paraSpaceAfter: 3
    });

    // Deliverables
    slide.addText('งานที่ต้องส่ง', {
        x: 0.5, y: 2.85, w: 9, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    const items = [
        '1. Source code C/C++ (sobel.c)',
        '2. Bambu HLS report (resource utilization)',
        '3. Generated Verilog',
        '4. Resource table (LUT, FF, DSP, BRAM)',
        '5. (Bonus) Integrate กับ OpenROAD ใช้ IHP SG13G2'
    ];
    slide.addText(items.map(s => ({ text: s, options: { color: '333333' } })), {
        x: 0.6, y: 3.25, w: 9, h: 1.6,
        fontSize: 12, fontFace: 'Arial', paraSpaceAfter: 4
    });

    slide.addText('28 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
