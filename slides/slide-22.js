// slide-22.js — OpenROAD PDK Examples
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('PDK Examples — IHP SG13G2 & SKY130', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // IHP SG13G2
    slide.addShape('rect', {
        x: 0.5, y: 1.2, w: 4.3, h: 3.5,
        fill: { color: 'F5F5F5' }, line: { color: theme.primary, width: 1 }
    });
    slide.addText('IHP SG13G2', {
        x: 0.6, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    slide.addText([
        { text: 'Tech: ', options: { bold: true } }, { text: '130 nm SiGe BiCMOS\n', options: {} },
        { text: 'Foundry: ', options: { bold: true } }, { text: 'IHP Microelectronics (Germany)\n', options: {} },
        { text: 'Standard cells: ', options: { bold: true } }, { text: 'sg13g2_stdcell\n', options: {} },
        { text: 'Vth options: ', options: { bold: true } }, { text: 'RVT, LVT, HVT\n', options: {} },
        { text: 'Use case: ', options: { bold: true } }, { text: 'High-performance + RF\n', options: {} },
        { text: 'LibreLane: ', options: { bold: true } }, { text: '"PDK": "ihp-sg13g2"', options: { fontFace: 'Consolas' } }
    ], {
        x: 0.7, y: 1.75, w: 4.0, h: 2.9,
        fontSize: 11, color: '333333', fontFace: 'Arial', paraSpaceAfter: 3
    });

    // SKY130
    slide.addShape('rect', {
        x: 5.2, y: 1.2, w: 4.3, h: 3.5,
        fill: { color: 'E3F2FD' }, line: { color: theme.primary, width: 1 }
    });
    slide.addText('SKY130', {
        x: 5.3, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    slide.addText([
        { text: 'Tech: ', options: { bold: true } }, { text: '130 nm CMOS\n', options: {} },
        { text: 'Foundry: ', options: { bold: true } }, { text: 'SkyWater Technology (US)\n', options: {} },
        { text: 'Standard cells: ', options: { bold: true } }, { text: 'sky130_fd_sc_hd\n', options: {} },
        { text: 'Cells available: ', options: { bold: true } }, { text: 'hd, hs, lp, hdll\n', options: {} },
        { text: 'Use case: ', options: { bold: true } }, { text: 'General purpose\n', options: {} },
        { text: 'LibreLane: ', options: { bold: true } }, { text: '"PDK": "sky130A"', options: { fontFace: 'Consolas' } }
    ], {
        x: 5.4, y: 1.75, w: 4.0, h: 2.9,
        fontSize: 11, color: '333333', fontFace: 'Arial', paraSpaceAfter: 3
    });

    slide.addText('22 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
