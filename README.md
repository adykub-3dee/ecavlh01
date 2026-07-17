# ECAV Liptovský Hrádok — Bootstrap 5 koncept

## Spustenie
Otvorte `index.html` v prehliadači alebo celý priečinok nahrajte do koreňa GitHub Pages repozitára.

## Technický základ
- Bootstrap 5.3.8 cez jsDelivr CDN (CSS + bundle JS s Popperom)
- vlastné CSS zachováva originálny vizuál
- Bootstrap komponenty: responsive Collapse navbar, Carousel, Modal
- demo administrácia a dáta zostávajú v localStorage
- obrázky sú optimalizované do WebP a uložené v `assets/images/`

## Fotografie
- `kostol-exterier.webp`
- `kostol-interier-lod.webp`
- `kostol-interier-kazatelnica.webp`
- `konfirmacia-2026.webp`

Pri napojení na CMS alebo Google Apps Script stačí nahradiť relatívne `src`/CSS URL adresy dynamickými URL z API. Google Drive zdieľací odkaz na priečinok sa nemá používať priamo ako `<img src>`.

## Pred produkčným nasadením
1. Overiť kontakty, osoby a termíny.
2. Nahradiť demo localStorage reálnym API/CMS.
3. Doplnit autentifikáciu administrácie.
4. Doplniť WhatsApp a podporu zboru v `SITE_CONFIG`.
5. Vyriešiť GDPR, formuláre, antispam, zálohy a monitoring.
6. Pre produkciu možno Bootstrap inštalovať cez npm a kompilovať spolu s vlastným Sass namiesto CDN.
