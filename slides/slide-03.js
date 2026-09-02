// slide-03.js — What is HLS?
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('High-Level Synthesis คืออะไร?', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 32, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    // Definition box
    slide.addShape('rect', {
        x: 0.5, y: 1.3, w: 9, h: 1.0,
        fill: { color: 'F0F7FF' },
        line: { color: theme.primary, width: 1 }
    });
    slide.addText([
        { text: 'HLS = ', options: { bold: true, color: theme.primary, fontSize: 16 } },
        { text: 'กระบวนการแปลงภาษาระดับสูง (C / C++ / SystemC) ', options: { fontSize: 14 } },
        { text: 'ไปเป็น Register-Transfer Level (RTL/Verilog) โดยอัตโนมัติ', options: { fontSize: 14, bold: true } }
    ], {
        x: 0.7, y: 1.4, w: 8.6, h: 0.8,
        fontFace: 'Arial', valign: 'middle'
    });

    // The key insight
    slide.addText('แนวคิดหลัก', {
        x: 0.5, y: 2.5, w: 9, h: 0.4,
        fontSize: 18, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });

    // Two columns: what vs how
    slide.addShape('rect', {
        x: 0.5, y: 3.0, w: 4.3, h: 2.0,
        fill: { color: 'E8F5E9' },
        line: { color: '4CAF50', width: 1 }
    });
    slide.addText('WHAT — ทำอะไร', {
        x: 0.6, y: 3.1, w: 4.1, h: 0.35,
        fontSize: 14, bold: true, color: '2E7D32',
        fontFace: 'Arial'
    });
    slide.addText('นักออกแบบอธิบาย algorithm ในระดับสูง:\n• การคำนวณ (a + b)\n• โครงสร้างข้อมูล (array, stream)\n• ลำดับ (loop, if-else)\n• Optimization hints (pragma)', {
        x: 0.6, y: 3.5, w: 4.1, h: 1.4,
        fontSize: 12, color: '333333',
        fontFace: 'Arial'
    });

    slide.addShape('rect', {
        x: 5.2, y: 3.0, w: 4.3, h: 2.0,
        fill: { color: 'FFF3E0' },
        line: { color: 'FF9800', width: 1 }
    });
    slide.addText('HOW — ทำอย่างไร', {
        x: 5.3, y: 3.1, w: 4.1, h: 0.35,
        fontSize: 14, bold: true, color: 'E65100',
        fontFace: 'Arial'
    });
    slide.addText('HLS tool ตัดสินใจ:\n• Scheduling (จัดสรรเวลา)\n• Resource allocation (เลือกฮาร์ดแวร์)\n• Binding (map operation → unit)\n• Memory architecture (BRAM, register)', {
        x: 5.3, y: 3.5, w: 4.1, h: 1.4,
        fontSize: 12, color: '333333',
        fontFace: 'Arial'
    });

    slide.addText('3 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
