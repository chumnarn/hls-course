// slide-25.js — Performance Tuning Recipe
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Performance Tuning Recipe', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('เริ่มจาก baseline แล้วค่อย ๆ เพิ่ม optimization ทีละขั้น', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 12, italic: true, color: '666666', fontFace: 'Arial'
    });

    // Ladder of optimizations
    const steps = [
        { lvl: 1, name: 'Baseline', tool: 'เขียน C + test', effect: 'ทำงานถูกต้องก่อน' },
        { lvl: 2, name: 'PIPELINE', tool: '#pragma HLS PIPELINE II=1', effect: '↑ throughput, ↑ area' },
        { lvl: 3, name: 'PARTITION', tool: '#pragma HLS ARRAY_PARTITION', effect: '↑ mem bandwidth' },
        { lvl: 4, name: 'UNROLL', tool: '#pragma HLS UNROLL factor=N', effect: '↑ parallelism, ↑↑ area' },
        { lvl: 5, name: 'DATAFLOW', tool: '#pragma HLS DATAFLOW', effect: '↑ task-level parallelism' }
    ];
    steps.forEach((s, i) => {
        const y = 1.6 + i * 0.65;
        slide.addShape('rect', {
            x: 0.5, y, w: 0.7, h: 0.55,
            fill: { color: theme.primary }, line: { color: theme.primary }
        });
        slide.addText('L' + s.lvl, {
            x: 0.5, y, w: 0.7, h: 0.55,
            fontSize: 14, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        slide.addText([
            { text: s.name + '  ', options: { bold: true, fontSize: 12, color: theme.primary } },
            { text: s.tool, options: { fontSize: 10, fontFace: 'Consolas', color: '1B5E20' } }
        ], {
            x: 1.3, y: y + 0.05, w: 5.0, h: 0.45,
            fontFace: 'Arial', valign: 'middle'
        });
        slide.addText(s.effect, {
            x: 6.4, y: y + 0.05, w: 3.1, h: 0.45,
            fontSize: 10, color: '666666', italic: true,
            fontFace: 'Arial', valign: 'middle'
        });
    });

    slide.addText('25 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
