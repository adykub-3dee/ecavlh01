"use strict";

    /* =========================================================
       1. DEMO DATA LAYER
       Replace this section with API/CMS calls in production.
       ========================================================= */
    const STORAGE = {
      announcements: "ecavlh-demo-announcements-v4",
      events: "ecavlh-demo-events-v1",
      theme: "ecavlh-demo-theme-v1"
    };

    /*
      CENTRÁLNE PRAKTICKÉ ODKAZY PRE REALIZAČNÚ FIRMU
      -------------------------------------------------
      Doplňte reálny pozývací odkaz WhatsApp komunity a stránku/platbu podpory.
      Pokiaľ je hodnota prázdna, koncept namiesto otvorenia odkazu zobrazí upozornenie.
    */
    const SITE_CONFIG = {
      whatsappCommunityUrl: "",
      givingUrl: ""
    };

    /* =========================================================
       1B. CLIENT-SIDE SK / EN LANGUAGE LAYER
       Static interface strings are translated here. Content entered by an
       administrator remains in the language in which it was entered; a future
       CMS should provide dedicated SK and EN fields for user-managed content.
       ========================================================= */
    const I18N_EN = {"ECAV Liptovský Hrádok | Spoločenstvo viery":"ECAV Liptovský Hrádok | Community of Faith","Preskočiť na obsah":"Skip to content","Cirkevný zbor":"Church congregation","Aktuality":"News","Kalendár":"Calendar","Stretnutia":"Gatherings","Život zboru":"Church life","Dokumenty":"Documents","Kontakt":"Contact","Najbližší program":"Upcoming programme","Otvoriť demo administráciu":"Open demo administration","Demo administrácia":"Demo administration","Otvoriť menu":"Open menu","Hlavná navigácia":"Main navigation","Výber jazyka":"Language selection","Užitočné externé odkazy":"Useful external links","Predchádzajúca fotografia":"Previous photo","Nasledujúca fotografia":"Next photo","Exteriér kostola":"Church exterior","Interiér kostola":"Church interior","Konfirmácia":"Confirmation","Kazateľnica a oltár":"Pulpit and altar","Evanjelický a. v. cirkevný zbor":"Evangelical Church of the Augsburg Confession","Miesto pre":"A place for","vieru, nádej":"faith, hope","a spoločenstvo.":"and community.","Sme spoločenstvom ľudí v Liptovskom Hrádku, ktorí sa stretávajú pri Božom slove, modlitbe a službe druhým. Dvere sú otvorené pre všetky generácie.":"We are a community in Liptovský Hrádok gathering around God’s Word, prayer and service to others. Our doors are open to every generation.","Pozrieť kalendár":"View calendar","Ako nás nájdete":"How to find us","Každú nedeľu":"Every Sunday","Služby Božie":"Worship service","Najbližšia nedeľa":"Next Sunday","Detská besiedka prebieha súbežne o 09:00.":"Children’s programme runs at the same time at 09:00.","Najbližšie pravidelné služby Božie":"Upcoming regular worship service","WhatsApp komunita":"WhatsApp community","Oznamy a život zboru v mobile":"News and church life on your phone","Pravidelný program":"Regular programme","Stretnutia počas týždňa":"Gatherings during the week","Správy a zborový časopis":"Reports and church magazine","Kontakt a mapa":"Contact and map","Farský úrad a vedenie":"Church office and leadership","Kostol v Liptovskom Hrádku":"Church in Liptovský Hrádok","Miesto slova":"A place of the Word","Živé spoločenstvo":"A living community","Priestor pokoja":"A place of peace","Stále po ruke":"Always at hand","Trvalé oznamy a praktické odkazy.":"Permanent notices and practical links.","Informácie, ktoré sa nemenia každý týždeň a nemajú dátum skončenia. V demo administrácii ich možno upravovať rovnako ako bežné oznamy.":"Information that does not change every week and has no expiry date. In the demo administration it can be edited just like regular notices.","WhatsApp zborová komunita":"Church WhatsApp community","Rýchle oznamy, pripomienky podujatí a praktické informácie priamo v mobile.":"Quick notices, event reminders and practical information directly on your phone.","Pridať sa do komunity →":"Join the community →","Modlitebná prosba":"Prayer request","Pošlite prosbu o modlitbu alebo požiadajte o osobný rozhovor.":"Send a prayer request or ask for a personal conversation.","Napísať dôvernú správu →":"Write a confidential message →","Potrebujem pomoc":"I need help","Pastorálny rozhovor, návšteva chorého alebo praktická otázka pre farský úrad.":"A pastoral conversation, a visit to someone who is ill, or a practical question for the church office.","Zavolať na farský úrad →":"Call the church office →","Podpora zboru":"Support the congregation","Miesto pre číslo účtu, QR platbu alebo stránku s možnosťami podpory služby zboru.":"A place for bank details, QR payment or a page describing ways to support the congregation’s ministry.","Zobraziť možnosti podpory →":"View support options →","Aktuálne v zbore":"Current church news","Oznamy na jednom mieste.":"All notices in one place.","Najdôležitejšie informácie pre členov zboru aj návštevníkov. V ostrej verzii sa budú publikovať cez administračné prostredie.":"The most important information for congregation members and visitors. In the production version it will be published through the administration system.","Najbližšie stretnutie":"Next gathering","Nedeľné Služby Božie":"Sunday Worship Service","Každú nedeľu o 09:00 v evanjelickom kostole na Hviezdoslavovej ulici v Liptovskom Hrádku.":"Every Sunday at 09:00 in the Evangelical church on Hviezdoslavova Street in Liptovský Hrádok.","Pozrieť pravidelný program →":"View regular programme →","Otvoriť súvisiacu informáciu":"Open related information","Bez dátumu":"No date","Trvalý oznam":"Permanent notice","Zatiaľ nie sú publikované žiadne časové oznamy.":"No dated notices have been published yet.","Zatiaľ nie sú publikované žiadne trvalé oznamy.":"No permanent notices have been published yet.","Kedy sa stretneme?":"When do we meet?","Kalendár zobrazuje pravidelný program a udalosti pridané cez demo administráciu. Kliknutím na deň zobrazíte jeho program.":"The calendar shows the regular programme and events added through the demo administration. Select a day to see its programme.","Dnes":"Today","Po":"Mon","Ut":"Tue","St":"Wed","Št":"Thu","Pi":"Fri","So":"Sat","Ne":"Sun","Najbližšie udalosti":"Upcoming events","Pravidelné aj jednorazové stretnutia":"Regular and one-off gatherings","Bez programu":"No programme","Dnešný program":"Today’s programme","Miesto bude upresnené":"Location to be confirmed","V tento deň nie je evidovaná udalosť.":"No event is listed for this day.","pravidelné":"regular","udalosť":"event","udalostí":"events","stretnutia/udalosti":"gatherings/events","Týždeň v našom zbore.":"A week in our congregation.","Program je zostavený z verejne dostupných informácií pôvodného webu. Mimoriadne zmeny a sviatočné termíny patria do sekcie Aktuality.":"The programme is based on publicly available information from the original website. Special changes and holiday dates belong in the News section.","Nedeľa":"Sunday","Spoločné bohoslužobné stretnutie v evanjelickom kostole na Hviezdoslavovej ulici.":"A shared worship service in the Evangelical church on Hviezdoslavova Street.","Detská besiedka":"Children’s programme","Program pre deti prebieha počas Služieb Božích, zvyčajne v hornej miestnosti kostola.":"The children’s programme takes place during the worship service, usually in the upper room of the church.","Streda":"Wednesday","podľa oznamov":"see current notices","Modlitebné spoločenstvo":"Prayer fellowship","Pravidelné stretnutie pri modlitbe za zbor, rodiny, mesto a aktuálne potreby.":"A regular time of prayer for the congregation, families, the town and current needs.","Každý 2. piatok":"Every second Friday","Stretnutie mužov":"Men’s gathering","Neformálny spoločný čas mužov v hornej miestnosti, rozhovory a duchovné povzbudenie.":"An informal gathering for men in the upper room, with conversation and spiritual encouragement.","Počas týždňa":"During the week","aktuálne":"current","Dorast a mládež":"Teenagers and youth","Stretnutia, výlety, tábory a spoločné aktivity. Presný termín je vhodné zverejňovať v aktuálnych oznamoch.":"Gatherings, trips, camps and shared activities. Exact dates should be published in current notices.","Podľa dohody":"By arrangement","kontakt":"contact","Pastorálna služba":"Pastoral care","Rozhovor, duchovné sprevádzanie, návšteva chorých alebo príprava sviatostí a obradov.":"Conversation, spiritual guidance, visits to the sick, or preparation for sacraments and ceremonies.","Poznámka pre ostrý web: časy bez presného verejného údaja treba pred nasadením potvrdiť a spravovať cez administráciu.":"Production note: times without a confirmed public source should be verified before launch and managed through the administration system.","Spoločne pred Bohom":"Together before God","„Kde sú dvaja alebo traja zhromaždení v mojom mene, tam som medzi nimi.“":"“For where two or three gather in my name, there am I with them.”","Spoločenstvo viery sa tvorí pri Božom slove, modlitbe, sviatostiach aj vo vzájomnej službe.":"A community of faith is formed around God’s Word, prayer, the sacraments and mutual service.","Spoločenstvo pre každú generáciu.":"A community for every generation.","Cirkevný zbor nie je iba nedeľné stretnutie. Je to priestor pre rast, priateľstvá, službu a praktickú pomoc.":"A church congregation is more than a Sunday gathering. It is a place for growth, friendship, service and practical help.","Deti":"Children","Detská besiedka, tvorivé aktivity a priestor, kde deti primerane svojmu veku spoznávajú biblické príbehy.":"Children’s programme, creative activities and an age-appropriate space to discover Bible stories.","Stretnutia mladých, výlety, tábory, rozhovory a hľadanie odpovedí na dôležité životné otázky.":"Youth gatherings, trips, camps, conversations and a search for answers to important questions of life.","Modlitby":"Prayer","Modlitebné spoločenstvo je jedným z dôležitých pilierov života zboru a pravidelne sa stretáva v stredu.":"Prayer fellowship is one of the important pillars of congregational life and meets regularly on Wednesdays.","Dospelí a rodiny":"Adults and families","Biblické vzdelávanie, rodinné aktivity, stretnutia mužov a ďalšie príležitosti na budovanie vzťahov.":"Bible learning, family activities, men’s gatherings and other opportunities to build relationships.","Hudba a médiá":"Music and media","Spev, hudobná služba, audionahrávky, zborový časopis a zachytávanie života spoločenstva.":"Singing, music ministry, audio recordings, the church magazine and stories from the life of the community.","Pomoc a sprevádzanie":"Help and guidance","Pastorálna starostlivosť, sprevádzanie zarmútených a praktická pomoc ľuďom v náročných obdobiach.":"Pastoral care, support for the bereaved and practical help for people going through difficult times.","Praktické informácie":"Practical information","Sviatosti, obrady a životné udalosti.":"Sacraments, ceremonies and milestones.","Jasné prvé informácie a jednoduchý kontakt na farský úrad. Konkrétny postup sa vždy dohodne osobne.":"Clear initial information and an easy way to contact the church office. The details are always arranged personally.","Krst":"Baptism","Informácie o príprave krstu dieťaťa alebo dospelého a dohodnutie termínu.":"Information about preparing for the baptism of a child or adult and arranging a date.","Napísať na farský úrad →":"Write to the church office →","Príprava mladých ľudí k osobnému vyznaniu viery a aktívnemu životu v cirkevnom zbore.":"Preparing young people for a personal confession of faith and active life in the congregation.","Získať informácie →":"Get information →","Sobáš":"Wedding","Príprava cirkevného sobáša, potrebné dokumenty a dohoda termínu obradu.":"Preparation for a church wedding, required documents and arranging the ceremony date.","Kontaktovať zbor →":"Contact the congregation →","Pohreb a sprevádzanie":"Funeral and support","Dohodnutie pohrebného obradu a duchovná podpora rodiny v období zármutku.":"Arranging a funeral service and providing spiritual support to the family in a time of grief.","Zavolať administrátorovi →":"Call the minister →","Súčasť služby zboru":"Part of the congregation’s ministry","Cirkevná materská škola Koráb.":"Koráb Church Kindergarten.","Škôlka vytvára pre deti bezpečné a podnetné prostredie. Štátny vzdelávací program dopĺňa o výchovu založenú na biblických príbehoch a kresťanských hodnotách.":"The kindergarten creates a safe and stimulating environment for children. It complements the national curriculum with education based on Bible stories and Christian values.","Informácie o škole, dokumenty, galéria a aktuálna nástenka na samostatnom webe.":"School information, documents, a gallery and current notices are available on its dedicated website.","Priestor, v ktorom sa vzdelávanie spája s prijatím, tvorivosťou a Božou láskou.":"A place where education is joined with acceptance, creativity and God’s love.","Praktický kontakt pre rodičov aj záujemcov o prijatie dieťaťa.":"Practical contact information for parents and families interested in enrolment.","Navštíviť web CMŠ Koráb":"Visit the Koráb website","Kontakt školy":"School contact","Areál CMŠ Koráb":"Koráb kindergarten grounds","Na stiahnutie":"Downloads","Dokumenty a zborový časopis.":"Documents and church magazine.","V ostrej verzii môže byť táto sekcia napojená na Google Disk alebo cloudové úložisko a dokumenty sa budú spravovať cez administráciu.":"In the production version this section can be connected to Google Drive or cloud storage, with documents managed through the administration system.","Otvoriť pôvodný archív":"Open the original archive","Kňazská správa za rok 2025":"Minister’s report for 2025","Výročná správa cirkevného zboru":"Annual report of the congregation","Stiahnuť":"Download","Hrádocký prameň":"Hrádocký prameň","Zborový časopis — archív vydaní":"Church magazine — issue archive","Archív":"Archive","Tlačivá a žiadosti":"Forms and applications","Miesto pre formuláre spravované administrátorom":"A place for forms managed by the administrator","Vyžiadať":"Request","Fotografie z podujatí":"Event photographs","Budúce napojenie na albumy a Google Disk":"Future connection to albums and Google Drive","Galéria":"Gallery","Momenty zo života spoločenstva.":"Moments from the life of the community.","Výber reálnych fotografií kostola a zborového života. Kliknutím sa fotografia otvorí vo väčšom náhľade; realizačná firma môže galériu napojiť na CMS, Google Drive API alebo iné úložisko.":"A selection of real photographs of the church and congregational life. Select a photo to open a larger view; the development team can connect the gallery to a CMS, Google Drive API or another storage service.","Konfirmácia 2026":"Confirmation 2026","Slávnostné spoločenstvo":"A celebratory gathering","Náš kostol":"Our church","Priestor bohoslužieb":"Worship space","Miesto slova a modlitby":"A place of the Word and prayer","Fotografia zo života zboru":"Photo from congregational life","„Túžime byť miestom, kde človek nájde prijatie, pokoj a povzbudenie z Božieho slova.“":"“We long to be a place where people find acceptance, peace and encouragement from God’s Word.”","O našom zbore":"About our congregation","Viera zakorenená v Liptove.":"Faith rooted in Liptov.","Liptovský Hrádok bol v minulosti diaspórou Svätopeterského zboru, do ktorého patrilo sedem obcí. Počas obdobia prvej Československej republiky v meste narástol počet evanjelikov a postupne sa rozvíjal samostatný zborový život.":"Historically, Liptovský Hrádok was part of the Svätý Peter congregation, which included seven villages. During the first Czechoslovak Republic, the number of Lutherans in the town grew and an independent congregational life gradually developed.","Dnes zbor vytvára priestor pre bohoslužby, deti, mladých, dospelých, modlitby, pastorálnu službu aj spoločné podujatia. Nový web má tieto oblasti predstaviť zrozumiteľne a umožniť ich jednoduchú správu.":"Today the congregation provides space for worship, children, young people, adults, prayer, pastoral care and shared events. The new website presents these areas clearly and makes them easier to manage.","nedeľné Služby Božie":"Sunday worship service","7 dní":"7 days","priestor pre život viery":"space for a life of faith","všetci":"everyone","generácie vítané":"all generations welcome","Ozvite sa alebo príďte medzi nás.":"Get in touch or come and join us.","Kontaktné údaje sú prevzaté z verejne indexovanej kontaktnej stránky pôvodného webu. Pred ostrým publikovaním ich treba administratívne potvrdiť.":"The contact details were taken from the publicly indexed contact page of the original website. They should be formally confirmed before publication.","Farský úrad a kostol":"Church office and church","každú nedeľu o 09:00":"every Sunday at 09:00","Otvoriť v Google Maps →":"Open in Google Maps →","administrátor zboru":"minister administering the congregation","zborový dozorca":"congregational supervisor","zástupkyňa zborového dozorcu":"deputy congregational supervisor","všeobecné otázky, dokumenty a termíny":"general questions, documents and appointments","Funkčný HTML koncept nového webu zboru. Obsah aj funkcie sú pripravené na ďalšie napojenie na CMS, databázu a úložisko dokumentov.":"A functional HTML concept for the congregation’s new website. The content and features are ready for connection to a CMS, database and document storage.","Web":"Website","Program":"Programme","Dospelí":"Adults","Sviatosti a obrady":"Sacraments and ceremonies","O škôlke":"About the kindergarten","Web školy ↗":"School website ↗","Užitočné odkazy:":"Useful links:","Pôvodný web ECAV LH":"Original ECAV LH website","ECAV na Slovensku":"ECAV in Slovakia","Evanjelická diakonia":"Evangelical Diaconia","Mesto Liptovský Hrádok":"Town of Liptovský Hrádok","Evanjelický a. v. cirkevný zbor Liptovský Hrádok":"Evangelical Church of the Augsburg Confession, Liptovský Hrádok","HTML koncept · bez databázy · demo administrácia používa localStorage":"HTML concept · no database · demo administration uses localStorage","Demo admin":"Demo admin","Lokálny funkčný náhľad bez databázy.":"Local functional preview without a database.","Zatvoriť administráciu":"Close administration","Toto nie je zabezpečené produkčné rozhranie. Zmeny sa ukladajú iba v tomto prehliadači cez localStorage. Oznam môže byť časový alebo trvalý bez dátumu.":"This is not a secure production interface. Changes are saved only in this browser via localStorage. A notice can be dated or permanent.","Oznamy":"Notices","Udalosti":"Events","Vzhľad":"Appearance","Kategória":"Category","Oznam":"Notice","Bohoslužby":"Worship","Komunita":"Community","Praktické":"Practical","Pozvánka":"Invitation","Dátum":"Date","Trvalý oznam bez dátumu":"Permanent notice without a date","Zobrazí sa v sekcii „Stále po ruke“ a nebude sa viazať na kalendárny dátum.":"It will appear in the “Always at hand” section and will not be tied to a calendar date.","Nadpis":"Title","Text":"Text","Text odkazu":"Link text","(voliteľné)":"(optional)","Cieľ odkazu":"Link destination","Uložiť oznam":"Save notice","Zrušiť úpravu":"Cancel editing","Názov udalosti":"Event name","Čas":"Time","Miesto":"Location","Popis":"Description","Uložiť udalosť":"Save event","Farebný filter úvodných fotografií":"Colour filter for hero photographs","Výber upraví prekrytie fotografií a uloží sa v prehliadači. Produkčná verzia môže fotografie aj filter spravovať cez CMS.":"The selection changes the photo overlay and is saved in the browser. In production, photos and filters can be managed through a CMS.","Prirodzené":"Natural","Teplé":"Warm","Tmavé":"Dark","Obnoviť pôvodné demo dáta":"Restore original demo data","Upraviť":"Edit","Zmazať":"Delete","trvalý oznam":"permanent notice","Zatiaľ nebola pridaná vlastná udalosť.":"No custom event has been added yet.","Aktuálny program a zmeny bohoslužieb":"Current programme and worship changes","Sviatočné termíny a mimoriadne zmeny pravidelného programu budú zverejnené v kalendári a časových oznamoch.":"Holiday dates and exceptional changes to the regular programme will be published in the calendar and dated notices.","Výročná správa je dostupná v sekcii Dokumenty na stiahnutie.":"The annual report is available in the Documents section.","Aktuálne termíny sledujte v kalendári":"Follow current dates in the calendar","Mimoriadne podujatia, sviatočné bohoslužby a zmeny pravidelného programu budú zverejnené v kalendári a oznamoch.":"Special events, holiday services and changes to the regular programme will be published in the calendar and notices.","Rozhovor a duchovné sprevádzanie":"Conversation and spiritual guidance","V prípade choroby, zármutku alebo potreby osobného rozhovoru sa môžete obrátiť na farský úrad.":"In case of illness, grief or a need for a personal conversation, please contact the church office.","Zobraziť kontakty →":"View contacts →","Pošlite modlitebnú prosbu":"Send a prayer request","Prosbu o modlitbu môžete poslať e-mailom. V produkčnej verzii môže byť doplnený diskrétny formulár.":"You can send a prayer request by email. A discreet form can be added in the production version.","Napísať prosbu →":"Write a request →","Život detí v zbore →":"Children’s life in the congregation →","Stretávame sa každú nedeľu o 09:00 v evanjelickom kostole na Hviezdoslavovej ulici.":"We meet every Sunday at 09:00 in the Evangelical church on Hviezdoslavova Street.","Program pre deti prebieha súbežne s nedeľnými Službami Božími o 09:00.":"The children’s programme runs alongside Sunday worship at 09:00.","Pravidelné nedeľné bohoslužobné stretnutie.":"Regular Sunday worship service.","Evanjelický kostol, Hviezdoslavova 142":"Evangelical church, Hviezdoslavova 142","Horná miestnosť kostola":"Upper room of the church","Program pre deti počas Služieb Božích.":"Children’s programme during the worship service.","Zborové priestory":"Church premises","Presný čas podľa aktuálnych oznamov.":"Exact time according to current notices.","Evanjelický kostol, Liptovský Hrádok":"Evangelical church, Liptovský Hrádok","Pri časovom ozname vyberte dátum.":"Please select a date for a dated notice.","Oznam bol upravený.":"The notice was updated.","Oznam bol pridaný.":"The notice was added.","Oznam bol odstránený.":"The notice was removed.","Udalosť bola upravená.":"The event was updated.","Udalosť bola pridaná do kalendára.":"The event was added to the calendar.","Udalosť bola odstránená.":"The event was removed.","Pozývací odkaz WhatsApp komunity doplní správca webu v SITE_CONFIG.":"The website administrator will add the WhatsApp community invitation link in SITE_CONFIG.","Údaje alebo odkaz na podporu zboru doplní správca webu v SITE_CONFIG.":"The website administrator will add support details or a link in SITE_CONFIG.","Farebný filter úvodných fotografií bol zmenený.":"The colour filter for the hero photographs was changed.","Demo dáta boli obnovené.":"The demo data was restored.","Nepodarilo sa načítať localStorage:":"Could not load localStorage:","Nepodarilo sa uložiť localStorage:":"Could not save localStorage:","O nás":"About us","Trvalé oznamy":"Permanent notices","Kalendár udalostí":"Events calendar","Stručný prehľad pravidelných stretnutí. Pri každej položke si môžete otvoriť podrobnejšie informácie.":"A concise overview of regular gatherings. Open each item for more detailed information.","Nedeľné bohoslužby pre všetky generácie.":"Sunday worship for every generation.","Biblický program pre deti počas bohoslužieb.":"A Bible-based programme for children during worship.","Spoločná modlitba za zbor a aktuálne potreby.":"Shared prayer for the congregation and current needs.","Rozhovory, spoločenstvo a duchovné povzbudenie.":"Conversation, fellowship and spiritual encouragement.","Stretnutia mladých podľa aktuálnych oznamov.":"Youth gatherings according to current notices.","Osobný rozhovor a duchovné sprevádzanie.":"Personal conversation and spiritual guidance.","Viac informácií":"More information","Stretnutie v zbore":"Church gathering","Stretnutie":"Gathering","Kedy":"When","Kde":"Where","Podrobnosti":"Details","Kontaktovať zbor":"Contact the congregation","Spoločenstvo viery a služby.":"A community of faith and service.","Sme evanjelický cirkevný zbor otvorený deťom, mladým, rodinám, dospelým aj seniorom. Stretávame sa pri Božom slove, modlitbe, sviatostiach a vzájomnej pomoci.":"We are an Evangelical congregation open to children, young people, families, adults and seniors. We gather around God’s Word, prayer, the sacraments and mutual care.","otvorené":"open","pre všetky generácie":"to every generation","spolu":"together","vo viere a službe":"in faith and service"};
    Object.assign(I18N_EN, {
      "Pozastaviť fotografie": "Pause photos",
      "Spustiť fotografie": "Play photos",
      "Najbližšie": "Upcoming",
      "Mesačný kalendár": "Monthly calendar",
      "Zvýraznený oznam": "Featured notice",
      "Všetky aktuálne oznamy sú zobrazené vyššie.": "All current notices are shown above.",
      "Sviatosti a obrady na jednom mieste": "Sacraments and ceremonies in one place",
      "Informácie o krste, konfirmácii, sobáši a pohrebe nájdete v praktickej sekcii.": "Information about baptism, confirmation, weddings and funerals is available in the practical section.",
      "Otvoriť praktické informácie →": "Open practical information →",
      "Dokumenty a zborový časopis": "Documents and church magazine",
      "Výročné správy, formuláre a archív časopisu nájdete spolu v sekcii Dokumenty.": "Annual reports, forms and the magazine archive are grouped in the Documents section.",
      "Otvoriť dokumenty →": "Open documents →",
      "Aktuálne termíny a zmeny programu": "Current dates and programme changes",
      "Mimoriadne podujatia, sviatočné bohoslužby a zmeny pravidelného programu zverejňujeme v kalendári a oznamoch.": "Special events, holiday services and changes to the regular programme are published in the calendar and notices.",
      "Otvoriť kalendár →": "Open calendar →",
      "Organizačná štruktúra zboru": "Congregation organisation",
      "Rozbaliť vedenie, presbyterstvo a ďalšie zodpovednosti": "Expand leadership, presbytery and other responsibilities",
      "Predsedníctvo": "Leadership",
      "Presbyterstvo": "Presbytery",
      "Ďalšie zodpovednosti": "Other responsibilities",
      "Výbory a škola": "Committees and school",
      "zborový dozorca": "congregational supervisor",
      "zástupkyňa zborového dozorcu": "deputy congregational supervisor",
      "Kurátor": "Curator",
      "Pokladníčka": "Treasurer",
      "Účtovníčka": "Accountant",
      "Kostolníčka": "Sexton",
      "Vnútromisijný výbor": "Mission committee",
      "Hospodársky výbor": "Finance committee",
      "CMŠ KORÁB": "KORÁB Church Kindergarten",
      "predsedníctvo CZ": "congregation leadership",
      "Vedenie a služba": "Leadership and service",
      "Celá organizačná štruktúra": "Full organisational structure",
      "Predsedníctvo cirkevného zboru": "Congregation leadership",
      "administrátor cirkevného zboru": "minister administering the congregation",
      "Ďalšie funkcie": "Other roles",
      "Výbory a CMŠ Koráb": "Committees and Koráb Kindergarten",
      "Výbory": "Committees",
      "Vnútromisijný a hospodársky": "Mission and finance committees",
      "predsedníctvo cirkevného zboru": "congregation leadership",
      "Ozvite sa nám s otázkou, žiadosťou o rozhovor alebo si dohodnite návštevu farského úradu.": "Contact us with a question, request a conversation or arrange a visit to the church office.",
      "doma": "at home",
      "v Liptovskom Hrádku": "in Liptovský Hrádok",
      "Spoločenstvo viery, služby a vzájomnej pomoci pre všetky generácie.": "A community of faith, service and mutual support for every generation."
      ,"Oznamy a pozvánky na jednom mieste.": "Notices and invitations in one place."
      ,"Dlhodobo platné informácie aj aktuálne jednorazové akcie. Akcia sa automaticky zobrazí aj v kalendári a môže obsahovať plagát.": "Long-term information and current one-off events. Events appear automatically in the calendar and can include a poster."
      ,"Všetky": "All"
      ,"Aktuálne akcie": "Current events"
      ,"Dlhodobé oznamy": "Long-term notices"
      ,"V tejto kategórii momentálne nie je zverejnený žiadny oznam.": "There are currently no published notices in this category."
      ,"Rýchly kontakt a praktická pomoc.": "Quick contact and practical help."
      ,"Priame možnosti, ako sa spojiť so zborom. Dlhodobé oznamy, napríklad cirkevnú daň, nájdete spolu s aktuálnymi akciami vyššie.": "Direct ways to contact the congregation. Long-term notices, such as the church contribution, are shown above together with current events."
      ,"Kalendár zobrazuje pravidelný program, jednorazové akcie z oznamov aj samostatné udalosti. Kliknutím na deň zobrazíte jeho program.": "The calendar shows the regular programme, one-off events from notices and standalone events. Select a day to view its programme."
      ,"Dlhodobý oznam": "Long-term notice"
      ,"Jednorazová akcia": "One-off event"
      ,"Akcia": "Event"
      ,"Podrobnosti →": "Details →"
      ,"Zobraziť v kalendári": "View in calendar"
      ,"Platí do": "Valid until"
      ,"Dlhodobo platné": "Long-term"
      ,"Typ obsahu": "Content type"
      ,"Dlhodobý oznam zostáva na stránke bez zápisu do kalendára. Voliteľne mu môžete určiť dátum platnosti.": "A long-term notice stays on the page without being added to the calendar. You can optionally set an expiry date."
      ,"Akcia sa zobrazí medzi oznamami a automaticky aj v kalendári. Po skončení sa z verejných kariet skryje, v minulosti kalendára zostane.": "An event appears among notices and automatically in the calendar. After it ends, it is hidden from public cards but remains in the calendar history."
      ,"Dátum akcie od": "Event date from"
      ,"Dátum akcie do": "Event date to"
      ,"Zobraziť do": "Show until"
      ,"Bez dátumu zostane oznam viditeľný neobmedzene.": "Without a date, the notice remains visible indefinitely."
      ,"Plagát alebo obrázok": "Poster or image"
      ,"Pre demo sa obrázok zmenší a uloží do localStorage. Odporúčané maximum vstupu je 5 MB.": "For the demo, the image is resized and stored in localStorage. The recommended maximum input size is 5 MB."
      ,"Odstrániť plagát": "Remove poster"
      ,"Alebo cesta/URL plagátu": "Or poster path/URL"
      ,"akcia z oznamu": "notice event"
      ,"Cirkevná daň 2026": "Church contribution 2026"
      ,"Informácie o výške cirkevného príspevku, termíne a možnostiach úhrady získate na farskom úrade.": "Information about the church contribution amount, deadline and payment options is available from the church office."
      ,"Opýtať sa na farskom úrade →": "Ask the church office →"
      ,"Aktuálny program a zmeny": "Current programme and changes"
      ,"Mimoriadne termíny, sviatočné bohoslužby a zmeny pravidelného programu nájdete v kalendári.": "Special dates, holiday services and changes to the regular programme are available in the calendar."
      ,"Pri akcii vyberte dátum začiatku.": "Select a start date for the event."
      ,"Dátum ukončenia nemôže byť pred dátumom začiatku.": "The end date cannot be before the start date."
      ,"Plagát sa nepodarilo spracovať. Skúste menší JPG, PNG alebo WebP súbor.": "The poster could not be processed. Try a smaller JPG, PNG or WebP file."
      ,"Plagát je príliš veľký na demo localStorage. Skúste menší obrázok.": "The poster is too large for demo localStorage. Try a smaller image."
      ,"Oznam sa nepodarilo uložiť. Úložisko prehliadača môže byť plné.": "The notice could not be saved. Browser storage may be full."
      ,"s plagátom": "with poster"
      ,"Viac informácií – Deti": "More information – Children"
      ,"Viac informácií – Dorast a mládež": "More information – Teenagers and youth"
      ,"Viac informácií – Modlitby": "More information – Prayer"
      ,"Viac informácií – Dospelí a rodiny": "More information – Adults and families"
      ,"Viac informácií – Hudba a médiá": "More information – Music and media"
      ,"Viac informácií – Pomoc a sprevádzanie": "More information – Help and guidance"
    });

    const LANGUAGE_STORAGE_KEY = "ecavlh-language-v1";
    let currentLang = "sk";
    try { currentLang = localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "sk"; }
    catch (error) { console.warn("Language preference storage is unavailable:", error); }
    const textOrigins = new WeakMap();
    const attributeOrigins = new WeakMap();
    const translatableAttributes = ["aria-label", "title", "alt", "placeholder"];
    const t = (value = "") => currentLang === "en" ? (I18N_EN[String(value)] || String(value)) : String(value);
    const localized = (value) => typeof value === "object" && value !== null ? (value[currentLang] || value.sk || "") : String(value || "");

    const REGULAR_MEETINGS = [
      {
        id: "service",
        calendarDay: 0,
        time: "09:00",
        day: { sk: "Nedeľa", en: "Sunday" },
        displayTime: { sk: "09:00", en: "09:00" },
        title: { sk: "Služby Božie", en: "Worship service" },
        summary: { sk: "Nedeľné bohoslužby pre všetky generácie.", en: "Sunday worship for every generation." },
        schedule: { sk: "Každú nedeľu o 09:00", en: "Every Sunday at 09:00" },
        location: { sk: "Evanjelický kostol, Hviezdoslavova 142", en: "Evangelical church, Hviezdoslavova 142" },
        description: { sk: "Spoločné bohoslužobné stretnutie v evanjelickom kostole na Hviezdoslavovej ulici.", en: "A shared worship service in the Evangelical church on Hviezdoslavova Street." }
      },
      {
        id: "children",
        calendarDay: 0,
        time: "09:00",
        day: { sk: "Nedeľa", en: "Sunday" },
        displayTime: { sk: "09:00", en: "09:00" },
        title: { sk: "Detská besiedka", en: "Children’s programme" },
        summary: { sk: "Biblický program pre deti počas bohoslužieb.", en: "A Bible-based programme for children during worship." },
        schedule: { sk: "Každú nedeľu o 09:00", en: "Every Sunday at 09:00" },
        location: { sk: "Horná miestnosť kostola", en: "Upper room of the church" },
        description: { sk: "Program pre deti prebieha počas Služieb Božích, zvyčajne v hornej miestnosti kostola.", en: "The children’s programme takes place during the worship service, usually in the upper room of the church." }
      },
      {
        id: "prayer",
        calendarDay: 3,
        time: "",
        day: { sk: "Streda", en: "Wednesday" },
        displayTime: { sk: "podľa oznamov", en: "see current notices" },
        title: { sk: "Modlitebné spoločenstvo", en: "Prayer fellowship" },
        summary: { sk: "Spoločná modlitba za zbor a aktuálne potreby.", en: "Shared prayer for the congregation and current needs." },
        schedule: { sk: "V stredu, presný čas podľa oznamov", en: "On Wednesdays, exact time in current notices" },
        location: { sk: "Zborové priestory", en: "Church premises" },
        description: { sk: "Pravidelné stretnutie pri modlitbe za zbor, rodiny, mesto a aktuálne potreby.", en: "A regular time of prayer for the congregation, families, the town and current needs." }
      },
      {
        id: "men",
        calendarDay: null,
        time: "19:00",
        day: { sk: "Každý 2. piatok", en: "Every second Friday" },
        displayTime: { sk: "19:00", en: "19:00" },
        title: { sk: "Stretnutie mužov", en: "Men’s gathering" },
        summary: { sk: "Rozhovory, spoločenstvo a duchovné povzbudenie.", en: "Conversation, fellowship and spiritual encouragement." },
        schedule: { sk: "Každý druhý piatok o 19:00", en: "Every second Friday at 19:00" },
        location: { sk: "Horná miestnosť kostola", en: "Upper room of the church" },
        description: { sk: "Neformálny spoločný čas mužov v hornej miestnosti, rozhovory a duchovné povzbudenie.", en: "An informal gathering for men in the upper room, with conversation and spiritual encouragement." }
      },
      {
        id: "youth",
        calendarDay: null,
        time: "",
        day: { sk: "Počas týždňa", en: "During the week" },
        displayTime: { sk: "aktuálne", en: "current" },
        title: { sk: "Dorast a mládež", en: "Teenagers and youth" },
        summary: { sk: "Stretnutia mladých podľa aktuálnych oznamov.", en: "Youth gatherings according to current notices." },
        schedule: { sk: "Podľa aktuálnych oznamov", en: "According to current notices" },
        location: { sk: "Zborové priestory a miesta podujatí", en: "Church premises and event venues" },
        description: { sk: "Stretnutia, výlety, tábory a spoločné aktivity. Presný termín zverejňujeme v aktuálnych oznamoch.", en: "Gatherings, trips, camps and shared activities. Exact dates are published in current notices." }
      },
      {
        id: "pastoral",
        calendarDay: null,
        time: "",
        day: { sk: "Podľa dohody", en: "By arrangement" },
        displayTime: { sk: "kontakt", en: "contact" },
        title: { sk: "Pastorálna služba", en: "Pastoral care" },
        summary: { sk: "Osobný rozhovor a duchovné sprevádzanie.", en: "Personal conversation and spiritual guidance." },
        schedule: { sk: "Podľa osobnej dohody", en: "By personal arrangement" },
        location: { sk: "Farský úrad alebo dohodnuté miesto", en: "Church office or an agreed location" },
        description: { sk: "Rozhovor, duchovné sprevádzanie, návšteva chorých alebo príprava sviatostí a obradov.", en: "Conversation, spiritual guidance, visits to the sick, or preparation for sacraments and ceremonies." }
      }
    ];

    /*
      ROZKLIKÁVACIE OBLASTI „ŽIVOT ZBORU“
      ------------------------------------
      Každá položka má samostatný dlhší opis, voliteľnú fotografiu,
      praktické body, kontakt a odkaz. Prázdna hodnota image znamená,
      že sa detail zobrazí ako čisté textové okno bez fotografie.
    */
    const LIFE_AREAS = [
      {
        id: "children",
        title: { sk: "Deti", en: "Children" },
        lead: {
          sk: "Bezpečný a radostný priestor, v ktorom deti objavujú vieru jazykom primeraným svojmu veku.",
          en: "A safe and joyful space where children discover faith in a way appropriate to their age."
        },
        description: {
          sk: [
            "Detská besiedka prebieha počas nedeľných Služieb Božích. Biblické príbehy dopĺňajú rozhovory, piesne, hry a tvorivé aktivity.",
            "Jednorazové rodinné podujatia, výlety alebo tábory sa zverejňujú medzi aktuálnymi oznamami a automaticky aj v kalendári."
          ],
          en: [
            "The children’s programme runs during Sunday worship. Bible stories are accompanied by conversation, songs, games and creative activities.",
            "One-off family events, trips and camps are published in current notices and automatically added to the calendar."
          ]
        },
        highlights: {
          sk: ["detská besiedka počas nedeľných bohoslužieb", "tvorivé a tematické aktivity", "rodinné podujatia podľa aktuálnych oznamov"],
          en: ["children’s programme during Sunday worship", "creative and themed activities", "family events according to current notices"]
        },
        image: "",
        imageAlt: { sk: "", en: "" },
        contact: { label: "Farský úrad · lipt.hradok@ecav.sk", href: "mailto:lipt.hradok@ecav.sk?subject=Deti%20v%20zbore" },
        action: { label: { sk: "Pozrieť detský program", en: "View the children’s programme" }, href: "#program" }
      },
      {
        id: "youth",
        title: { sk: "Dorast a mládež", en: "Teenagers and youth" },
        lead: {
          sk: "Priestor na priateľstvá, otázky, spoločné zážitky a osobný rast vo viere.",
          en: "A place for friendship, questions, shared experiences and personal growth in faith."
        },
        description: {
          sk: [
            "Stretnutia dorastu a mládeže spájajú rozhovory o viere a živote s neformálnym programom, hudbou a spoločnými aktivitami.",
            "Termíny sa môžu meniť podľa školského roka a pripravovaných akcií, preto sa zverejňujú v aktuálnych oznamoch."
          ],
          en: [
            "Teen and youth gatherings combine conversations about faith and life with informal activities, music and time together.",
            "Dates may change during the school year, so current gatherings are published in the notices."
          ]
        },
        highlights: {
          sk: ["pravidelné aj jednorazové stretnutia", "výlety, tábory a spoločné aktivity", "bezpečný priestor na otázky a rozhovor"],
          en: ["regular and one-off gatherings", "trips, camps and shared activities", "a safe space for questions and conversation"]
        },
        image: "assets/images/konfirmacia-2026.webp",
        imageAlt: { sk: "Mladí ľudia pri konfirmácii v roku 2026", en: "Young people at confirmation in 2026" },
        contact: { label: "Farský úrad · lipt.hradok@ecav.sk", href: "mailto:lipt.hradok@ecav.sk?subject=Dorast%20a%20mládež" },
        action: { label: { sk: "Pozrieť aktuálne oznamy", en: "View current notices" }, href: "#aktuality" }
      },
      {
        id: "prayer",
        title: { sk: "Modlitby", en: "Prayer" },
        lead: {
          sk: "Spoločná modlitba za zbor, rodiny, mesto aj konkrétne potreby ľudí.",
          en: "Shared prayer for the congregation, families, the town and the specific needs of people."
        },
        description: {
          sk: [
            "Modlitebné spoločenstvo vytvára pokojný priestor pre vďačnosť, prosby aj vzájomné povzbudenie. Stretnutie býva v stredu podľa aktuálnych oznamov.",
            "Ak nemôžete prísť osobne, modlitebnú prosbu môžete poslať e-mailom. S jej obsahom sa zaobchádza citlivo."
          ],
          en: [
            "The prayer fellowship provides a calm space for gratitude, requests and mutual encouragement. It usually meets on Wednesdays according to current notices.",
            "If you cannot attend in person, you may send a prayer request by email. Its content will be treated sensitively."
          ]
        },
        highlights: {
          sk: ["pravidelné spoločné modlitby", "možnosť poslať osobnú prosbu", "modlitby za zbor, mesto a rodiny"],
          en: ["regular shared prayer", "the option to send a personal request", "prayer for the congregation, town and families"]
        },
        image: "assets/images/kostol-interier-kazatelnica.webp",
        imageAlt: { sk: "Interiér evanjelického kostola – miesto modlitby", en: "Evangelical church interior – a place of prayer" },
        contact: { label: "Poslať modlitebnú prosbu", href: "mailto:lipt.hradok@ecav.sk?subject=Modlitebná%20prosba" },
        action: { label: { sk: "Napísať modlitebnú prosbu", en: "Send a prayer request" }, href: "mailto:lipt.hradok@ecav.sk?subject=Modlitebná%20prosba" }
      },
      {
        id: "families",
        title: { sk: "Dospelí a rodiny", en: "Adults and families" },
        lead: {
          sk: "Stretnutia, pri ktorých sa prepája duchovný rast, vzťahy a každodenný rodinný život.",
          en: "Gatherings that connect spiritual growth, relationships and everyday family life."
        },
        description: {
          sk: [
            "Dospelí a rodiny sa stretávajú pri biblickom vzdelávaní, tematických večeroch a spoločných podujatiach. Súčasťou života zboru sú aj stretnutia mužov.",
            "Jednorazové rodinné akcie a konkrétne termíny sa zobrazujú v oznamoch a v spoločnom kalendári."
          ],
          en: [
            "Adults and families meet for Bible learning, themed evenings and shared events. Men’s gatherings are also part of congregational life.",
            "One-off family events and exact dates appear in the notices and shared calendar."
          ]
        },
        highlights: {
          sk: ["biblické a tematické stretnutia", "aktivity pre manželov a rodiny", "stretnutia mužov a spoločné podujatia"],
          en: ["Bible and themed gatherings", "activities for couples and families", "men’s gatherings and shared events"]
        },
        image: "assets/images/kostol-exterier.webp",
        imageAlt: { sk: "Budova cirkevného zboru ECAV Liptovský Hrádok", en: "ECAV Liptovský Hrádok congregation building" },
        contact: { label: "Farský úrad · lipt.hradok@ecav.sk", href: "mailto:lipt.hradok@ecav.sk?subject=Dospelí%20a%20rodiny" },
        action: { label: { sk: "Pozrieť program stretnutí", en: "View the gathering programme" }, href: "#program" }
      },
      {
        id: "music",
        title: { sk: "Hudba a médiá", en: "Music and media" },
        lead: {
          sk: "Hudba, zvuk, obraz a zborové médiá pomáhajú zrozumiteľne niesť posolstvo ďalej.",
          en: "Music, sound, visuals and congregational media help carry the message further."
        },
        description: {
          sk: [
            "Do tejto oblasti patrí spev a hudobná služba počas bohoslužieb a podujatí, technické zabezpečenie zvuku a obrazu aj príprava mediálneho obsahu.",
            "Zborový časopis, fotografie a audionahrávky zachytávajú život spoločenstva a vytvárajú jeho spoločnú pamäť."
          ],
          en: [
            "This area includes singing and music during worship and events, technical support for sound and visuals, and the preparation of media content.",
            "The congregation magazine, photographs and audio recordings capture community life and preserve its shared memory."
          ]
        },
        highlights: {
          sk: ["spev a hudobná služba", "ozvučenie, projekcia a technická pomoc", "zborový časopis, fotografie a nahrávky"],
          en: ["singing and music ministry", "sound, projection and technical support", "congregation magazine, photographs and recordings"]
        },
        image: "assets/images/kostol-interier-lod.webp",
        imageAlt: { sk: "Interiér kostola, v ktorom prebieha hudobná služba", en: "Church interior where music ministry takes place" },
        contact: { label: "Farský úrad · lipt.hradok@ecav.sk", href: "mailto:lipt.hradok@ecav.sk?subject=Hudba%20a%20médiá" },
        action: { label: { sk: "Otvoriť dokumenty a časopis", en: "Open documents and magazine" }, href: "#dokumenty" }
      },
      {
        id: "care",
        title: { sk: "Pomoc a sprevádzanie", en: "Help and guidance" },
        lead: {
          sk: "Osobný rozhovor, duchovná podpora a praktická blízkosť v náročnom životnom období.",
          en: "Personal conversation, spiritual support and practical companionship during a difficult season of life."
        },
        description: {
          sk: [
            "Na farský úrad sa môžete obrátiť pri chorobe, zármutku, rodinnej situácii alebo potrebe osobného a duchovného rozhovoru.",
            "Podľa možností zbor sprostredkuje návštevu, pastorálny rozhovor alebo nasmerovanie k vhodnej forme ďalšej pomoci."
          ],
          en: [
            "You may contact the church office in times of illness, grief, family difficulty or when you need a personal and spiritual conversation.",
            "Where possible, the congregation can arrange a visit, pastoral conversation or guidance towards an appropriate form of further help."
          ]
        },
        highlights: {
          sk: ["pastorálny a dôverný rozhovor", "návšteva chorých a sprevádzanie zarmútených", "dohoda ďalšej pomoci podľa konkrétnej situácie"],
          en: ["pastoral and confidential conversation", "visiting the sick and supporting the bereaved", "arranging further help according to the situation"]
        },
        image: "",
        imageAlt: { sk: "", en: "" },
        contact: { label: "+421 918 828 303", href: "tel:+421918828303" },
        action: { label: { sk: "Otvoriť kontakty", en: "Open contact details" }, href: "#kontakt" }
      }
    ];

    const translateDOM = (root = document.body) => {
      if (!root) return;
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.parentElement || node.parentElement.closest("script, style, [data-no-translate]")) return NodeFilter.FILTER_REJECT;
          return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(node => {
        if (!textOrigins.has(node)) textOrigins.set(node, node.nodeValue);
        const original = textOrigins.get(node);
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        const core = original.trim();
        node.nodeValue = leading + t(core) + trailing;
      });
      root.querySelectorAll("*").forEach(element => {
        let originals = attributeOrigins.get(element);
        if (!originals) { originals = {}; attributeOrigins.set(element, originals); }
        translatableAttributes.forEach(attribute => {
          if (!element.hasAttribute(attribute)) return;
          if (!(attribute in originals)) originals[attribute] = element.getAttribute(attribute);
          element.setAttribute(attribute, t(originals[attribute]));
        });
      });
      document.documentElement.lang = currentLang;
      document.title = t("ECAV Liptovský Hrádok | Spoločenstvo viery");
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.content = currentLang === "en"
        ? "ECAV congregation in Liptovský Hrádok — current notices, services, calendar and contacts."
        : "Cirkevný zbor ECAV Liptovský Hrádok — aktuálne oznamy, bohoslužby, kalendár a kontakty.";
    };

    const syncLanguageButtons = () => {
      document.querySelectorAll("[data-lang]").forEach(button => {
        const active = button.dataset.lang === currentLang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };

    const queueTranslation = () => {
      if (currentLang === "en") queueMicrotask(() => translateDOM(document.body));
    };


    const defaultAnnouncements = [
      {
        id: "p1",
        kind: "persistent",
        category: "Praktické",
        validUntil: "2026-12-31",
        startDate: "",
        endDate: "",
        time: "",
        place: "",
        poster: "",
        title: "Cirkevná daň 2026",
        text: "Informácie o výške cirkevného príspevku, termíne a možnostiach úhrady získate na farskom úrade.",
        actionLabel: "Opýtať sa na farskom úrade →",
        actionHref: "mailto:lipt.hradok@ecav.sk?subject=Cirkevná%20daň%202026"
      },
      {
        id: "p2",
        kind: "persistent",
        category: "Praktické",
        validUntil: "",
        startDate: "",
        endDate: "",
        time: "",
        place: "",
        poster: "",
        title: "Sviatosti a obrady na jednom mieste",
        text: "Informácie o krste, konfirmácii, sobáši a pohrebe nájdete v praktickej sekcii.",
        actionLabel: "Otvoriť praktické informácie →",
        actionHref: "#prakticke"
      },
      {
        id: "p3",
        kind: "persistent",
        category: "Dokumenty",
        validUntil: "",
        startDate: "",
        endDate: "",
        time: "",
        place: "",
        poster: "",
        title: "Dokumenty a zborový časopis",
        text: "Výročné správy, formuláre a archív časopisu nájdete spolu v sekcii Dokumenty.",
        actionLabel: "Otvoriť dokumenty →",
        actionHref: "#dokumenty"
      },
      {
        id: "p4",
        kind: "persistent",
        category: "Oznam",
        validUntil: "",
        startDate: "",
        endDate: "",
        time: "",
        place: "",
        poster: "",
        title: "Aktuálny program a zmeny",
        text: "Mimoriadne termíny, sviatočné bohoslužby a zmeny pravidelného programu nájdete v kalendári.",
        actionLabel: "Otvoriť kalendár →",
        actionHref: "#kalendar"
      }
    ];

    const loadJSON = (key, fallback) => {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : structuredClone(fallback);
      } catch (error) {
        console.warn("Nepodarilo sa načítať localStorage:", error);
        return structuredClone(fallback);
      }
    };

    const saveJSON = (key, value) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        console.warn("Nepodarilo sa uložiť localStorage:", error);
        return false;
      }
    };

    let announcements = loadJSON(STORAGE.announcements, defaultAnnouncements);
    let customEvents = loadJSON(STORAGE.events, []);
    let selectedTheme = (() => { try { return localStorage.getItem(STORAGE.theme) || "default"; } catch (error) { return "default"; } })();

    /* =========================================================
       2. UTILITIES
       ========================================================= */
    const $ = (selector, scope = document) => scope.querySelector(selector);
    const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
    const LOCALE_DATA = {
      sk: {
        months: ["január", "február", "marec", "apríl", "máj", "jún", "júl", "august", "september", "október", "november", "december"],
        monthsShort: ["jan", "feb", "mar", "apr", "máj", "jún", "júl", "aug", "sep", "okt", "nov", "dec"],
        days: ["nedeľa", "pondelok", "utorok", "streda", "štvrtok", "piatok", "sobota"]
      },
      en: {
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      }
    };
    let monthNames = LOCALE_DATA[currentLang].months;
    let monthShort = LOCALE_DATA[currentLang].monthsShort;
    let dayNames = LOCALE_DATA[currentLang].days;
    const refreshLocaleData = () => {
      monthNames = LOCALE_DATA[currentLang].months;
      monthShort = LOCALE_DATA[currentLang].monthsShort;
      dayNames = LOCALE_DATA[currentLang].days;
    };

    const toLocalDateKey = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

    const parseLocalDate = (key) => {
      const [year, month, day] = key.split("-").map(Number);
      return new Date(year, month - 1, day);
    };

    const formatDate = (key, includeWeekday = false) => {
      const date = parseLocalDate(key);
      return new Intl.DateTimeFormat(currentLang === "en" ? "en-GB" : "sk-SK", {
        weekday: includeWeekday ? "long" : undefined,
        day: "numeric",
        month: "long",
        year: "numeric"
      }).format(date);
    };

    const formatDateRange = (startKey, endKey = "") => {
      if (!startKey) return "";
      if (!endKey || endKey === startKey) return formatDate(startKey, true);
      return `${formatDate(startKey)} – ${formatDate(endKey)}`;
    };

    const dateKeyIsInRange = (key, startKey, endKey = "") => {
      if (!key || !startKey) return false;
      return key >= startKey && key <= (endKey || startKey);
    };

    const escapeHTML = (value = "") => String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

    const safeHref = (value = "") => {
      const href = String(value).trim();
      return /^(https?:\/\/|mailto:|tel:|#|\/)/i.test(href) ? href : "#";
    };

    const safeImageSrc = (value = "") => {
      const src = String(value).trim();
      if (!src) return "";
      if (/^data:image\/(?:png|jpe?g|webp|gif);base64,/i.test(src)) return src;
      if (/^https?:\/\//i.test(src)) return src;
      if (/^(?:\.\/)?assets\/[a-z0-9_./-]+\.(?:png|jpe?g|webp|gif)$/i.test(src) && !src.includes("..")) return src;
      return "";
    };

    let toastTimer;
    const showToast = (message) => {
      const toast = $("#toast");
      toast.textContent = t(message);
      toast.classList.add("is-visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
    };

    /* =========================================================
       3. HEADER, MOBILE NAV, SCROLL REVEAL
       ========================================================= */
    const header = $("#siteHeader");
    const menuToggle = $("#menuToggle");
    const mainNav = $("#mainNav");

    const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    /* Bootstrap Collapse controls the mobile navigation. Custom classes only tune the visual state. */
    mainNav.addEventListener("show.bs.collapse", () => header.classList.add("menu-open"));
    mainNav.addEventListener("hidden.bs.collapse", () => header.classList.remove("menu-open"));

    $$(".main-nav a").forEach(link => link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        bootstrap.Collapse.getOrCreateInstance(mainNav, { toggle: false }).hide();
      }
    }));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(element => revealObserver.observe(element));

    const sections = $$("main section[id]");
    const navLinks = $$(".main-nav a");
    const scrollSpy = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
    }, { rootMargin: "-30% 0px -60%", threshold: [0.01, 0.25, 0.5] });
    sections.forEach(section => scrollSpy.observe(section));

    /* Lightweight image parallax for creative crops. Disabled for reduced motion. */
    const motionAllowed = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroCarousel = $("#heroCarousel");
    const carouselPauseButton = $("#carouselPauseButton");
    const carouselInstance = heroCarousel ? bootstrap.Carousel.getOrCreateInstance(heroCarousel) : null;
    let carouselPaused = !motionAllowed;
    const syncCarouselButton = () => {
      if (!carouselPauseButton) return;
      carouselPauseButton.textContent = t(carouselPaused ? "Spustiť fotografie" : "Pozastaviť fotografie");
      carouselPauseButton.setAttribute("aria-pressed", String(carouselPaused));
    };
    if (carouselPaused && carouselInstance) carouselInstance.pause();
    if (carouselPauseButton) {
      carouselPauseButton.addEventListener("click", () => {
        carouselPaused = !carouselPaused;
        if (carouselPaused) carouselInstance?.pause();
        else carouselInstance?.cycle();
        syncCarouselButton();
      });
      syncCarouselButton();
    }
    const parallaxPhotos = $$('[data-photo-parallax]');
    let parallaxFrame = 0;
    const updatePhotoParallax = () => {
      parallaxFrame = 0;
      if (!motionAllowed) return;
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      parallaxPhotos.forEach(photo => {
        const rect = photo.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > viewportHeight + 120) return;
        const progress = ((rect.top + rect.height / 2) - viewportHeight / 2) / viewportHeight;
        const strength = Number(photo.dataset.parallaxStrength || 24);
        photo.style.setProperty("--photo-shift", `${Math.max(-strength, Math.min(strength, progress * -strength))}px`);
      });
    };
    const requestPhotoParallax = () => {
      if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updatePhotoParallax);
    };
    updatePhotoParallax();
    window.addEventListener("scroll", requestPhotoParallax, { passive: true });
    window.addEventListener("resize", requestPhotoParallax, { passive: true });

    /* =========================================================
       4. NEXT SUNDAY
       ========================================================= */
    const updateNextSunday = () => {
      const now = new Date();
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      let daysUntilSunday = (7 - next.getDay()) % 7;
      const sundayServiceEnded = now.getDay() === 0 && (now.getHours() > 10 || (now.getHours() === 10 && now.getMinutes() >= 30));
      if (sundayServiceEnded) daysUntilSunday = 7;
      next.setDate(next.getDate() + daysUntilSunday);
      $("#nextSundayDay").textContent = String(next.getDate()).padStart(2, "0");
      $("#nextSundayMonth").textContent = monthShort[next.getMonth()];
      $("#nextSundayLabel").textContent = `${dayNames[next.getDay()]}, ${next.getDate()}. ${monthNames[next.getMonth()]}`;
    };
    updateNextSunday();
    $("#currentYear").textContent = new Date().getFullYear();

    const renderProgram = () => {
      const grid = $("#programGrid");
      if (!grid) return;
      grid.innerHTML = REGULAR_MEETINGS.map(meeting => `
        <article class="program-item program-item--interactive reveal is-visible">
          <div>
            <span class="program-day">${escapeHTML(localized(meeting.day))}</span>
            <strong class="program-time">${escapeHTML(localized(meeting.displayTime))}</strong>
          </div>
          <div class="program-item__content">
            <h3>${escapeHTML(localized(meeting.title))}</h3>
            <p>${escapeHTML(localized(meeting.summary))}</p>
            <button
              class="program-details-button"
              data-bs-target="#meetingModal"
              data-bs-toggle="modal"
              data-meeting-description-en="${escapeHTML(meeting.description.en)}"
              data-meeting-description-sk="${escapeHTML(meeting.description.sk)}"
              data-meeting-location-en="${escapeHTML(meeting.location.en)}"
              data-meeting-location-sk="${escapeHTML(meeting.location.sk)}"
              data-meeting-schedule-en="${escapeHTML(meeting.schedule.en)}"
              data-meeting-schedule-sk="${escapeHTML(meeting.schedule.sk)}"
              data-meeting-title-en="${escapeHTML(meeting.title.en)}"
              data-meeting-title-sk="${escapeHTML(meeting.title.sk)}"
              type="button"
            >${escapeHTML(t("Viac informácií"))} <span aria-hidden="true">→</span></button>
          </div>
        </article>
      `).join("");
    };

    /* =========================================================
       5. ANNOUNCEMENTS
       ========================================================= */
    const permanentIcon = (category = "") => {
      const normalized = category.toLowerCase();
      if (normalized.includes("bohosluž")) return "◷";
      if (normalized.includes("deti")) return "☺";
      if (normalized.includes("modlit")) return "♡";
      if (normalized.includes("pastor")) return "☎";
      if (normalized.includes("komunit")) return "◉";
      return "✦";
    };

    let currentNoticeFilter = "all";

    const noticeIsActive = (item, key = toLocalDateKey(new Date())) => {
      if (item.kind === "event") return !item.startDate || (item.endDate || item.startDate) >= key;
      return !item.validUntil || item.validUntil >= key;
    };

    const noticeDateLabel = (item) => {
      if (item.kind === "event") {
        const date = formatDateRange(item.startDate, item.endDate);
        return `${date}${item.time ? ` · ${item.time}` : ""}`;
      }
      return item.validUntil ? `${t("Platí do")} ${formatDate(item.validUntil)}` : t("Dlhodobo platné");
    };

    const noticeCountLabel = (count) => {
      if (currentLang === "en") return `${count} ${count === 1 ? "notice" : "notices"}`;
      if (count === 1) return "1 oznam";
      if (count >= 2 && count <= 4) return `${count} oznamy`;
      return `${count} oznamov`;
    };

    const renderAnnouncements = () => {
      const board = $("#noticeBoard");
      const emptyState = $("#noticeBoardEmpty");
      const visible = announcements
        .filter(item => noticeIsActive(item))
        .filter(item => currentNoticeFilter === "all" || item.kind === currentNoticeFilter)
        .sort((a, b) => {
          if (a.kind !== b.kind) return a.kind === "event" ? -1 : 1;
          if (a.kind === "event") return String(a.startDate || "").localeCompare(String(b.startDate || ""));
          return String(a.title || "").localeCompare(String(b.title || ""), currentLang === "en" ? "en" : "sk");
        });

      board.innerHTML = visible.map(item => {
        const poster = safeImageSrc(item.poster);
        const kindLabel = item.kind === "event" ? t("Akcia") : t("Dlhodobý oznam");
        return `
          <article class="notice-card notice-card--${item.kind === "event" ? "event" : "persistent"}">
            <div class="notice-card__visual">
              ${poster
                ? `<img alt="${escapeHTML(`${t("Plagát alebo obrázok")} – ${item.title}`)}" loading="lazy" src="${escapeHTML(poster)}">`
                : `<span aria-hidden="true" class="notice-card__visual-icon">${permanentIcon(item.category)}</span>`}
            </div>
            <div class="notice-card__body">
              <div class="notice-card__top">
                <span class="notice-card__kind">${escapeHTML(kindLabel)}</span>
                <span class="notice-card__category">${escapeHTML(t(item.category || "Oznam"))}</span>
              </div>
              <h3>${escapeHTML(item.title)}</h3>
              <div class="notice-card__date">${escapeHTML(noticeDateLabel(item))}</div>
              <p>${escapeHTML(item.text)}</p>
              <button class="notice-card__button" data-bs-target="#noticeModal" data-bs-toggle="modal" data-notice-id="${escapeHTML(item.id)}" type="button">${escapeHTML(t("Podrobnosti →"))}</button>
            </div>
          </article>
        `;
      }).join("");

      emptyState.hidden = visible.length > 0;
      board.hidden = visible.length === 0;
      $("#noticeCount").textContent = noticeCountLabel(visible.length);

      renderAdminAnnouncements();
      queueTranslation();
    };

    $$("[data-notice-filter]").forEach(button => button.addEventListener("click", () => {
      currentNoticeFilter = ["event", "persistent"].includes(button.dataset.noticeFilter) ? button.dataset.noticeFilter : "all";
      $$("[data-notice-filter]").forEach(item => {
        const active = item.dataset.noticeFilter === currentNoticeFilter;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderAnnouncements();
    }));

    /* =========================================================
       6. CALENDAR + EVENT GENERATION
       ========================================================= */
    const today = new Date();
    let calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
    let selectedDateKey = null;

    // Recurring calendar entries use the same source as the programme cards.
    const recurringEventsForDate = (date) => {
      const day = date.getDay();
      const key = toLocalDateKey(date);
      return REGULAR_MEETINGS
        .filter(meeting => meeting.calendarDay === day)
        .map(meeting => ({
          id: `${meeting.id}-${key}`,
          title: localized(meeting.title),
          date: key,
          time: meeting.time,
          place: localized(meeting.location),
          description: localized(meeting.description),
          type: t("pravidelné"),
          isCustom: false
        }));
    };

    const announcementEventsForDate = (date) => {
      const key = toLocalDateKey(date);
      return announcements
        .filter(item => item.kind === "event" && dateKeyIsInRange(key, item.startDate, item.endDate))
        .map(item => ({
          id: `notice-${item.id}-${key}`,
          noticeId: item.id,
          title: item.title,
          date: key,
          time: item.time || "",
          place: item.place || "",
          description: item.text || "",
          type: t("akcia z oznamu"),
          isCustom: true,
          isAnnouncement: true
        }));
    };

    const eventsForDate = (date) => {
      const key = toLocalDateKey(date);
      return [
        ...recurringEventsForDate(date),
        ...announcementEventsForDate(date),
        ...customEvents.filter(item => item.date === key).map(item => ({ ...item, type: t("udalosť"), isCustom: true, isAnnouncement: false }))
      ]
        .sort((a, b) => (a.time || "99:99").localeCompare(b.time || "99:99"));
    };

    const getUpcomingEvents = (count = 8) => {
      const results = [];
      const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      for (let i = 0; i < 120 && results.length < count; i += 1) {
        eventsForDate(cursor).forEach(event => results.push(event));
        cursor.setDate(cursor.getDate() + 1);
      }
      return results.slice(0, count);
    };

    const renderEventCards = (events, title, subtitle) => {
      $("#eventPanelTitle").textContent = title;
      $("#eventPanelSubtitle").textContent = subtitle;
      $("#eventFeed").innerHTML = events.length ? events.map(event => `
        <article class="event-card">
          <div class="event-card__top">
            <span class="event-card__date">${escapeHTML(formatDate(event.date, true))}${event.time ? ` · ${escapeHTML(event.time)}` : ""}</span>
            <span class="event-card__type">${escapeHTML(event.type)}</span>
          </div>
          <h4>${escapeHTML(event.title)}</h4>
          <p>${escapeHTML(event.place || t("Miesto bude upresnené"))}${event.description ? `<br>${escapeHTML(event.description)}` : ""}</p>
        </article>
      `).join("") : '<div class="empty-state" style="border-color:rgba(255,255,255,.2);color:rgba(255,255,255,.65);">V tento deň nie je evidovaná udalosť.</div>';
    };

    const renderCalendar = () => {
      const year = calendarCursor.getFullYear();
      const month = calendarCursor.getMonth();
      $("#calendarTitle").textContent = `${monthNames[month][0].toUpperCase()}${monthNames[month].slice(1)} ${year}`;

      const grid = $("#calendarGrid");
      grid.innerHTML = "";
      const first = new Date(year, month, 1);
      const mondayOffset = (first.getDay() + 6) % 7;
      const start = new Date(year, month, 1 - mondayOffset);

      for (let i = 0; i < 42; i += 1) {
        const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
        const key = toLocalDateKey(date);
        const events = eventsForDate(date);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "calendar-day";
        if (date.getMonth() !== month) button.classList.add("is-outside");
        if (key === toLocalDateKey(today)) button.classList.add("is-today");
        if (key === selectedDateKey) button.classList.add("is-selected");
        button.setAttribute("aria-label", `${formatDate(key, true)}, ${events.length} ${t("udalostí")}`);
        button.innerHTML = `<span class="calendar-day__number">${date.getDate()}</span><span class="calendar-day__dots">${events.slice(0, 4).map(event => `<i class="calendar-dot ${event.isAnnouncement ? "calendar-dot--announcement" : event.isCustom ? "calendar-dot--custom" : ""}"></i>`).join("")}</span>`;
        button.addEventListener("click", () => {
          selectedDateKey = key;
          renderCalendar();
          renderEventCards(eventsForDate(date), formatDate(key, true), events.length ? `${events.length} ${t("stretnutia/udalosti")}` : t("Bez programu"));
          if (window.innerWidth <= 820) setCalendarView("upcoming");
        });
        grid.appendChild(button);
      }

      if (!selectedDateKey) renderEventCards(getUpcomingEvents(), t("Najbližšie udalosti"), t("Pravidelné aj jednorazové stretnutia"));
      queueTranslation();
    };

    $("#calendarPrev").addEventListener("click", () => { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1); selectedDateKey = null; renderCalendar(); });
    $("#calendarNext").addEventListener("click", () => { calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1); selectedDateKey = null; renderCalendar(); });
    $("#calendarToday").addEventListener("click", () => {
      calendarCursor = new Date(today.getFullYear(), today.getMonth(), 1);
      selectedDateKey = toLocalDateKey(today);
      renderCalendar();
      renderEventCards(eventsForDate(today), formatDate(selectedDateKey, true), t("Dnešný program"));
      if (window.innerWidth <= 820) setCalendarView("upcoming");
    });

    const setCalendarView = (view) => {
      const selectedView = view === "month" ? "month" : "upcoming";
      const shell = $("#calendarShell");
      shell.classList.toggle("calendar-view-upcoming", selectedView === "upcoming");
      shell.classList.toggle("calendar-view-month", selectedView === "month");
      $$("[data-calendar-view]").forEach(button => {
        const active = button.dataset.calendarView === selectedView;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    };
    $$("[data-calendar-view]").forEach(button => button.addEventListener("click", () => setCalendarView(button.dataset.calendarView)));

    /* =========================================================
       7. DEMO ADMIN
       ========================================================= */
    const adminPanel = $("#adminPanel");
    const adminBackdrop = $("#adminBackdrop");

    const openAdmin = () => {
      document.body.classList.add("admin-open");
      adminPanel.classList.add("is-open");
      adminBackdrop.classList.add("is-open");
      adminPanel.setAttribute("aria-hidden", "false");
      adminPanel.removeAttribute("inert");
      $("#adminCloseButton").focus();
    };
    const closeAdmin = () => {
      document.body.classList.remove("admin-open");
      adminPanel.classList.remove("is-open");
      adminBackdrop.classList.remove("is-open");
      adminPanel.setAttribute("aria-hidden", "true");
      adminPanel.setAttribute("inert", "");
      $("#adminOpenButton").focus();
    };
    $("#adminOpenButton").addEventListener("click", openAdmin);
    $("#adminCloseButton").addEventListener("click", closeAdmin);
    adminBackdrop.addEventListener("click", closeAdmin);
    document.addEventListener("keydown", event => { if (event.key === "Escape" && adminPanel.classList.contains("is-open")) closeAdmin(); });

    $$("[data-admin-tab]").forEach(tab => tab.addEventListener("click", () => {
      $$("[data-admin-tab]").forEach(item => item.classList.toggle("is-active", item === tab));
      $$("[data-admin-view]").forEach(view => view.classList.toggle("is-active", view.dataset.adminView === tab.dataset.adminTab));
    }));

    let announcementPosterValue = "";

    const syncAnnouncementKindFields = () => {
      const isEvent = $("#announcementKind").value === "event";
      ["announcementStartDateField", "announcementEndDateField", "announcementTimeField", "announcementPlaceField"]
        .forEach(id => { $(`#${id}`).hidden = !isEvent; });
      $("#announcementValidUntilField").hidden = isEvent;
      $("#announcementStartDate").required = isEvent;
      $("#announcementKindNote").textContent = t(isEvent
        ? "Akcia sa zobrazí medzi oznamami a automaticky aj v kalendári. Po skončení sa z verejných kariet skryje, v minulosti kalendára zostane."
        : "Dlhodobý oznam zostáva na stránke bez zápisu do kalendára. Voliteľne mu môžete určiť dátum platnosti.");
      if (isEvent && !$("#announcementStartDate").value) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        $("#announcementStartDate").value = toLocalDateKey(tomorrow);
      }
      if (isEvent && !$("#announcementPlace").value) $("#announcementPlace").value = "Evanjelický kostol, Liptovský Hrádok";
    };

    const syncAnnouncementPosterPreview = () => {
      const preview = $("#announcementPosterPreview");
      const image = $("#announcementPosterPreviewImage");
      const src = safeImageSrc(announcementPosterValue || $("#announcementPosterPath").value);
      preview.hidden = !src;
      if (src) image.src = src;
      else image.removeAttribute("src");
    };

    const compressPoster = (file) => new Promise((resolve, reject) => {
      if (!file || file.size > 5 * 1024 * 1024) {
        reject(new Error("too-large"));
        return;
      }
      const reader = new FileReader();
      reader.onerror = () => reject(new Error("read-error"));
      reader.onload = () => {
        const image = new Image();
        image.onerror = () => reject(new Error("image-error"));
        image.onload = () => {
          const maxDimension = 1200;
          const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
          const canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
          const context = canvas.getContext("2d");
          if (!context) {
            reject(new Error("canvas-error"));
            return;
          }
          context.drawImage(image, 0, 0, canvas.width, canvas.height);
          const data = canvas.toDataURL("image/webp", .8);
          if (!data || data.length > 900_000) {
            reject(new Error("too-large"));
            return;
          }
          resolve(data);
        };
        image.src = String(reader.result);
      };
      reader.readAsDataURL(file);
    });

    $("#announcementKind").addEventListener("change", syncAnnouncementKindFields);
    $("#announcementPosterPath").addEventListener("input", () => {
      if ($("#announcementPosterPath").value.trim()) announcementPosterValue = "";
      syncAnnouncementPosterPreview();
    });
    $("#announcementPosterFile").addEventListener("change", async event => {
      const [file] = event.target.files;
      if (!file) return;
      try {
        announcementPosterValue = await compressPoster(file);
        $("#announcementPosterPath").value = "";
        syncAnnouncementPosterPreview();
      } catch (error) {
        announcementPosterValue = "";
        event.target.value = "";
        showToast(error.message === "too-large"
          ? "Plagát je príliš veľký na demo localStorage. Skúste menší obrázok."
          : "Plagát sa nepodarilo spracovať. Skúste menší JPG, PNG alebo WebP súbor.");
      }
    });
    $("#announcementPosterRemove").addEventListener("click", () => {
      announcementPosterValue = "";
      $("#announcementPosterFile").value = "";
      $("#announcementPosterPath").value = "";
      syncAnnouncementPosterPreview();
    });

    const resetAnnouncementForm = () => {
      $("#announcementForm").reset();
      $("#announcementId").value = "";
      $("#announcementKind").value = "persistent";
      $("#announcementPlace").value = "";
      announcementPosterValue = "";
      $("#announcementPosterPreview").hidden = true;
      $("#announcementPosterPreviewImage").removeAttribute("src");
      $("#announcementCancelEdit").hidden = true;
      syncAnnouncementKindFields();
    };

    $("#announcementForm").addEventListener("submit", event => {
      event.preventDefault();
      const id = $("#announcementId").value || `a-${Date.now()}`;
      const kind = $("#announcementKind").value === "event" ? "event" : "persistent";
      const startDate = kind === "event" ? $("#announcementStartDate").value : "";
      const endDate = kind === "event" ? $("#announcementEndDate").value : "";
      if (kind === "event" && !startDate) {
        showToast("Pri akcii vyberte dátum začiatku.");
        $("#announcementStartDate").focus();
        return;
      }
      if (endDate && endDate < startDate) {
        showToast("Dátum ukončenia nemôže byť pred dátumom začiatku.");
        $("#announcementEndDate").focus();
        return;
      }
      const posterCandidate = announcementPosterValue || $("#announcementPosterPath").value.trim();
      const poster = safeImageSrc(posterCandidate);
      if (posterCandidate && !poster) {
        showToast("Plagát sa nepodarilo spracovať. Skúste menší JPG, PNG alebo WebP súbor.");
        $("#announcementPosterPath").focus();
        return;
      }
      const item = {
        id,
        kind,
        category: $("#announcementCategory").value,
        validUntil: kind === "persistent" ? $("#announcementValidUntil").value : "",
        startDate,
        endDate,
        time: kind === "event" ? $("#announcementTime").value : "",
        place: kind === "event" ? $("#announcementPlace").value.trim() : "",
        poster,
        title: $("#announcementTitle").value.trim(),
        text: $("#announcementText").value.trim(),
        actionLabel: $("#announcementActionLabel").value.trim(),
        actionHref: $("#announcementActionHref").value.trim()
      };
      const previous = structuredClone(announcements);
      const index = announcements.findIndex(existing => existing.id === id);
      if (index >= 0) announcements[index] = item; else announcements.unshift(item);
      if (!saveJSON(STORAGE.announcements, announcements)) {
        announcements = previous;
        showToast("Oznam sa nepodarilo uložiť. Úložisko prehliadača môže byť plné.");
        return;
      }
      renderAnnouncements();
      renderCalendar();
      resetAnnouncementForm();
      showToast(index >= 0 ? "Oznam bol upravený." : "Oznam bol pridaný.");
    });
    $("#announcementCancelEdit").addEventListener("click", resetAnnouncementForm);

    const renderAdminAnnouncements = () => {
      const container = $("#adminAnnouncementItems");
      container.innerHTML = announcements.map(item => {
        const label = item.kind === "event" ? t("Jednorazová akcia") : t("Dlhodobý oznam");
        const date = item.kind === "event" ? noticeDateLabel(item) : (item.validUntil ? `${t("Platí do")} ${formatDate(item.validUntil)}` : t("Dlhodobo platné"));
        return `
          <div class="admin-item">
            <div><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(label)} · ${escapeHTML(date)}${item.poster ? ` · ${escapeHTML(t("s plagátom"))}` : ""}</small></div>
            <div class="admin-item__actions"><button class="admin-mini-button" type="button" data-edit-announcement="${escapeHTML(item.id)}">Upraviť</button><button class="admin-mini-button" type="button" data-delete-announcement="${escapeHTML(item.id)}">Zmazať</button></div>
          </div>
        `;
      }).join("");

      $$('[data-edit-announcement]', container).forEach(button => button.addEventListener("click", () => {
        const item = announcements.find(entry => entry.id === button.dataset.editAnnouncement);
        if (!item) return;
        $("#announcementId").value = item.id;
        $("#announcementKind").value = item.kind === "event" ? "event" : "persistent";
        $("#announcementCategory").value = item.category;
        $("#announcementValidUntil").value = item.validUntil || "";
        $("#announcementStartDate").value = item.startDate || "";
        $("#announcementEndDate").value = item.endDate || "";
        $("#announcementTime").value = item.time || "";
        $("#announcementPlace").value = item.place || "";
        $("#announcementTitle").value = item.title;
        $("#announcementText").value = item.text;
        $("#announcementActionLabel").value = item.actionLabel || "";
        $("#announcementActionHref").value = item.actionHref || "";
        announcementPosterValue = item.poster || "";
        $("#announcementPosterPath").value = item.poster && !item.poster.startsWith("data:") ? item.poster : "";
        $("#announcementPosterFile").value = "";
        syncAnnouncementKindFields();
        syncAnnouncementPosterPreview();
        $("#announcementCancelEdit").hidden = false;
        $("#announcementTitle").focus();
      }));
      $$('[data-delete-announcement]', container).forEach(button => button.addEventListener("click", () => {
        announcements = announcements.filter(entry => entry.id !== button.dataset.deleteAnnouncement);
        saveJSON(STORAGE.announcements, announcements);
        renderAnnouncements();
        renderCalendar();
        showToast("Oznam bol odstránený.");
      }));
    };

    const resetEventForm = () => {
      $("#eventForm").reset();
      $("#eventId").value = "";
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      $("#eventDate").value = toLocalDateKey(tomorrow);
      $("#eventPlace").value = "Evanjelický kostol, Liptovský Hrádok";
      $("#eventCancelEdit").hidden = true;
    };

    $("#eventForm").addEventListener("submit", event => {
      event.preventDefault();
      const id = $("#eventId").value || `e-${Date.now()}`;
      const item = {
        id,
        title: $("#eventTitle").value.trim(),
        date: $("#eventDate").value,
        time: $("#eventTime").value,
        place: $("#eventPlace").value.trim(),
        description: $("#eventDescription").value.trim()
      };
      const index = customEvents.findIndex(existing => existing.id === id);
      if (index >= 0) customEvents[index] = item; else customEvents.push(item);
      saveJSON(STORAGE.events, customEvents);
      renderAdminEvents();
      renderCalendar();
      resetEventForm();
      showToast(index >= 0 ? "Udalosť bola upravená." : "Udalosť bola pridaná do kalendára.");
    });
    $("#eventCancelEdit").addEventListener("click", resetEventForm);

    const renderAdminEvents = () => {
      const container = $("#adminEventItems");
      const sorted = [...customEvents].sort((a, b) => a.date.localeCompare(b.date));
      container.innerHTML = sorted.length ? sorted.map(item => `
        <div class="admin-item"><div><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(formatDate(item.date))}${item.time ? ` · ${escapeHTML(item.time)}` : ""}</small></div><div class="admin-item__actions"><button class="admin-mini-button" type="button" data-edit-event="${escapeHTML(item.id)}">Upraviť</button><button class="admin-mini-button" type="button" data-delete-event="${escapeHTML(item.id)}">Zmazať</button></div></div>
      `).join("") : '<div class="empty-state">Zatiaľ nebola pridaná vlastná udalosť.</div>';

      queueTranslation();
      $$('[data-edit-event]', container).forEach(button => button.addEventListener("click", () => {
        const item = customEvents.find(entry => entry.id === button.dataset.editEvent);
        if (!item) return;
        $("#eventId").value = item.id;
        $("#eventTitle").value = item.title;
        $("#eventDate").value = item.date;
        $("#eventTime").value = item.time || "";
        $("#eventPlace").value = item.place || "";
        $("#eventDescription").value = item.description || "";
        $("#eventCancelEdit").hidden = false;
        $("#eventTitle").focus();
      }));
      $$('[data-delete-event]', container).forEach(button => button.addEventListener("click", () => {
        customEvents = customEvents.filter(entry => entry.id !== button.dataset.deleteEvent);
        saveJSON(STORAGE.events, customEvents);
        renderAdminEvents();
        renderCalendar();
        showToast("Udalosť bola odstránená.");
      }));
    };

    $$('[data-config-action]').forEach(control => control.addEventListener("click", () => {
      const action = control.dataset.configAction;
      const url = action === "whatsapp" ? SITE_CONFIG.whatsappCommunityUrl : SITE_CONFIG.givingUrl;
      if (!url) {
        showToast(action === "whatsapp"
          ? "Pozývací odkaz WhatsApp komunity doplní správca webu v SITE_CONFIG."
          : "Údaje alebo odkaz na podporu zboru doplní správca webu v SITE_CONFIG.");
        return;
      }
      window.open(url, "_blank", "noopener,noreferrer");
    }));

    const applyTheme = (theme) => {
      selectedTheme = theme;
      $("#domov").dataset.theme = theme;
      try { localStorage.setItem(STORAGE.theme, theme); } catch (error) { console.warn("Theme preference storage is unavailable:", error); }
      $$('[data-theme-choice]').forEach(button => button.classList.toggle("is-active", button.dataset.themeChoice === theme));
    };
    $$('[data-theme-choice]').forEach(button => button.addEventListener("click", () => { applyTheme(button.dataset.themeChoice); showToast("Farebný filter úvodných fotografií bol zmenený."); }));

    $("#resetDemoData").addEventListener("click", () => {
      announcements = structuredClone(defaultAnnouncements);
      customEvents = [];
      saveJSON(STORAGE.announcements, announcements);
      saveJSON(STORAGE.events, customEvents);
      applyTheme("default");
      renderAnnouncements();
      renderAdminEvents();
      renderCalendar();
      resetAnnouncementForm();
      resetEventForm();
      showToast("Demo dáta boli obnovené.");
    });

    const noticeModal = $("#noticeModal");
    if (noticeModal) {
      noticeModal.addEventListener("show.bs.modal", event => {
        const item = announcements.find(entry => entry.id === event.relatedTarget?.dataset.noticeId);
        if (!item) return;
        const poster = safeImageSrc(item.poster);
        const layout = $(".notice-modal__layout", noticeModal);
        const posterWrap = $("#noticeModalPosterWrap");
        const posterImage = $("#noticeModalPoster");
        posterWrap.hidden = !poster;
        layout.classList.toggle("is-text-only", !poster);
        if (poster) {
          posterImage.src = poster;
          posterImage.alt = `${t("Plagát alebo obrázok")} – ${item.title}`;
        } else {
          posterImage.removeAttribute("src");
          posterImage.alt = "";
        }
        $("#noticeModalKind").textContent = item.kind === "event" ? t("Jednorazová akcia") : t("Dlhodobý oznam");
        $("#noticeModalTitle").textContent = item.title;
        $("#noticeModalText").textContent = item.text;

        const meta = [];
        if (item.kind === "event") {
          meta.push(`◷ ${noticeDateLabel(item)}`);
          if (item.place) meta.push(`⌖ ${item.place}`);
        } else {
          meta.push(item.validUntil ? `${t("Platí do")} ${formatDate(item.validUntil)}` : t("Dlhodobo platné"));
        }
        $("#noticeModalMeta").innerHTML = meta.map(value => `<span>${escapeHTML(value)}</span>`).join("");

        const action = $("#noticeModalAction");
        const hasAction = Boolean(item.actionHref);
        action.hidden = !hasAction;
        if (hasAction) {
          action.href = safeHref(item.actionHref);
          action.textContent = item.actionLabel || t("Viac informácií");
        } else {
          action.removeAttribute("href");
        }

        const calendarLink = $("#noticeModalCalendar");
        calendarLink.hidden = item.kind !== "event" || !item.startDate;
        calendarLink.dataset.calendarDate = item.startDate || "";
      });
    }

    $("#noticeModalCalendar").addEventListener("click", event => {
      const key = event.currentTarget.dataset.calendarDate;
      if (!key) return;
      const date = parseLocalDate(key);
      calendarCursor = new Date(date.getFullYear(), date.getMonth(), 1);
      selectedDateKey = key;
      renderCalendar();
      const dayEvents = eventsForDate(date);
      renderEventCards(dayEvents, formatDate(key, true), dayEvents.length ? `${dayEvents.length} ${t("stretnutia/udalosti")}` : t("Bez programu"));
      if (window.innerWidth <= 820) setCalendarView("upcoming");
    });


    /* Bootstrap modal: detailed information for every regular gathering. */
    const meetingModal = $("#meetingModal");
    if (meetingModal) {
      meetingModal.addEventListener("show.bs.modal", event => {
        const trigger = event.relatedTarget;
        if (!trigger) return;
        const english = document.documentElement.lang === "en";
        const suffix = english ? "En" : "Sk";
        const getValue = key => trigger.dataset[`${key}${suffix}`] || "";
        $("#meetingModalTitle").textContent = getValue("meetingTitle");
        $("#meetingModalSchedule").textContent = getValue("meetingSchedule");
        $("#meetingModalLocation").textContent = getValue("meetingLocation");
        $("#meetingModalDescription").textContent = getValue("meetingDescription");
      });
    }

    /* Bootstrap modal: expanded profile for every area in “Život zboru”. */
    const lifeModal = $("#lifeModal");
    if (lifeModal) {
      lifeModal.addEventListener("show.bs.modal", event => {
        const area = LIFE_AREAS.find(item => item.id === event.relatedTarget?.dataset.lifeId);
        if (!area) return;

        const image = safeImageSrc(area.image);
        const layout = $("#lifeModalLayout");
        const photoWrap = $("#lifeModalPhotoWrap");
        const photo = $("#lifeModalPhoto");

        photoWrap.hidden = !image;
        layout.classList.toggle("is-text-only", !image);
        if (image) {
          photo.src = image;
          photo.alt = localized(area.imageAlt);
        } else {
          photo.removeAttribute("src");
          photo.alt = "";
        }

        $("#lifeModalTitle").textContent = localized(area.title);
        $("#lifeModalLead").textContent = localized(area.lead);
        $("#lifeModalDescription").innerHTML = localized(area.description)
          .map(paragraph => `<p>${escapeHTML(paragraph)}</p>`)
          .join("");
        $("#lifeModalHighlights").innerHTML = localized(area.highlights)
          .map(item => `<li>${escapeHTML(item)}</li>`)
          .join("");

        const contact = $("#lifeModalContact");
        contact.textContent = area.contact.label;
        contact.href = safeHref(area.contact.href);

        const action = $("#lifeModalAction");
        action.textContent = localized(area.action.label);
        action.href = safeHref(area.action.href);
      });
    }


    const setLanguage = (language, persist = true) => {
      currentLang = language === "en" ? "en" : "sk";
      if (persist) { try { localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLang); } catch (error) { console.warn("Language preference storage is unavailable:", error); } }
      refreshLocaleData();
      syncLanguageButtons();
      updateNextSunday();
      syncCarouselButton();
      renderProgram();
      renderAnnouncements();
      renderAdminEvents();
      selectedDateKey = null;
      renderCalendar();
      translateDOM(document.body);
    };

    $$('[data-lang]').forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));

    /* =========================================================
       8. INITIAL RENDER
       ========================================================= */
    applyTheme(selectedTheme);
    resetAnnouncementForm();
    resetEventForm();
    renderAnnouncements();
    renderAdminEvents();
    renderProgram();
    renderCalendar();
    setLanguage(currentLang, false);
