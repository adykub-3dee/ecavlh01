# ECAV Liptovský Hrádok — Bootstrap 5 web

Redizajn webu Cirkevného zboru ECAV Liptovský Hrádok. Zachováva pôvodný vizuálny smer poslednej verzie, zjednocuje opakujúce sa informácie a dopĺňa organizačnú štruktúru zboru.

## Nahratie do repozitára

1. Rozbaľte ZIP balík.
2. Nahrajte obsah balíka do koreňa repozitára (nie nadradený priečinok).
3. Zachovajte rovnakú štruktúru priečinkov `assets/css`, `assets/js` a `assets/images`.
4. Otvorte GitHub Pages alebo bežný webhosting a overte `index.html`.

Web nevyžaduje zostavenie ani npm. Bootstrap 5.3.8 sa načítava cez jsDelivr CDN.

## Štruktúra

```text
index.html
assets/
  css/styles.css
  js/app.js
  images/
README.md
POPIS-A-FUNKCIONALITA.txt
```

## Čo je upravené

- programové karty a pravidelné položky kalendára používajú jeden spoločný zoznam `REGULAR_MEETINGS`,
- oznamy sa zobrazujú v responzívnej štvorstĺpcovej mriežke,
- podporované sú dlhodobé oznamy aj jednorazové akcie,
- akcie sa automaticky prepájajú s kalendárom,
- akcia môže mať dátum od–do, čas, miesto, plagát a odkaz,
- po skončení sa akcia skryje z kariet, ale zostane v histórii kalendára,
- plagát možno v deme nahrať zo zariadenia alebo zadať jeho cestu/URL,
- filtre oddeľujú všetky oznamy, aktuálne akcie a dlhodobé oznamy,
- na mobile sa dá prepnúť medzi najbližšími udalosťami a mesačným kalendárom,
- všetkých šesť kariet v sekcii „Život zboru“ je rozklikávacích,
- detail oblasti môže obsahovať dlhší opis, praktické body, voliteľnú fotografiu, kontakt a odkaz,
- pod kontaktmi je rozbaľovacia organizačná štruktúra zboru,
- logo, CSS a JavaScript sú oddelené od HTML,
- úvodný carousel má ovládanie pozastavenia a rešpektuje obmedzenie pohybu v systéme,
- demo koliesko administrácie zostáva zachované.

## Kde upravovať obsah

- pravidelný program: `REGULAR_MEETINGS` v `assets/js/app.js`,
- rozklikávacie oblasti Deti, Dorast a mládež, Modlitby, Dospelí a rodiny, Hudba a médiá a Pomoc a sprevádzanie: `LIFE_AREAS` v `assets/js/app.js`,
- predvolené oznamy: `defaultAnnouncements` v `assets/js/app.js`,
- WhatsApp a podpora zboru: `SITE_CONFIG` v `assets/js/app.js`,
- organizačná štruktúra a kontakty: sekcia `#kontakt` v `index.html`,
- farby a vzhľad: `assets/css/styles.css`.

## Demo administrácia

Koliesko v hlavičke otvára demo administráciu. Zmeny sa ukladajú iba do `localStorage` konkrétneho prehliadača. Rozhranie zatiaľ nemá server, databázu, používateľské účty ani produkčné zabezpečenie.

Plagát vybraný zo zariadenia sa pre demo zmenší a uloží do `localStorage`. Neodošle sa na GitHub ani na server. Pre ostrú verziu použite CMS/cloudové úložisko alebo cestu k obrázku v `assets/images/`.

Podrobný dátový tok, správanie kalendára a návod na správu plagátov sú v `POPIS-A-FUNKCIONALITA.txt`.

## Pred ostrým nasadením

1. Potvrdiť osoby, telefónne čísla a pravidelné termíny.
2. Doplniť reálny WhatsApp odkaz a údaje podpory zboru.
3. Nahradiť demo `localStorage` reálnym CMS/API a autentifikáciou.
4. Pripojiť dokumenty a galériu k vybranému úložisku.
5. Doriešiť GDPR, formuláre, antispam, zálohy a monitoring.
