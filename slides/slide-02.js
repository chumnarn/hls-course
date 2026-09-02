// slide-02.js — Agenda / Course Overview
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    // Title
    slide.addText('Course Overview', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 32, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Three-day breakdown
    const days = [
        {
            title: 'Day 1 — Theory',
            color: theme.primary,
            items: [
                'What is HLS? (vs RTL)',
                'HLS Compilation Flow',
                'Scheduling, Binding, Allocation',
                'Coding Style & Directives',
                'Interface Synthesis',
                'Setup Bambu + Yosys + OpenROAD'
            ]
        },
        {
            title: 'Day 2 — Practice I',
            color: theme.secondary,
            items: [
                'Lab 1: Simple Adder',
                'Lab 2: FIR Filter (PIPELINE)',
                'Lab 3: MatMul (PARTITION)',
                'Lab 4: Dataflow Streaming',
                'Resource Reports & Tradeoffs',
                'C/RTL Co-simulation'
            ]
        },
        {
            title: 'Day 3 — Practice II',
            color: theme.accent,
            items: [
                'COCOTB Verification',
                'OpenROAD Flow (IHP / SKY130)',
                'Optimization Recipe',
                'Common Pitfalls',
                'Final Project: Sobel Filter',
                'Wrap-up & Q&A'
            ]
        }
    ];

    days.forEach((day, i) => {
        const x = 0.5 + i * 3.1;
        // Day card
        slide.addShape('rect', {
            x, y: 1.3, w: 2.9, h: 3.8,
            fill: { color: 'F5F7FA' },
            line: { color: day.color, width: 2 }
        });
        // Header bar
        slide.addShape('rect', {
            x, y: 1.3, w: 2.9, h: 0.5,
            fill: { color: day.color },
            line: { color: day.color }
        });
        slide.addText(day.title, {
            x: x + 0.1, y: 1.35, w: 2.7, h: 0.4,
            fontSize: 14, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center'
        });
        // Items
        const bullets = day.items.map(item => ({
            text: item,
            options: { bullet: { code: '25A0' }, color: '333333' }
        }));
        slide.addText(bullets, {
            x: x + 0.2, y: 1.9, w: 2.6, h: 3.0,
            fontSize: 11, color: '333333',
            fontFace: 'Arial', paraSpaceAfter: 4
        });
    });

    // Page number
    slide.addText('2 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
