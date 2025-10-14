import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'cs';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.en;
}

const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      contact: 'Contact',
    },
    hero: {
      badge: 'AI-Powered Copyright Detection',
      title: 'Protect Your Business from',
      titleHighlight: 'Copyright Risk',
      description: 'Eliminate copyright violations across your digital content. Automated detection and regulatory reporting keeps your business compliant and protected from costly legal disputes.',
      requestDemo: 'Request a Demo',
      viewDocs: 'View Documentation',
      stat1Value: '98%',
      stat1Label: 'Detection Rate',
      stat2Value: '$0',
      stat2Label: 'Legal Penalties',
      stat3Value: '100%',
      stat3Label: 'Compliant',
    },
    benefits: {
      title: 'Why',
      titleHighlight: 'Corporates',
      subtitle: 'Built for scale, designed for reliability, optimized for your workflow',
      benefit1Title: 'Risk Mitigation',
      benefit1Desc: 'Prevent costly lawsuits and regulatory fines by proactively identifying copyright violations before they become legal issues.',
      benefit2Title: 'Save Time & Resources',
      benefit2Desc: 'Eliminate manual content reviews and free your team to focus on core business activities while maintaining full compliance.',
      benefit3Title: 'Complete Protection',
      benefit3Desc: 'Comprehensive coverage across all your digital assets with automatic reporting to authorities—ensuring you\'re always compliant.',
      benefit4Title: 'Business Continuity',
      benefit4Desc: 'Avoid content takedowns, platform penalties, and reputation damage that can disrupt your operations and revenue.',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Four simple steps to complete copyright protection',
      step1: 'Step',
      step1Title: 'Scan',
      step1Desc: 'Automatically scan your website content, databases, or video feeds for copyrighted audio',
      step2Title: 'Analyze',
      step2Desc: 'Match audio against millions of fingerprint records with high precision detection',
      step3Title: 'Identify',
      step3Desc: 'Verify copyright ownership, labels, and licensing status across multiple databases',
      step4Title: 'Report to Authorities',
      step4Desc: 'Automatically submit compliance reports to rights organizations and regulatory bodies',
    },
    features: {
      title: 'Business Benefits',
      subtitle: 'Tangible value for your organization',
      feature1Title: 'Reduce Legal Exposure',
      feature1Desc: 'Identify and address copyright issues before they result in lawsuits, penalties, or cease-and-desist orders',
      feature2Title: 'Protect Your Reputation',
      feature2Desc: 'Maintain your brand integrity by ensuring all published content is fully compliant with copyright laws',
      feature3Title: 'Cost Savings',
      feature3Desc: 'Avoid expensive legal fees, settlement costs, and content removal penalties through proactive compliance',
      feature4Title: 'Regulatory Compliance',
      feature4Desc: 'Automated reporting to authorities ensures you meet all legal requirements across jurisdictions',
      feature5Title: 'Peace of Mind',
      feature5Desc: 'Sleep better knowing your entire content library is continuously monitored and compliant',
      feature6Title: 'Executive Insights',
      feature6Desc: 'Clear reporting and dashboards showing your compliance status and risk reduction metrics',
    },
    targetAudience: {
      title: 'Business Use Cases',
      subtitle: 'Automatic copyright compliance across your entire digital infrastructure',
      case1Title: 'Website Compliance',
      case1Desc: 'Automatically scan all audio content on your website and ensure full copyright compliance with automated reporting to authorities.',
      case2Title: 'Database Auditing',
      case2Desc: 'Continuously monitor your audio databases for copyrighted content and maintain legal compliance with real-time alerts.',
      case3Title: 'Corporate Legal Protection',
      case3Desc: 'Protect your organization from copyright infringement lawsuits with automated detection and authority reporting.',
      case4Title: 'Regulatory Compliance',
      case4Desc: 'Stay compliant with copyright laws across jurisdictions through automatic submission of findings to regulatory bodies.',
    },
    cta: {
      title: 'Protect Your Business Today',
      description: 'Protect your business from copyright violations with automated scanning of all your digital assets. From websites to databases—we detect, report, and keep you compliant with authorities automatically.',
      requestDemo: 'Request a Demo',
      scheduleCall: 'Schedule Integration Call',
      footer: 'Flexible deployment options • Scales with your business • Full compliance guarantee',
    },
    footer: {
      brand: 'Obseum',
      tagline: 'Your strategic technology partner for enterprise digital transformation and innovation excellence.',
      solutionsTitle: 'Solutions',
      solution1: 'Custom Software Development',
      solution2: 'AI & Machine Learning',
      solution3: 'Cybersecurity & Penetration Testing',
      contactTitle: 'Contact',
      email: 'info@obseum.cz',
      phone: '+420 724 676 829',
      copyright: '© 2024 Obseum. All rights reserved.',
    },
  },
  cs: {
    nav: {
      features: 'Funkce',
      howItWorks: 'Jak to funguje',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Detekce autorských práv pomocí AI',
      title: 'Chraňte své podnikání před',
      titleHighlight: 'rizikem porušení autorských práv',
      description: 'Eliminujte porušování autorských práv napříč vaším digitálním obsahem. Automatická detekce a hlášení regulačním orgánům udržuje vaše podnikání v souladu s předpisy a chráněné před nákladnými právními spory.',
      requestDemo: 'Požádat o demo',
      viewDocs: 'Zobrazit dokumentaci',
      stat1Value: '98%',
      stat1Label: 'Míra detekce',
      stat2Value: '0 Kč',
      stat2Label: 'Právní pokuty',
      stat3Value: '100%',
      stat3Label: 'V souladu',
    },
    benefits: {
      title: 'Proč',
      titleHighlight: 'korporace',
      subtitle: 'Vytvořeno pro škálování, navrženo pro spolehlivost, optimalizováno pro váš workflow',
      benefit1Title: 'Snížení rizik',
      benefit1Desc: 'Předcházejte nákladným soudním sporům a regulačním pokutám proaktivní identifikací porušení autorských práv dříve, než se stanou právními problémy.',
      benefit2Title: 'Úspora času a zdrojů',
      benefit2Desc: 'Eliminujte manuální kontroly obsahu a umožněte svému týmu zaměřit se na klíčové obchodní aktivity při zachování plné compliance.',
      benefit3Title: 'Kompletní ochrana',
      benefit3Desc: 'Komplexní pokrytí všech vašich digitálních aktiv s automatickým hlášením orgánům—zajištění stálé compliance.',
      benefit4Title: 'Kontinuita podnikání',
      benefit4Desc: 'Vyhněte se stahování obsahu, pokutám platforem a poškození reputace, které mohou narušit vaše operace a příjmy.',
    },
    howItWorks: {
      title: 'Jak to funguje',
      subtitle: 'Čtyři jednoduché kroky ke kompletní ochraně autorských práv',
      step1: 'Krok',
      step1Title: 'Skenování',
      step1Desc: 'Automatické skenování obsahu webu, databází nebo video kanálů na chráněné audio',
      step2Title: 'Analýza',
      step2Desc: 'Porovnání audia s miliony záznamů otisků s vysokou přesností detekce',
      step3Title: 'Identifikace',
      step3Desc: 'Ověření vlastnictví autorských práv, labelů a licenčního statusu napříč databázemi',
      step4Title: 'Hlášení orgánům',
      step4Desc: 'Automatické zasílání reportů o souladu organizacím práv a regulačním orgánům',
    },
    features: {
      title: 'Obchodní přínosy',
      subtitle: 'Hmatatelná hodnota pro vaši organizaci',
      feature1Title: 'Snížení právní expozice',
      feature1Desc: 'Identifikujte a řešte problémy s autorskými právy dříve, než se z nich stanou žaloby, pokuty nebo příkazy k zastavení',
      feature2Title: 'Ochrana reputace',
      feature2Desc: 'Udržujte integritu vaší značky zajištěním, že veškerý publikovaný obsah je plně v souladu s autorskými zákony',
      feature3Title: 'Úspora nákladů',
      feature3Desc: 'Vyhněte se drahým právním poplatkům, nákladům na vyrovnání a pokutám za odstranění obsahu proaktivní compliance',
      feature4Title: 'Regulační soulad',
      feature4Desc: 'Automatické hlášení orgánům zajišťuje splnění všech právních požadavků napříč jurisdikcemi',
      feature5Title: 'Klid v duši',
      feature5Desc: 'Spěte klidně s vědomím, že celá vaše knihovna obsahu je průběžně monitorována a v souladu',
      feature6Title: 'Manažerské přehledy',
      feature6Desc: 'Přehledné reporty a dashboardy ukazující váš status compliance a metriky snížení rizik',
    },
    targetAudience: {
      title: 'Obchodní případy použití',
      subtitle: 'Automatická compliance autorských práv napříč celou vaší digitální infrastrukturou',
      case1Title: 'Soulad webu',
      case1Desc: 'Automatické skenování veškerého audio obsahu na vašem webu a zajištění plného souladu s autorskými právy s automatickým hlášením orgánům.',
      case2Title: 'Audit databází',
      case2Desc: 'Průběžné monitorování vašich audio databází na chráněný obsah a udržování právního souladu s real-time upozorněními.',
      case3Title: 'Právní ochrana korporace',
      case3Desc: 'Chraňte svou organizaci před žalobami za porušení autorských práv s automatickou detekcí a hlášením orgánům.',
      case4Title: 'Regulační soulad',
      case4Desc: 'Zůstaňte v souladu se zákony o autorských právech napříč jurisdikcemi automatickým zasíláním zjištění regulačním orgánům.',
    },
    cta: {
      title: 'Chraňte své podnikání ještě dnes',
      description: 'Chraňte své podnikání před porušováním autorských práv s automatickým skenováním všech vašich digitálních aktiv. Od webů po databáze—detekujeme, hlásíme a udržujeme vás v souladu s orgány automaticky.',
      requestDemo: 'Požádat o demo',
      scheduleCall: 'Naplánovat integrační hovor',
      footer: 'Flexibilní možnosti nasazení • Škáluje s vaším podnikáním • Plná záruka souladu',
    },
    footer: {
      brand: 'Obseum',
      tagline: 'Váš strategický technologický partner pro podnikovou digitální transformaci a inovační excelenci.',
      solutionsTitle: 'Řešení',
      solution1: 'Vývoj Vlastního Softwaru',
      solution2: 'AI & Strojové Učení',
      solution3: 'Kybernetická Bezpečnost & Penetrační Testování',
      contactTitle: 'Kontakt',
      email: 'info@obseum.cz',
      phone: '+420 724 676 829',
      copyright: '© 2024 Obseum. Všechna práva vyhrazena.',
    },
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
