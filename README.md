# Galicyjska Horda — strona hodowli (Astro)

## Dlaczego Astro?
Wybrałem **Astro**, ponieważ bardzo dobrze nadaje się do szybkich, statycznych i SEO-friendly stron opartych o treści w Markdown. Astro generuje lekki HTML, wspiera content collections i dobrze sprawdza się przy stronach wizytówkowo-informacyjnych bez backendu.

## Uruchomienie lokalne
1. `npm install`
2. `npm run dev`
3. Otwórz `http://localhost:4321`

Build produkcyjny:
- `npm run build`
- `npm run preview`

## Dodawanie treści (CMS bez serwera)
Treści znajdują się w `src/content/`:
- `breeds/` — podstrony ras
- `dogs/` — profile psów
- `news/` — aktualności (Markdown)
- `litters/` — sekcja szczeniąt/miotów

Po dodaniu plików Markdown strony wygenerują się automatycznie podczas builda.

## Jak zmienić status „Szczenięta dostępne / Brak szczeniąt”
Edytuj flagę w `src/config.json`:
- `"availablePuppies": true` → „Szczenięta dostępne”
- `"availablePuppies": false` → „Obecnie brak szczeniąt”

## Formularz kontaktowy bez backendu
Aktualnie formularz działa przez `mailto:`.

### Opcja Formspree
1. Załóż formularz w Formspree.
2. W `src/pages/kontakt.astro` podmień `action` formularza na endpoint Formspree.
3. Ustaw metodę `POST` i pola wg dokumentacji Formspree.

### Opcja Netlify Forms
1. Na formularzu ustaw `data-netlify="true"` i `name="kontakt"`.
2. Dodaj ukryte pole `form-name`.
3. Wdróż na Netlify.

## SEO
- Meta title/description i OpenGraph są ustawiane w `src/layouts/BaseLayout.astro`.
- Sitemap generuje `@astrojs/sitemap`.
- `robots.txt` jest w `public/robots.txt`.

## Podmiana zdjęć (placeholders → produkcja)
Placeholdery są w `public/placeholders/`.

### Nazwy plików do podmiany
- `hero.svg`
- `cane-corso-1.svg`, `cane-corso-2.svg`, `cane-corso-3.svg`
- `buldog-1.svg`, `buldog-2.svg`
- `cavalier-1.svg`, `cavalier-2.svg`
- `gallery-1.svg`, `gallery-2.svg`, `gallery-3.svg`

### Zalecenia produkcyjne
- Format: `webp` (zalecany) lub `jpg`.
- Rozmiar bazowy: min. `1600x1067` dla hero i galerii, `1200x800` dla kart.
- Waga: najlepiej < 300 KB na zdjęcie.

Jeśli zmieniasz rozszerzenia (np. `.svg` → `.webp`), zaktualizuj ścieżki w:
- `src/content/breeds/*.md`
- `src/content/dogs/*.md`
- `src/pages/index.astro`
- `src/layouts/BaseLayout.astro` (OG image)

## Wdrożenie
### Vercel
1. Import repozytorium.
2. Build command: `npm run build`
3. Output: `dist`

### Netlify
1. Import repozytorium.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Struktura plików
```text
.
├── astro.config.mjs
├── package.json
├── public
│   ├── placeholders
│   └── robots.txt
├── src
│   ├── components
│   │   ├── CTAButtons.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro
│   │   ├── Header.astro
│   │   └── PuppyStatus.astro
│   ├── config.json
│   ├── content
│   │   ├── breeds
│   │   ├── dogs
│   │   ├── litters
│   │   ├── news
│   │   └── config.ts
│   ├── layouts
│   │   └── BaseLayout.astro
│   ├── pages
│   │   ├── aktualnosci
│   │   ├── kontakt.astro
│   │   ├── nasze-psy
│   │   ├── o-hodowli
│   │   ├── polityka-prywatnosci.astro
│   │   ├── rasy
│   │   ├── rodo.astro
│   │   ├── szczenieta
│   │   └── index.astro
│   └── styles
│       └── global.css
└── tsconfig.json
```

## Checklista przed produkcją
- [ ] Uzupełnij prawdziwe dane kontaktowe (`src/config.json`).
- [ ] Podmień wszystkie zdjęcia placeholder na docelowe.
- [ ] Uzupełnij treści przykładowe oznaczone jako `[PRZYKŁADOWE]`.
- [ ] Uzupełnij sekcje „Polityka prywatności” i „RODO”.
- [ ] Ustaw prawidłowy adres strony w `astro.config.mjs`.
- [ ] Zweryfikuj metadane SEO i OG image.
- [ ] (Opcjonalnie) Podłącz Formspree lub Netlify Forms.
