// slide-06.js — HLS Compilation Flow
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('HLS Compilation Flow', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Flow diagram - 5 stages
    const stages = [
        { title: 'C/C++\nSource', color: theme.accent, desc: 'Algorithm' },
        { title: 'Frontend', color: theme.primary, desc: 'Parse + AST + CFG + IR' },
        { title: 'H-level\nTransform', color: theme.primary, desc: 'Inline, unroll, opt' },
        { title: 'Schedule + Bind', color: theme.secondary, desc: 'Time + Resource' },
        { title: 'Verilog/VHDL', color: '4CAF50', desc: 'FSM + Datapath' }
    ];

    const w = 1.7, gap = 0.1, startX = 0.4;
    stages.forEach((s, i) => {
        const x = startX + i * (w + gap);
        slide.addShape('rect', {
            x, y: 1.5, w, h: 1.4,
            fill: { color: s.color },
            line: { color: s.color }
        });
        slide.addText(s.title, {
            x, y: 1.55, w, h: 0.9,
            fontSize: 14, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        slide.addText(s.desc, {
            x, y: 2.45, w, h: 0.4,
            fontSize: 9, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', italic: true
        });
        // Arrow
        if (i < stages.length - 1) {
            slide.addText('→', {
                x: x + w - 0.05, y: 1.95, w: 0.2, h: 0.4,
                fontSize: 20, bold: true, color: theme.secondary,
                fontFace: 'Arial', align: 'center'
            });
        }
    });

    // Key takeaways
    slide.addText('Key Takeaways', {
        x: 0.5, y: 3.2, w: 9, h: 0.4,
        fontSize: 18, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    const points = [
        'Frontend ใช้ compiler infrastructure (clang/gcc) เพื่อ parse + IR',
        'H-level Transform เตรียมโครงสร้างให้ scheduler เห็น optimization opportunities',
        'Scheduling ตัดสินใจ "เวลา" — แต่ละ operation ทำใน cycle ใด',
        'Binding ตัดสินใจ "ทรัพยากร" — operation ไหนใช้ functional unit ไหน',
        'RTL Generation สร้าง FSM + Datapath + Memory + Interface'
    ];
    slide.addText(points.map(t => ({ text: t, options: { bullet: { code: '25A0' } } })), {
        x: 0.6, y: 3.65, w: 8.8, h: 1.4,
        fontSize: 12, color: '333333', fontFace: 'Arial',
        paraSpaceAfter: 4
    });

    slide.addText('6 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
