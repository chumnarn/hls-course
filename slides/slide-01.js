// slide-01.js — Cover slide
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: theme.bg };

    // Decorative bar at top
    slide.addShape('rect', {
        x: 0, y: 0, w: 10, h: 0.3,
        fill: { color: theme.primary },
        line: { color: theme.primary }
    });

    // Decorative bar at bottom
    slide.addShape('rect', {
        x: 0, y: 5.325, w: 10, h: 0.3,
        fill: { color: theme.accent },
        line: { color: theme.accent }
    });

    // Main title
    slide.addText('Introduction to', {
        x: 0.5, y: 1.4, w: 9, h: 0.6,
        fontSize: 28, color: theme.secondary,
        fontFace: 'Arial', align: 'center', italic: true
    });

    slide.addText('High-Level Synthesis', {
        x: 0.5, y: 2.0, w: 9, h: 1.0,
        fontSize: 48, bold: true, color: theme.primary,
        fontFace: 'Arial', align: 'center'
    });

    // Subtitle
    slide.addText('From C/C++ to Verilog — Theory & Practice', {
        x: 0.5, y: 3.05, w: 9, h: 0.5,
        fontSize: 20, color: theme.secondary,
        fontFace: 'Arial', align: 'center'
    });

    // Meta info
    slide.addText('Beginner → Intermediate Training Course', {
        x: 0.5, y: 4.0, w: 9, h: 0.4,
        fontSize: 14, color: theme.accent,
        fontFace: 'Arial', align: 'center'
    });

    slide.addText('3-Day Workshop  •  Open-Source EDA  •  Bambu HLS + Yosys + OpenROAD', {
        x: 0.5, y: 4.5, w: 9, h: 0.4,
        fontSize: 12, color: theme.secondary,
        fontFace: 'Arial', align: 'center'
    });
}

module.exports = { createSlide };
