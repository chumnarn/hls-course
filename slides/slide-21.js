// slide-21.js — OpenROAD Integration
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Integration กับ OpenROAD', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Flow diagram
    const stages = [
        { name: 'C\nSource', color: theme.accent, h: 0.7 },
        { name: 'Bambu\nHLS', color: theme.primary, h: 0.7 },
        { name: 'Yosys\nSynth', color: theme.primary, h: 0.7 },
        { name: 'OpenROAD\nPnR', color: 'FF9800', h: 0.7 },
        { name: 'GDSII\nTapeout', color: '4CAF50', h: 0.7 }
    ];
    const w = 1.5, gap = 0.3, startX = 0.7;
    stages.forEach((s, i) => {
        const x = startX + i * (w + gap);
        slide.addShape('rect', {
            x, y: 1.5, w, h: s.h,
            fill: { color: s.color }, line: { color: s.color }
        });
        slide.addText(s.name, {
            x, y: 1.55, w, h: s.h - 0.1,
            fontSize: 12, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        if (i < stages.length - 1) {
            slide.addText('→', {
                x: x + w - 0.1, y: 1.65, w: gap + 0.2, h: 0.4,
                fontSize: 24, bold: true, color: theme.secondary,
                fontFace: 'Arial', align: 'center'
            });
        }
    });

    // Commands
    slide.addText('คำสั่งที่ใช้', {
        x: 0.5, y: 2.5, w: 9, h: 0.3,
        fontSize: 14, bold: true, color: theme.primary, fontFace: 'Arial'
    });

    // 3-step command boxes
    const cmds = [
        { step: '1. Bambu', cmd: 'bambu --top-fname=matmul \\\n  --backend=OpenROAD matmul.c' },
        { step: '2. Yosys', cmd: 'read_liberty sg13g2.lib\nread_verilog matmul.v\nsynth -top matmul' },
        { step: '3. OpenROAD', cmd: 'read_liberty sg13g2.lib\nread_verilog matmul_synth.v\nfloorplan → place → route' }
    ];
    cmds.forEach((c, i) => {
        const y = 2.9 + i * 0.7;
        slide.addText(c.step, {
            x: 0.5, y, w: 1.5, h: 0.6,
            fontSize: 11, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', valign: 'middle'
        });
        slide.addShape('rect', {
            x: 0.5, y, w: 1.5, h: 0.6,
            fill: { color: theme.primary }, line: { color: theme.primary }
        });
        slide.addText(c.step, {
            x: 0.5, y, w: 1.5, h: 0.6,
            fontSize: 11, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        slide.addShape('rect', {
            x: 2.1, y, w: 7.4, h: 0.6,
            fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
        });
        slide.addText(c.cmd, {
            x: 2.2, y: y + 0.05, w: 7.2, h: 0.55,
            fontSize: 10, fontFace: 'Consolas', color: 'D4D4D4', valign: 'middle'
        });
    });

    slide.addText('21 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
