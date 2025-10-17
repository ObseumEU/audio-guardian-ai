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
      badge: 'AI-Powered Copyright Protection',
      title: 'Protect Your Business From',
      titleHighlight: 'Copyright Violations',
      description: 'Eliminate copyright risks across all your digital content. Automated detection and regulatory compliance reporting keeps your business protected from costly legal disputes and penalties.',
      requestDemo: 'Request Demo',
      viewDocs: 'How It Works',
      stat1Value: '98%',
      stat1Label: 'Detection Accuracy',
      stat2Value: '$0',
      stat2Label: 'In Legal Fees',
      stat3Value: '24/7',
      stat3Label: 'Protection',
    },
    benefits: {
      title: 'Why Choose',
      titleHighlight: 'Audexia',
      subtitle: 'Enterprise-grade protection built for scale, reliability, and seamless integration',
      benefit1Title: 'Eliminate Legal Risk',
      benefit1Desc: 'Proactively identify and resolve copyright violations before they escalate into costly lawsuits, fines, or regulatory action.',
      benefit2Title: 'Automate Compliance',
      benefit2Desc: 'Free your team from manual content audits. Maintain complete compliance while focusing on core business growth.',
      benefit3Title: 'Complete Coverage',
      benefit3Desc: 'Comprehensive protection across all digital assets with automatic regulatory reporting—ensuring continuous compliance.',
      benefit4Title: 'Protect Your Brand',
      benefit4Desc: 'Prevent content takedowns, platform penalties, and reputational damage that disrupt operations and revenue.',
    },
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Four automated steps to complete copyright protection',
      step1: 'Step',
      step1Title: 'Scan Content',
      step1Desc: 'Automatically scan websites, databases, and media feeds for copyrighted audio content',
      step2Title: 'AI Analysis',
      step2Desc: 'Match audio fingerprints against millions of records with industry-leading precision',
      step3Title: 'Verify Rights',
      step3Desc: 'Confirm copyright ownership, licensing status, and rights holders across global databases',
      step4Title: 'Auto-Report',
      step4Desc: 'Instantly submit compliance reports to rights organizations and regulatory authorities',
    },
    features: {
      title: 'Enterprise Benefits',
      subtitle: 'Measurable value for your organization',
      feature1Title: 'Reduce Legal Exposure',
      feature1Desc: 'Identify and resolve copyright issues before they escalate into lawsuits, penalties, or cease-and-desist orders',
      feature2Title: 'Safeguard Reputation',
      feature2Desc: 'Maintain brand integrity by ensuring all published content meets copyright compliance standards',
      feature3Title: 'Cost Savings',
      feature3Desc: 'Eliminate expensive legal fees, settlement costs, and platform penalties through proactive compliance',
      feature4Title: 'Regulatory Compliance',
      feature4Desc: 'Automated reporting ensures you meet all legal requirements across multiple jurisdictions',
      feature5Title: 'Peace of Mind',
      feature5Desc: 'Continuous monitoring of your entire content library ensures ongoing compliance and protection',
      feature6Title: 'Executive Dashboard',
      feature6Desc: 'Real-time insights showing compliance status, risk metrics, and protection coverage',
    },
    targetAudience: {
      title: 'Enterprise Use Cases',
      subtitle: 'Automated copyright compliance across your digital infrastructure',
      case1Title: 'Website Protection',
      case1Desc: 'Automatically scan all audio content on your websites and ensure complete copyright compliance with automated regulatory reporting.',
      case2Title: 'Database Monitoring',
      case2Desc: 'Continuously monitor your media databases for copyrighted content with real-time alerts and compliance tracking.',
      case3Title: 'Legal Risk Management',
      case3Desc: 'Shield your organization from copyright infringement lawsuits with automated detection and authority reporting.',
      case4Title: 'Multi-Jurisdiction Compliance',
      case4Desc: 'Maintain compliance with copyright laws across all jurisdictions through automatic regulatory submissions.',
    },
    cta: {
      title: 'Protect Your Business Today',
      description: 'Safeguard your business from copyright violations with automated scanning across all digital assets. From websites to databases—we detect violations, submit reports, and keep you compliant automatically.',
      requestDemo: 'Request Demo',
      scheduleCall: 'Schedule Consultation',
      footer: 'Flexible deployment • Enterprise scalability • 100% compliance guarantee',
    },
    footer: {
      brand: 'Obseum s.r.o.',
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
      viewDocs: 'Jak to funguje',
      stat1Value: '98%',
      stat1Label: 'Míra detekce',
      stat2Value: '0 Kč',
      stat2Label: 'Právní pokuty',
      stat3Value: '24/7',
      stat3Label: 'Ochrana',
    },
    benefits: {
      title: 'Proč zvolit',
      titleHighlight: 'Audexia',
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
      brand: 'Obseum s.r.o.',
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
