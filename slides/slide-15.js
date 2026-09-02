// slide-15.js — Bambu HLS Overview
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Bambu HLS — Open-Source', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Why Bambu
    slide.addText('ทำไมเลือก Bambu สำหรับหลักสูตรนี้', {
        x: 0.5, y: 1.15, w: 9, h: 0.4,
        fontSize: 16, bold: true, color: theme.primary, fontFace: 'Arial'
    });
    const reasons = [
        '✓ Open-source (GPL) — ไม่ผูกกับ vendor',
        '✓ รับ C/C++ → Verilog/VHDL',
        '✓ ออกแบบมาเพื่อ ASIC flow (ไม่ใช่แค่ FPGA)',
        '✓ ใช้ร่วมกับ Yosys + OpenROAD ได้โดยตรง',
        '✓ Co-simulation กับ Verilator/Icarus/ModelSim',
        '✓ ไม่ผูกกับ Vivado/Catapult'
    ];
    slide.addText(reasons.map(r => ({ text: r, options: { color: '333333' } })), {
        x: 0.6, y: 1.6, w: 4.5, h: 2.5,
        fontSize: 12, fontFace: 'Arial', paraSpaceAfter: 4
    });

    // Install command
    slide.addShape('rect', {
        x: 5.3, y: 1.6, w: 4.2, h: 1.5,
        fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
    });
    slide.addText('Install (Ubuntu/WSL2)', {
        x: 5.4, y: 1.65, w: 4.0, h: 0.3,
        fontSize: 12, bold: true, color: 'FFD700', fontFace: 'Arial'
    });
    slide.addText([
        { text: '$ sudo apt-get install -y \\\n', options: { color: 'D4D4D4' } },
        { text: '    build-essential gcc g++ \\\n', options: { color: 'D4D4D4' } },
        { text: '    autoconf libtool \\\n', options: { color: 'D4D4D4' } },
        { text: '    libboost-all-dev libtcl-dev\n', options: { color: 'D4D4D4' } },
        { text: '$ git clone https://github.com/\n', options: { color: 'D4D4D4' } },
        { text: '    ferrandi/PandA-bambu.git\n', options: { color: 'D4D4D4' } },
        { text: '$ cd PandA-bambu && make -j', options: { color: 'D4D4D4' } }
    ], { x: 5.5, y: 1.95, w: 4.0, h: 1.1, fontSize: 10, fontFace: 'Consolas' });

    // Quick command
    slide.addShape('rect', {
        x: 5.3, y: 3.2, w: 4.2, h: 1.5,
        fill: { color: 'E8F5E9' }, line: { color: '4CAF50' }
    });
    slide.addText('Quick Run', {
        x: 5.4, y: 3.25, w: 4.0, h: 0.3,
        fontSize: 12, bold: true, color: '2E7D32', fontFace: 'Arial'
    });
    slide.addText([
        { text: '$ bambu \\\n', options: { color: '1B5E20' } },
        { text: '    --top-fname=adder \\\n', options: { color: '1B5E20' } },
        { text: '    --clock-period=10 \\\n', options: { color: '1B5E20' } },
        { text: '    --simulate \\\n', options: { color: '1B5E20' } },
        { text: '    adder.c', options: { color: '1B5E20', bold: true } }
    ], { x: 5.5, y: 3.55, w: 4.0, h: 1.1, fontSize: 10, fontFace: 'Consolas' });

    slide.addText('15 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
