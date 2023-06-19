import type { ResumeStyles } from "~/types";

export const DEFAULT_NAME = "New Resume";

export const DEFAULT_STYLES = {
  marginV: 55,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  themeColor: "#377bb5",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 15,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: L RMN
header:
  - text: <span class="iconify" data-icon="tabler:phone"></span> (+1) 123-456-7890
  - text: <span class="iconify" data-icon="tabler:mail"></span> lrmn.dev@gmail.com
    link: mailto:lrmn.dev@gmail.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> L RMN
    link: https://github.com/lrmn7
  - text: <span class="iconify" data-icon="tabler:brand-twitter"></span> L RMN
    link: https://www.twitter.com/romanromannya
  - text: <span class="iconify" data-icon="charm:person"></span> lrmn.is-a.dev
    link: https://lrmn.is-a.dev
  - text: <span class="iconify" data-icon="ic:outline-location-on"></span> 12345 Abc Street, Indonesia
    newLine: true
---

## Education

**UNCOT - Universitas of Codot**
  ~ Bogor, Indonesia

Akademi Humor dan Keajaiban Kuliner
  ~ 09/2021 - 01/2023

**Universitas Dapur Tawa dan Inovasi Teknologi**
  ~ Bogor, Indonesia

Diploma dalam Seni Memasak Luar Biasa
  ~ 09/2016 - 07/2020


## Publications

[~P1]: **Eating is All You Need**

    <u>L RMN</u>

    *Conference on Neural Information Processing Systems (NeurIPS)*

[~P2]: **You Only Cook Once: Unified, Real-Time Mapo Tofu Recipe**

    <u>L RMN</u>

    *Computer Vision and Pattern Recognition Conference (CVPR) **(Best Paper Honorable Mention)***


## Experience

**Master of Culinary Creativity and Innovation**
  ~ Perusahaan Kaki Pelan Teknologi
  ~ 07/2021 - Present

- Mengubah dunia kuliner dengan resep sup krim jamur yang luar biasa! Mereka bilang saya bisa bersaing dengan resep terhebat sepanjang masa, tetapi saya hanya mengubah cara memotong jamur. Publikasi dalam NeurIPS 2099 (cek P1), di mana saya memberi tahu dunia bahwa memotong jamur adalah kunci untuk kebahagiaan kuliner.
- Mengembangkan wajan ajaib yang bisa memasak makanan dengan cepat dan dengan hasil sempurna. Saya ingin memberikan kekuatan kuliner kepada para anggota tim, jadi saya menghadirkan wajan yang bisa membuat mereka terkesima dengan penemuan-penemuan mereka sendiri. Saya hampir mendapatkan Nobel untuk ini, tapi mereka bilang Nobel tidak ada kategori memasak.
- Menjadi ahli dalam memadukan bahan makanan secara tak terduga. Saya mengambil inspirasi dari Superman dan memadukan makanan yang tidak mungkin cocok bersama. Sekarang Anda bisa menikmati makanan yang sebelumnya tidak pernah terbayangkan! Saya telah menciptakan kombinasi seperti es krim pedas dan pizza cokelat. Jangan tanya saya mengapa, karena tidak ada jawaban logis untuk kejeniusan ini.
- Memenangkan kompetisi memasak internal dengan menggunakan kecerdasan buatan. Saya mengajari komputer untuk memasak seperti seorang koki terkenal, dan hasilnya, saya mengalahkan semua orang di perusahaan. Jangan khawatir, saya tidak menggantikan posisi siapapun. Namun, saya harus menghadapi tantangan baru ketika komputer tersebut meminta promosi.

**Culinary Innovation Specialist**
  ~ Laughing Spatula Culinary Productions
  ~ 08/2020 - Present

- Menjadi ilmuwan gila di dapur perusahaan! Saya menciptakan resep-resep yang aneh dan ajaib. Dari nasi goreng dengan tambahan es krim vanilla hingga smoothie dengan campuran saus BBQ, saya telah membuat makanan yang membuat orang bertanya-tanya apakah saya genetikawan makanan atau insinyur kuliner.
- Menghadapi musuh terbesar dalam memasak: panas berlebih! Saya menemukan solusi brilian dengan mengembangkan oven super canggih yang tidak hanya dapat memasak makanan dengan sempurna, tetapi juga dapat menggantikan alat pemanas ruangan di musim dingin. Kini, dapur perusahaan kami menjadi tempat yang hangat dan nyaman untuk bekerja.
- Desain Alat-Alat Dapur Futuristik: Mempelajari dan mengembangkan peralatan dapur yang revolusioner, seperti wajan super cerdas dan oven multi-fungsi.

## Awards and Honors

**Gold**, Penghargaan Ahli Pencampur Rasa Aneh - Diberikan oleh Asosiasi Kuliner Kocak
  ~ 2022

**First Prize**, Juara Kompetisi Memasak Internal dengan Kecerdasan Buatan
  ~ 2023


## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python, <span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript / <span class="iconify" data-icon="vscode-icons:file-type-typescript-official"></span> TypeScript, <span class="iconify" data-icon="vscode-icons:file-type-html"></span> HTML / <span class="iconify" data-icon="vscode-icons:file-type-css"></span> CSS, <span class="iconify" data-icon="logos:java" data-inline="false"></span> Java

**Tools and Frameworks:** Git, PyTorch, Keras, scikit-learn, Linux, Vue, React, Django, $\\LaTeX$

**Languages:** English (proficient)
`;

export const PREVIEW_SELECTOR = "#vue-smart-pages-preview";

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: circle;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} ul.crossref-list {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} li.crossref-item p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} li.crossref-item::marker {
  content: attr(data-caption);
}

${PREVIEW_SELECTOR} sup.crossref-ref {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */

.dark ${PREVIEW_SELECTOR} {
  background-color: #334155;
  color: #e5e7eb;
}

@media print {
  ${PREVIEW_SELECTOR} {
    background-color: white !important;
    color: black !important;
  }

  .dark ${PREVIEW_SELECTOR} a {
    color: black !important;
  }
}
`;
