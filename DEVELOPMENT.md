# Документация проекта — Персональный сайт Аванесова Юрия

## Обзор

- Тип: персональный сайт-портфолио UX/UI дизайнера
- Репозиторий: `https://github.com/avanesov89/portfolio`
- Прод-домен: `https://avanesov-ux.ru/`
- Стек: `Next.js 16`, `React 19`, `TypeScript`, `Tailwind CSS 4`
- Формат публикации: статический экспорт `out/`
- Источник контента: локальный объект `profileData` в `src/data/profile.ts`

Проект намеренно остаётся небольшим и контентным. Основной сценарий развития — редкое обновление текста, изображений и добавление новых кейсов.

## Как Запускать Локально

```bash
npm install
npm run dev
```

Локальный dev-сервер:
- адрес: `http://localhost:3000`
- `basePath` по умолчанию пустой
- кастомный домен и GitHub Pages для локальной разработки не нужны
- `dev` запускается через `webpack`, чтобы избежать проблем Turbopack с неверно определяемым workspace root

Полезные дополнительные команды:

```bash
# линтер
npm run lint

# статический продакшен-экспорт
npm run build

# просмотр готового экспорта
npx serve out
```

Если нужно специально проверить сборку под project path GitHub Pages:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

## Архитектура

```text
src/app/
  layout.tsx            Корневой layout, метаданные, тема, локальный Inter
  page.tsx              Главная страница
  cases/[id]/page.tsx   Статическая страница кейса
  globals.css           Глобальные стили и CSS-переменные

src/components/
  Header.tsx
  Hero.tsx
  Cases.tsx
  CaseCard.tsx
  CaseContent.tsx
  ImageModal.tsx
  Experience.tsx
  AdditionalInfo.tsx
  Footer.tsx
  ThemeToggle.tsx

src/data/profile.ts     Весь контент сайта
src/types/index.ts      Типы данных
src/lib/asset-path.ts   Префикс локальных ассетов через NEXT_PUBLIC_BASE_PATH

public/images/          Изображения профиля и кейсов
public/pdfs/            PDF-файлы кейсов
public/fonts/           Локальные файлы Inter (.woff2)
public/CNAME            Кастомный домен для GitHub Pages
```

## Что Важно Помнить

### Контент

- Все тексты, опыт, кейсы, ссылки и контакты лежат в `src/data/profile.ts`.
- Новый кейс добавляется только через `profileData.cases`.
- `generateStaticParams` автоматически создаёт страницы всех кейсов при сборке.

### Ассеты

- Картинки кейсов лежат в `public/images/...`
- PDF лежат в `public/pdfs/...`
- Шрифт `Inter` лежит в `public/fonts/...`

### Шрифты

- `Inter` подключён локально через `next/font/local`
- внешних запросов к Google Fonts в production-сборке быть не должно
- веса, подключённые в проект: `100, 200, 300, 400, 400 italic, 500, 600, 700, 800, 900`

### Пути И Домен

- Для боевого домена `avanesov-ux.ru` используется корень сайта, без `basePath`
- Для локальных ассетов есть хелпер `withBasePath()`
- Если сайт когда-нибудь нужно собрать под путь вида `/portfolio`, это делается через `NEXT_PUBLIC_BASE_PATH=/portfolio`

## Стили И UI

- Тема строится на CSS-переменных в `src/app/globals.css`
- Светлая и тёмная тема переключаются через `data-theme` на `document.documentElement`
- Сетка простая: контейнер `1200px`, крупные вертикальные секции, спокойная типографика

## Деплой

- GitHub Actions собирает статический экспорт и публикует `out/`
- Если в репозитории есть `public/CNAME`, workflow считает, что сайт публикуется в корне домена и оставляет `NEXT_PUBLIC_BASE_PATH` пустым
- Если `CNAME` нет, workflow может использовать project path по имени репозитория

См. [DEPLOY.md](./DEPLOY.md) для пошаговой памятки.

## Известные Ограничения

- В проекте используются обычные `<img>`, поэтому `eslint` даёт предупреждения `@next/next/no-img-element`
- Контент обновляется вручную
- Сайт не рассчитан на сложную CMS или частое масштабирование

## Чек-лист Перед Обновлением Контента

1. Обновить `src/data/profile.ts`
2. Добавить нужные файлы в `public/images` или `public/pdfs`
3. Запустить `npm run lint`
4. Запустить `npm run build`
5. При необходимости открыть `out/` через `npx serve out`
- **Документация:** Этот файл
- **ТЗ:** `TZ_personal_site_minimal.txt` в корне рабочей папки

---

*Последнее обновление: 24 февраля 2026*
