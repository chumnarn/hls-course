// slide-20.js — Verification Strategy
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Verification Strategy', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('C/RTL Co-Simulation — จุดแข็งของ HLS', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 13, italic: true, color: '666666', fontFace: 'Arial'
    });

    // Pyramid of verification
    const levels = [
        { name: '1. C Algorithmic', tool: 'gcc, gdb', desc: 'ตรวจ logic algorithm', color: '8BC34A' },
        { name: '2. C/RTL Co-simulation', tool: 'Bambu + Verilator', desc: 'Bambu generate Verilog + run testbench', color: '4CAF50' },
        { name: '3. RTL Standalone', tool: 'Icarus / Verilator', desc: 'ทดสอบ Verilog ตรง ๆ', color: '03A9F4' },
        { name: '4. Gate-level (post-synth)', tool: 'Icarus + SDF', desc: 'หลัง Yosys — ใช้ SDF delay', color: 'FF9800' },
        { name: '5. On Hardware', tool: 'Vivado / LiteX', desc: 'FPGA bitstream', color: 'F44336' }
    ];
    const widths = [8.0, 7.0, 6.0, 5.0, 4.0];
    levels.forEach((l, i) => {
        const w = widths[i];
        const x = (10 - w) / 2;
        const y = 1.6 + i * 0.65;
        slide.addShape('rect', {
            x, y, w, h: 0.55,
            fill: { color: l.color }, line: { color: l.color }
        });
        slide.addText([
            { text: l.name, options: { bold: true, fontSize: 12, color: 'FFFFFF' } },
            { text: '  |  ', options: { color: 'FFFFFF' } },
            { text: l.tool, options: { italic: true, fontSize: 10, color: 'FFFFFF' } },
            { text: '  — ' + l.desc, options: { fontSize: 10, color: 'FFFFFF' } }
        ], {
            x: x + 0.1, y: y + 0.05, w: w - 0.2, h: 0.45,
          fontFace: 'Arial', valign: 'middle'
        });
    });

    slide.addText('20 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
