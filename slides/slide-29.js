// slide-29.js — Resources & References
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Resources & References', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Resources
    const resources = [
        { name: 'Bambu HLS', url: 'https://panda.dei.polimi.it/?page_id=31', desc: 'เอกสาร + source code' },
        { name: 'PandA Framework', url: 'github.com/ferrandi/PandA-bambu', desc: 'GitHub repository' },
        { name: 'Xilinx UG902', url: 'docs.xilinx.com', desc: 'Vitis HLS User Guide' },
        { name: 'OpenROAD', url: 'openroad.readthedocs.io', desc: 'PnR tool documentation' },
        { name: 'IHP Open PDK', url: 'github.com/IHP-GmbH/IHP-Open-PDK', desc: 'SG13G2 PDK' },
        { name: 'SKY130 PDK', url: 'skywater-pdk.readthedocs.io', desc: 'SKY130 documentation' },
        { name: 'COCOTB', url: 'docs.cocotb.org', desc: 'Python-based verification' },
        { name: 'Coussy et al.', url: '"High-Level Synthesis" (Springer 2008)', desc: 'Academic textbook' }
    ];

    resources.forEach((r, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const x = 0.5 + col * 4.6;
        const y = 1.2 + row * 0.85;
        slide.addShape('rect', {
            x, y, w: 4.3, h: 0.75,
            fill: { color: 'FAFAFA' }, line: { color: theme.accent, width: 1 }
        });
        slide.addText(r.name, {
            x: x + 0.15, y: y + 0.05, w: 4.0, h: 0.3,
            fontSize: 12, bold: true, color: theme.primary, fontFace: 'Arial'
        });
        slide.addText([
            { text: r.url, options: { fontSize: 10, color: '0066CC' } },
            { text: '  — ' + r.desc, options: { fontSize: 10, color: '666666', italic: true } }
        ], {
            x: x + 0.15, y: y + 0.35, w: 4.0, h: 0.4,
            fontFace: 'Arial'
        });
    });

    slide.addText('29 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
