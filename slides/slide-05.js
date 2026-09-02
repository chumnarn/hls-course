// slide-05.js — HLS Tools Landscape
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('เครื่องมือ HLS ในปัจจุบัน', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Two columns: Commercial vs Open-source
    // Commercial
    slide.addShape('rect', {
        x: 0.5, y: 1.2, w: 4.3, h: 3.7,
        fill: { color: 'F5F5F5' },
        line: { color: theme.primary, width: 1 }
    });
    slide.addText('Commercial', {
        x: 0.6, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const commercial = [
        { tool: 'Vitis HLS', vendor: 'AMD/Xilinx', use: 'FPGA' },
        { tool: 'Intel HLS Compiler', vendor: 'Intel', use: 'FPGA' },
        { tool: 'Catapult HLS', vendor: 'Siemens EDA', use: 'ASIC / FPGA' },
        { tool: 'Stratus HLS', vendor: 'Cadence', use: 'ASIC / FPGA' }
    ];
    commercial.forEach((t, i) => {
        const y = 1.85 + i * 0.65;
        slide.addText([
            { text: t.tool, options: { bold: true, color: theme.primary, fontSize: 13, breakLine: true } },
            { text: `${t.vendor}  •  ${t.use}`, options: { color: '666666', fontSize: 10 } }
        ], { x: 0.7, y, w: 4.0, h: 0.6, fontFace: 'Arial' });
    });

    // Open-source
    slide.addShape('rect', {
        x: 5.2, y: 1.2, w: 4.3, h: 3.7,
        fill: { color: 'E8F5E9' },
        line: { color: '4CAF50', width: 1 }
    });
    slide.addText('Open-Source', {
        x: 5.3, y: 1.3, w: 4.1, h: 0.4,
        fontSize: 16, bold: true, color: '2E7D32',
        fontFace: 'Arial'
    });
    const oss = [
        { tool: 'Bambu HLS ⭐', vendor: 'Politecnico di Milano', use: 'ASIC / FPGA / OpenROAD' },
        { tool: 'Dynamatic', vendor: 'EPFL', use: 'ASIC (research)' },
        { tool: 'LegUp', vendor: 'Univ. of Toronto', use: 'FPGA (research, legacy)' },
        { tool: 'hls4ml', vendor: 'CERN / CMU', use: 'ML on FPGA' }
    ];
    oss.forEach((t, i) => {
        const y = 1.85 + i * 0.65;
        const isStar = t.tool.includes('⭐');
        slide.addText([
            { text: t.tool, options: { bold: true, color: isStar ? 'D32F2F' : '2E7D32', fontSize: 13, breakLine: true } },
            { text: `${t.vendor}  •  ${t.use}`, options: { color: '666666', fontSize: 10 } }
        ], { x: 5.4, y, w: 4.0, h: 0.6, fontFace: 'Arial' });
    });

    // Footnote
    slide.addText('⭐ หลักสูตรนี้ใช้ Bambu — เป็น open-source เชื่อมต่อ Yosys + OpenROAD ได้โดยตรง', {
        x: 0.5, y: 5.0, w: 9, h: 0.3,
        fontSize: 10, italic: true, color: '666666',
        fontFace: 'Arial', align: 'center'
    });

    slide.addText('5 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
