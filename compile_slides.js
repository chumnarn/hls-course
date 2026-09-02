// compile_slides.js — Compile all slide modules into one PPTX
const pptxgen = require('pptxgenjs');

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.title = 'Introduction to High-Level Synthesis';
pres.author = 'Training Course';
pres.company = 'ASIC Design Workshop';

// Theme — clean, professional, training-friendly
const theme = {
    primary:   '003366',   // deep blue (titles, primary)
    secondary: '4A6584',   // muted blue (subtitles, secondary)
    accent:    'FF6B35',   // orange (highlights, accents)
    light:     'E8F0F7',   // light blue (panels, callouts)
    bg:        'FFFFFF'    // white background
};

for (let i = 1; i <= 30; i++) {
    const num = String(i).padStart(2, '0');
    const mod = require(`./slides/slide-${num}.js`);
    mod.createSlide(pres, theme);
    console.log(`Added slide ${num}`);
}

pres.writeFile({ fileName: 'hls-course-slides.pptx' })
    .then((file) => {
        console.log('Created:', file);
    })
    .catch((e) => {
        console.error('Error:', e);
        process.exit(1);
    });
