export type Lang = 'nl' | 'en'

export const t = {
  nav: {
    services: { nl: 'Diensten', en: 'Services' },
    about:    { nl: 'Over ons', en: 'About' },
    reviews:  { nl: 'Recensies', en: 'Reviews' },
    gallery:  { nl: 'Galerij',  en: 'Gallery' },
    contact:  { nl: 'Contact',  en: 'Contact' },
    booking:  { nl: 'Boek nu',   en: 'Book now' },
  },

  hero: {
    eyebrow:   { nl: 'Premium Barbershop Rijswijk', en: 'Premium Barbershop Rijswijk' },
    line1:     { nl: 'Uw Dagelijkse',                en: 'Your Daily' },
    line2:     { nl: 'Ervaring.',                    en: 'Experience.' },
    sub: {
      nl: 'Eersteklas kapper in het hart van Rijswijk. Wij combineren traditioneel vakmanschap met moderne precisie.',
      en: 'First-class barber in the heart of Rijswijk. We combine traditional craftsmanship with modern precision.',
    },
    rating:    { nl: '5.0 (45+ recensies)',           en: '5.0 (45+ reviews)' },
    cta:       { nl: 'Maak een Afspraak',             en: 'Book Appointment' },
    secondary: { nl: 'Bekijk Diensten',               en: 'View Services' },
    scroll:    { nl: 'Scroll omlaag',                en: 'Scroll down' },
  },

  services: {
    heading: { nl: 'Onze Diensten', en: 'Our Services' },
    sub: {
      nl: 'Kies uit ons aanbod van gespecialiseerde behandelingen. Elk detail is belangrijk.',
      en: 'Choose from our range of specialized treatments. Every detail matters.',
    },
    duration: { nl: 'min', en: 'min' },
    book:     { nl: 'Boek nu', en: 'Book now' },
  },

  about: {
    heading: { nl: 'Waarom Kiezen Voor Ons?', en: 'Why Choose Us?' },
    sub: {
      nl: 'Wij geloven dat een knipbeurt meer is dan alleen onderhoud — het is een moment voor uzelf.',
      en: 'We believe a haircut is more than just maintenance — it is a moment for yourself.',
    },
    text1: {
      nl: 'Bij Two in One Barberstudio draait alles om precisie en passie. Onze kappers zijn meesters in hun vak, gespecialiseerd in zowel klassieke kapsels als de modernste fades.',
      en: 'At Two in One Barberstudio, it is all about precision and passion. Our barbers are masters of their craft, specializing in both classic styles and the latest modern fades.',
    },
    text2: {
      nl: 'Elke klant die in onze stoel plaatsneemt krijgt onze volledige aandacht. Geen haast, geen compromissen — alleen puur vakmanschap en oprechte zorg voor uw uitstraling.',
      en: 'Every client who sits in our chair gets our full attention. No rushing, no compromises — just expert craftsmanship and genuine care for your look.',
    },
    pillars: [
      {
        nl: 'Precisie',     en: 'Precision',
        descNl: 'Elke snit is gemeten, elke rand is scherp. Wij haasten ons niet — wij creëren.',
        descEn: "Every cut is measured, every edge is clean. We don't rush — we craft.",
      },
      {
        nl: 'Sfeer',        en: 'Atmosphere',
        descNl: 'Een ontspannen omgeving waar u zich op uw gemak voelt vanaf het moment dat u binnenkomt.',
        descEn: 'A relaxed environment where you feel at ease from the moment you walk in.',
      },
      {
        nl: 'Vakmanschap',  en: 'Expertise',
        descNl: 'Jaren ervaring achter elke afspraak. Uw look is in vertrouwde hands.',
        descEn: 'Years of expertise behind every appointment. Your look is in trusted hands.',
      },
    ],
  },

  reviews: {
    heading: { nl: 'Wat Klanten Zeggen', en: 'What Clients Say' },
    sub: {
      nl: 'Neem niet ons woord ervoor — luister naar de mensen die wekelijks in onze stoel zitten.',
      en: "Don't take our word for it — hear from the people who sit in our chair every week.",
    },
    count: { nl: 'recensies', en: 'reviews' },
    prev:  { nl: 'Vorige',    en: 'Previous' },
    next:  { nl: 'Volgende',  en: 'Next' },
  },

  gallery: {
    heading: { nl: 'Ons Werk', en: 'Our Work' },
    sub: {
      nl: 'Elke foto vertelt een verhaal van vakmanschap. Van strakke skin fades tot scherpe lijnen — dit is hoe precisie eruitziet.',
      en: 'Every photo tells a story of craft. From clean skin fades to sharp line-ups — this is what precision looks like.',
    },
  },

  booking: {
    eyebrow:  { nl: 'Klaar?',          en: 'Ready?' },
    heading1: { nl: 'Uw beste look',   en: 'Your best look' },
    heading2: { nl: 'wacht op u.',     en: 'awaits.' },
    sub: {
      nl: 'Sluit u aan bij tientallen tevreden klanten in Rijswijk. Boek vandaag nog en ervaar het Two in One verschil.',
      en: 'Join dozens of satisfied clients in Rijswijk. Book today and experience the Two in One difference.',
    },
    cta:   { nl: 'Afspraak Maken',  en: 'Book Appointment' },
    phone: { nl: 'Of bel ons direct op', en: 'Or call us directly at' },
  },

  contact: {
    heading:    { nl: 'Vind ons',         en: 'Find Us' },
    sub:        { nl: 'In het hart van Rijswijk — gemakkelijk bereikbaar, onvergetelijk.', en: 'In the heart of Rijswijk — easy to reach, impossible to forget.' },
    address:    { nl: 'Adres',            en: 'Address' },
    directions: { nl: 'Route plannen',    en: 'Get directions' },
    phone:      { nl: 'Telefoon',         en: 'Phone' },
    hours:      { nl: 'Openingstijden',   en: 'Opening Hours' },
  },

  footer: {
    rights: { nl: 'Alle rechten voorbehouden.', en: 'All rights reserved.' },
    links: {
      nl: ['Diensten', 'Over ons', 'Recensies', 'Galerij', 'Contact'],
      en: ['Services', 'About',    'Reviews',   'Gallery', 'Contact'],
    },
  },

  sticky: {
    title:   { nl: 'Klaar voor uw look?',  en: 'Ready for your look?' },
    sub:     { nl: 'Maak nu een afspraak', en: 'Book your appointment' },
    cta:     { nl: 'Boek nu',             en: 'Book now' },
    desktop: { nl: 'Afspraak maken',      en: 'Book appointment' },
  },

  modal: {
    title:     { nl: 'Afspraak Maken',    en: 'Book Appointment' },
    confirmed: { nl: 'Afspraak bevestigd', en: 'Appointment confirmed' },
    close:     { nl: 'Sluiten',           en: 'Close' },
    cancel:    { nl: 'Annuleren',         en: 'Cancel' },
    back:      { nl: 'Terug',             en: 'Back' },
    next:      { nl: 'Volgende',          en: 'Next' },
    confirm:   { nl: 'Bevestig Afspraak', en: 'Confirm Appointment' },
    steps: {
      service:  { nl: 'Dienst',       en: 'Service' },
      barber:   { nl: 'Kapper',       en: 'Barber' },
      datetime: { nl: 'Datum & Tijd', en: 'Date & Time' },
      details:  { nl: 'Uw gegevens',  en: 'Your details' },
    },
    step1: {
      heading: { nl: 'Kies uw dienst', en: 'Choose your service' },
      popular: { nl: 'Populair',       en: 'Popular' },
    },
    step2: {
      heading: { nl: 'Kies uw kapper', en: 'Choose your barber' },
    },
    step3: {
      heading:   { nl: 'Datum & Tijd',        en: 'Date & Time' },
      chooseDay: { nl: 'Kies een dag',        en: 'Choose a day' },
      times:     { nl: 'Beschikbare tijden',  en: 'Available times' },
    },
    step4: {
      heading:  { nl: 'Uw gegevens',           en: 'Your details' },
      name:     { nl: 'Naam *',                en: 'Name *' },
      namePh:   { nl: 'Uw volledige naam',     en: 'Your full name' },
      phone:    { nl: 'Telefoonnummer *',      en: 'Phone number *' },
      phonePh:  { nl: '+31 6 ...',             en: '+31 6 ...' },
      email:    { nl: 'E-mailadres',           en: 'Email address' },
      emailPh:  { nl: 'uw@email.com',          en: 'your@email.com' },
      note:     { nl: 'Opmerking',             en: 'Note' },
      notePh:   { nl: 'Eventuele wensen of opmerkingen...', en: 'Any wishes or comments...' },
    },
    summary: {
      service:  { nl: 'Dienst',       en: 'Service' },
      barber:   { nl: 'Kapper',       en: 'Barber' },
      date:     { nl: 'Datum',        en: 'Date' },
      time:     { nl: 'Tijd',         en: 'Time' },
      name:     { nl: 'Naam',         en: 'Name' },
      datetime: { nl: 'Datum & Tijd', en: 'Date & Time' },
    },
    success: {
      title:   { nl: 'Afspraak aangevraagd!', en: 'Appointment requested!' },
      sub:     { nl: 'We nemen spoedig contact met u op ter bevestiging.', en: "We'll be in touch shortly to confirm your appointment." },
      phone:   { nl: 'Of bel ons direct op',  en: 'Or call us directly at' },
    },
  },
}
