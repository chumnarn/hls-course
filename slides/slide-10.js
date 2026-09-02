// slide-10.js — Arbitrary Precision Types
function createSlide(pres, theme) {
    const slide = pres.addSlide();
    slide.background = { color: 'FFFFFF' };

    slide.addText('Arbitrary Precision Data Types', {
        x: 0.5, y: 0.3, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addShape('rect', {
        x: 0.5, y: 0.95, w: 1.5, h: 0.05,
        fill: { color: theme.accent }, line: { color: theme.accent }
    });

    slide.addText('C/C++ int = 32-bit เสมอ — ไม่ตรงกับ hardware จริง', {
        x: 0.5, y: 1.15, w: 9, h: 0.3,
        fontSize: 13, italic: true, color: '666666',
        fontFace: 'Arial'
    });

    // Xilinx (Vitis)
    slide.addShape('rect', {
        x: 0.5, y: 1.55, w: 4.4, h: 3.0,
        fill: { color: 'F5F5F5' }, line: { color: theme.primary, width: 1 }
    });
    slide.addText('Xilinx (Vitis HLS)', {
        x: 0.6, y: 1.65, w: 4.2, h: 0.4,
        fontSize: 15, bold: true, color: theme.primary,
        fontFace: 'Arial'
    });
    slide.addText('#include "ap_int.h"\n\nap_int<8>   x;      // signed 8-bit\nap_uint<16> y;     // unsigned 16-bit\nap_fixed<16,8> fx; // Q8.8 fixed-point', {
        x: 0.7, y: 2.1, w: 4.1, h: 2.3,
        fontSize: 11, fontFace: 'Consolas', color: '1E1E1E'
    });

    // Bambu (Mentor ac_types)
    slide.addShape('rect', {
        x: 5.1, y: 1.55, w: 4.4, h: 3.0,
        fill: { color: 'E8F5E9' }, line: { color: '4CAF50', width: 1 }
    });
    slide.addText('Bambu (ac_types)', {
        x: 5.2, y: 1.65, w: 4.2, h: 0.4,
        fontSize: 15, bold: true, color: '2E7D32',
        fontFace: 'Arial'
    });
    slide.addText('#include "ac_int.h"\n\nac_int<8,false> x;  // unsigned 8-bit\nac_int<8,true>  y;  // signed 8-bit\nac_fixed<16,8,true,AC_RND,AC_SAT> fx;', {
        x: 5.3, y: 2.1, w: 4.1, h: 2.3,
        fontSize: 11, fontFace: 'Consolas', color: '1E1E1E'
    });

    // Why it matters
    slide.addText([
        { text: '💡 เคล็ดลับ: ', options: { bold: true, color: theme.primary } },
        { text: 'ใช้ type เล็กที่สุดเท่าที่จำเป็น → ลด area, เร็วขึ้น, power ต่ำลง', options: { color: '333333' } }
    ], {
        x: 0.5, y: 4.7, w: 9, h: 0.4,
        fontSize: 12, fontFace: 'Arial', align: 'center'
    });

    slide.addText('10 / 30', {
        x: 9.3, y: 5.1, w: 0.6, h: 0.3,
        fontSize: 10, color: theme.secondary,
        fontFace: 'Arial', align: 'right'
    });
}

module.exports = { createSlide };
