// slide-30.js — Q&A / Thank You
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: theme.bg };

    // Decorative bars
    slide.addShape('rect', {
        x: 0, y: 0, w: 10, h: 0.3,
        fill: { color: theme.primary }, line: { color: theme.primary }
    });
    slide.addShape('rect', {
        x: 0, y: 5.325, w: 10, h: 0.3,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Main title
    slide.addText('Q & A', {
        x: 0.5, y: 1.5, w: 9, h: 1.2,
        fontSize: 96, bold: true, color: theme.primary,
        fontFace: 'Arial', align: 'center', valign: 'middle'
    });

    // Thank you
    slide.addText('Thank You', {
        x: 0.5, y: 2.8, w: 9, h: 0.7,
        fontSize: 32, bold: true, color: theme.secondary,
        fontFace: 'Arial', align: 'center'
    });

    // Tagline
    slide.addText('From C/C++ to Silicon — Happy HLS Coding!', {
        x: 0.5, y: 3.55, w: 9, h: 0.4,
        fontSize: 16, italic: true, color: theme.accent,
        fontFace: 'Arial', align: 'center'
    });

    // Resources line
    slide.addText('Bambu HLS  •  Yosys  •  OpenROAD  •  Icarus  •  COCOTB', {
        x: 0.5, y: 4.3, w: 9, h: 0.4,
        fontSize: 12, color: theme.secondary,
        fontFace: 'Arial', align: 'center'
    });

    slide.addText('30 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
