// slide-14.js — Interface Synthesis
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Interface Synthesis', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Block-level interface (default)
    slide.addShape('rect', {
        x: 0.5, y: 1.2, w: 9, h: 1.0,
        fill: { color: 'F5F5F5' }, line: { color: theme.primary }
    });
    slide.addText('Block-Level (default)', {
        x: 0.6, y: 1.25, w: 4, h: 0.3,
        fontSize: 13, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    slide.addText('ap_start (in)  •  ap_done (out)  •  ap_idle (out)  •  ap_ready (out)', {
        x: 0.6, y: 1.6, w: 9, h: 0.5,
        fontSize: 12, fontFace: 'Consolas', color: '1E1E1E'
    });

    // 3 types of interfaces
    const types = [
        { name: 'Memory-Mapped (AXI)', desc: 'CPU access', use: 'Register, control', color: theme.primary },
        { name: 'Streaming (FIFO)', desc: 'Data pipeline', use: 'Pixel, audio, packet', color: '4CAF50' },
        { name: 'Block RAM', desc: 'On-chip storage', use: 'Buffer, lookup table', color: 'FF9800' }
    ];
    types.forEach((t, i) => {
        const y = 2.4 + i * 0.85;
        slide.addShape('rect', {
            x: 0.5, y, w: 9, h: 0.75,
            fill: { color: 'FAFAFA' }, line: { color: t.color, width: 1 }
        });
        slide.addShape('rect', {
            x: 0.5, y, w: 0.15, h: 0.75,
            fill: { color: t.color }, line: { color: t.color }
        });
        slide.addText([
            { text: t.name + '  ', options: { bold: true, color: t.color, fontSize: 13 } },
            { text: t.desc + '  ', options: { color: '666666', fontSize: 11, italic: true } },
            { text: '— ' + t.use, options: { color: '333333', fontSize: 11 } }
        ], {
            x: 0.85, y: y + 0.05, w: 8.6, h: 0.65,
            fontFace: 'Arial', valign: 'middle'
        });
    });

    slide.addText('14 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
