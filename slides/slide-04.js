// slide-04.js — RTL vs HLS Comparison
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('RTL Design vs High-Level Synthesis', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Comparison table
    const rows = [
        [
            { text: 'มิติ', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'RTL Design (Manual)', options: { bold: true, color: 'FFFFFF', fill: { color: theme.primary }, align: 'center' } },
            { text: 'High-Level Synthesis', options: { bold: true, color: 'FFFFFF', fill: { color: theme.accent }, align: 'center' } }
        ],
        [
            { text: 'ภาษา', options: { bold: true } },
            { text: 'Verilog / VHDL / SystemVerilog' },
            { text: 'C / C++ / SystemC' }
        ],
        [
            { text: 'ระดับนามธรรม', options: { bold: true } },
            { text: 'Cycle-accurate' },
            { text: 'Algorithmic / behavioral' }
        ],
        [
            { text: 'เวลาในการออกแบบ', options: { bold: true } },
            { text: 'ช้า (วัน–สัปดาห์/บล็อก)' },
            { text: 'เร็ว (ชั่วโมง)' }
        ],
        [
            { text: 'ควบคุม micro-arch', options: { bold: true } },
            { text: 'เต็มที่' },
            { text: 'ผ่าน directives/pragmas' }
        ],
        [
            { text: 'Design Space Exploration', options: { bold: true } },
            { text: 'เขียน RTL หลายเวอร์ชัน' },
            { text: 'เปลี่ยน directive แล้วรันใหม่' }
        ],
        [
            { text: 'QoR (Area/Timing)', options: { bold: true } },
            { text: 'ขึ้นกับความเชี่ยวชาญ' },
            { text: 'ดีใกล้เคียงกันเมื่อปรับ directive' }
        ],
        [
            { text: 'Verification', options: { bold: true } },
            { text: 'HDL testbench แยก' },
            { text: 'C testbench ใช้ร่วมได้ (C/RTL co-sim)' }
        ]
    ];

    slide.addTable(rows, {
        x: 0.5, y: 1.3, w: 9, h: 3.5,
        fontSize: 12, fontFace: 'Arial',
        border: { type: 'solid', pt: 0.5, color: 'CCCCCC' },
        colW: [2.2, 3.4, 3.4],
        rowH: 0.42
    });

    slide.addText('4 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
