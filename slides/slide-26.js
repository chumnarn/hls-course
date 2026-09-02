// slide-26.js — Debugging Workflow
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Debugging Workflow', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 30, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Step-by-step debugging
    const steps = [
        { n: 1, t: 'Compile C with gcc', cmd: '$ gcc -O2 test.c -o test && ./test' },
        { n: 2, t: 'Run Bambu co-simulation', cmd: '$ bambu --top-fname=dut --simulate dut.c' },
        { n: 3, t: 'Inspect resource report', cmd: '$ cat HLS_output/HLS_synthesis_report.txt' },
        { n: 4, t: 'Inspect generated Verilog', cmd: '$ less HLS_output/verilog/dut.v' },
        { n: 5, t: 'Generate waveform for cycle-accurate', cmd: '$ bambu --simulate --generate-vcd --vcd-fname=trace.vcd' },
        { n: 6, t: 'Open waveform in GTKWave', cmd: '$ gtkwave trace.vcd' }
    ];

    steps.forEach((s, i) => {
        const y = 1.2 + i * 0.6;
        // Step number
        slide.addShape('ellipse', {
            x: 0.5, y, w: 0.5, h: 0.5,
            fill: { color: theme.accent }, line: { color: theme.accent }
        });
        slide.addText(String(s.n), {
            x: 0.5, y, w: 0.5, h: 0.5,
            fontSize: 16, bold: true, color: 'FFFFFF',
            fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        // Description
        slide.addText(s.t, {
            x: 1.1, y: y + 0.05, w: 3.5, h: 0.4,
            fontSize: 12, bold: true, color: theme.primary,
            fontFace: 'Arial', valign: 'middle'
        });
        // Command
        slide.addShape('rect', {
            x: 4.7, y: y + 0.05, w: 4.8, h: 0.4,
            fill: { color: '1E1E1E' }, line: { color: '1E1E1E' }
        });
        slide.addText(s.cmd, {
            x: 4.8, y: y + 0.05, w: 4.6, h: 0.4,
            fontSize: 10, fontFace: 'Consolas', color: 'D4D4D4',
            valign: 'middle'
        });
    });

    slide.addText('26 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
