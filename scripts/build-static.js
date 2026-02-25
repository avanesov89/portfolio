const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'deploy-static');
const OUT_DIR = path.join(__dirname, '..', 'out');

// Страницы для копирования (с указанием глубины для относительных путей)
const PAGES = [
  { src: 'index.html', dest: 'index.html', depth: 0 },
  { src: 'cases/case-1/index.html', dest: 'cases/case-1/index.html', depth: 2 },
  { src: 'cases/case-2/index.html', dest: 'cases/case-2/index.html', depth: 2 },
  { src: 'cases/case-3/index.html', dest: 'cases/case-3/index.html', depth: 2 },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function copyFile(src, dest) {
  const srcPath = path.join(OUT_DIR, src);
  const destPath = path.join(OUTPUT_DIR, dest);
  
  if (fs.existsSync(srcPath)) {
    ensureDir(path.dirname(destPath));
    fs.copyFileSync(srcPath, destPath);
    console.log(`✓ Copied: ${src} → ${dest}`);
    return true;
  } else {
    console.log(`⚠ Not found: ${src}`);
    return false;
  }
}

// Функция для конвертации абсолютных путей в относительные
function makePathsRelative(html, depth) {
  if (depth === 0) {
    // Для корневой страницы заменяем /^\/(?!\/)/ на './'
    return html
      .replace(/(href|src)="\/(?!\/)([^"]*)"/g, '$1="./$2"')
      .replace(/url\(\/(?!\/)([^)]*)\)/g, 'url(./$1)');
  } else {
    // Для вложенных страниц добавляем ../ на нужную глубину
    const prefix = '../'.repeat(depth);
    return html
      .replace(/(href|src)="\/(?!\/)([^"]*)"/g, `$1="${prefix}$3"`)
      .replace(/url\(\/(?!\/)([^)]*)\)/g, `url(${prefix}$1)`);
  }
}

// Скрипт инициализации темы
const THEME_INIT_SCRIPT = `
<script>
  (function() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  })();
</script>`;

// Скрипт переключения темы для главной страницы
const THEME_TOGGLE_SCRIPT = `
<script>
  (function() {
    document.addEventListener('DOMContentLoaded', function() {
      var toggle = document.querySelector('button[aria-label="Переключить тему"]');
      if (toggle) {
        toggle.addEventListener('click', function() {
          var currentTheme = document.documentElement.getAttribute('data-theme');
          var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
          document.documentElement.setAttribute('data-theme', newTheme);
          localStorage.setItem('theme', newTheme);
        });
      }
    });
  })();
</script>`;

// Стили для отступов параграфов в кейсах
const CASE_TEXT_STYLES = `
<style>
.case-text p {
  margin-bottom: 1.5rem;
}
.case-text p:last-child {
  margin-bottom: 0;
}
</style>`;

// Добавляем скрипт инициализации темы после <head>
function addThemeInitScript(html) {
  return html.replace('<head>', '<head>' + THEME_INIT_SCRIPT);
}

// Добавляем стили для текста кейсов
function addCaseTextStyles(html) {
  return html.replace('<head>', '<head>' + CASE_TEXT_STYLES);
}

// Добавляем скрипт переключения темы для главной
function addThemeToggleScript(html) {
  return html.replace('</head>', THEME_TOGGLE_SCRIPT + '</head>');
}

function copyStaticFiles() {
  console.log('🚀 Starting static build from out directory...\n');
  
  // Очистка и создание выходной директории
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.rmSync(OUTPUT_DIR, { recursive: true });
  }
  ensureDir(OUTPUT_DIR);
  
  // Копирование HTML страниц с конвертацией путей
  for (const page of PAGES) {
    try {
      const srcPath = path.join(OUT_DIR, page.src);
      if (fs.existsSync(srcPath)) {
        const html = fs.readFileSync(srcPath, 'utf8');
        const relativeHtml = makePathsRelative(html, page.depth);
        const htmlWithThemeInit = addThemeInitScript(relativeHtml);
        // Добавляем стили для кейсов только для страниц кейсов
        const isCasePage = page.src.startsWith('cases/');
        const isHomePage = page.src === 'index.html';
        let finalHtml = isCasePage ? addCaseTextStyles(htmlWithThemeInit) : htmlWithThemeInit;
        // Добавляем скрипт переключения темы для главной
        if (isHomePage) {
          finalHtml = addThemeToggleScript(finalHtml);
        }
        const filePath = path.join(OUTPUT_DIR, page.dest);
        ensureDir(path.dirname(filePath));
        fs.writeFileSync(filePath, finalHtml, 'utf8');
        console.log(`✓ Processed: ${page.src} → ${page.dest}`);
      } else {
        console.log(`✗ Not found: ${page.src}`);
      }
    } catch (error) {
      console.error(`✗ Error processing ${page.src}:`, error.message);
    }
  }
  
  // Копирование статических ресурсов
  console.log('\n📦 Copying static assets...\n');
  
  // Копируем CSS файлы
  copyFile('styles.css', 'styles.css');
  copyFile('case.css', 'case.css');
  
  // Копируем favicon
  copyFile('favicon.ico', 'favicon.ico');
  
  // Копируем папку images если есть
  const imagesOut = path.join(OUT_DIR, 'images');
  const imagesDest = path.join(OUTPUT_DIR, 'images');
  if (fs.existsSync(imagesOut)) {
    fs.cpSync(imagesOut, imagesDest, { recursive: true });
    console.log('✓ Copied: images/');
  }
  
  // Копируем папку pdfs если есть
  const pdfsOut = path.join(OUT_DIR, 'pdfs');
  const pdfsDest = path.join(OUTPUT_DIR, 'pdfs');
  if (fs.existsSync(pdfsOut)) {
    fs.cpSync(pdfsOut, pdfsDest, { recursive: true });
    console.log('✓ Copied: pdfs/');
  }
  
  // Копируем _next для статики (CSS, JS бандлы)
  const nextOut = path.join(OUT_DIR, '_next');
  const nextDest = path.join(OUTPUT_DIR, '_next');
  if (fs.existsSync(nextOut)) {
    fs.cpSync(nextOut, nextDest, { recursive: true });
    console.log('✓ Copied: _next/');
  }
  
  console.log('\n✅ Static build complete!');
  console.log(`📁 Output directory: ${OUTPUT_DIR}`);
}

copyStaticFiles();
