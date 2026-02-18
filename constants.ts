import { 
  FileText, 
  Briefcase, 
  Users, 
  ShoppingBag, 
  UserCheck, 
  Languages, 
  LayoutTemplate, 
  CheckCircle,
  FileCheck,
  Zap,
  Star
} from 'lucide-react';

export const URLS = {
  HOME: '#hero',
  LOGIN: 'https://www.cveeez.net/login?redirect=%2Fservices%2Fai-cv-builder',
  JOBS: 'https://www.cveeez.net/jobs',
  TRANSLATOR: 'https://www.cveeez.net/translator',
  TEMPLATES: 'https://www.cveeez.net/templates',
  ECOMMERCE: 'https://www.cveeez.net/ecommerce',
  PRICING: 'https://www.cveeez.net/pricing',
  TERMS: 'https://www.cveeez.net/terms',
  PRIVACY: 'https://www.cveeez.net/privacy',
  REFUND: 'https://www.cveeez.net/refund-policy',
  SUPPORT_EMAIL: 'support@cveeez.online',
};

export const CONTACT_INFO = {
  PHONE: '+20 106 523 6963',
  EMAIL: 'cveeez@cveeez.online',
  LOCATION: 'Cairo, Egypt',
};

const MODULES_DATA = {
  ar: [
    {
      id: 1,
      title: 'صانع السيرة الذاتية AI',
      desc: 'أنشئ سيرة ذاتية احترافية في دقائق باستخدام الذكاء الاصطناعي.',
      icon: FileText,
      link: URLS.LOGIN,
      cta: 'ابدأ الآن'
    },
    {
      id: 2,
      title: 'بوابة الوظائف',
      desc: 'تصفح آلاف الوظائف المتاحة وقدم عليها بسهولة.',
      icon: Briefcase,
      link: URLS.JOBS,
      cta: 'تصفح الوظائف'
    },
    {
      id: 3,
      title: 'مساحة المواهب',
      desc: 'انضم لمجتمع مهني متكامل وشارك خبراتك.',
      icon: Users,
      link: URLS.LOGIN,
      cta: 'انضم للمجتمع'
    },
    {
      id: 4,
      title: 'المتجر الإلكتروني',
      desc: 'خدمات احترافية لمراجعة سيرتك وتحسين ملفك المهني.',
      icon: ShoppingBag,
      link: URLS.ECOMMERCE,
      cta: 'تصفح الخدمات'
    },
    {
      id: 5,
      title: 'مستشار المسار الوظيفي',
      desc: 'احصل على توجيه مهني متخصص لنمو مستقبلك.',
      icon: UserCheck,
      link: URLS.LOGIN,
      cta: 'استشر الآن',
      isNew: true
    },
    {
      id: 6,
      title: 'المترجم الفوري',
      desc: 'ترجم النصوص بين العربية والإنجليزية بشكل فوري ومجاني.',
      icon: Languages,
      link: URLS.TRANSLATOR,
      cta: 'ترجم مجاناً'
    },
    {
      id: 7,
      title: 'قوالب احترافية',
      desc: 'مجموعة من القوالب المتوافقة مع أنظمة ATS.',
      icon: LayoutTemplate,
      link: URLS.TEMPLATES,
      cta: 'شاهد القوالب'
    }
  ],
  en: [
    {
      id: 1,
      title: 'AI CV Builder',
      desc: 'Create a professional CV in minutes using Artificial Intelligence.',
      icon: FileText,
      link: URLS.LOGIN,
      cta: 'Start Now'
    },
    {
      id: 2,
      title: 'Job Portal',
      desc: 'Browse thousands of available jobs and apply easily.',
      icon: Briefcase,
      link: URLS.JOBS,
      cta: 'Browse Jobs'
    },
    {
      id: 3,
      title: 'Talent Hub',
      desc: 'Join a complete professional community and share your expertise.',
      icon: Users,
      link: URLS.LOGIN,
      cta: 'Join Community'
    },
    {
      id: 4,
      title: 'E-Store',
      desc: 'Professional services to review your CV and improve your profile.',
      icon: ShoppingBag,
      link: URLS.ECOMMERCE,
      cta: 'Browse Services'
    },
    {
      id: 5,
      title: 'Career Advisor',
      desc: 'Get specialized career guidance for your future growth.',
      icon: UserCheck,
      link: URLS.LOGIN,
      cta: 'Consult Now',
      isNew: true
    },
    {
      id: 6,
      title: 'Instant Translator',
      desc: 'Translate text between Arabic and English instantly and for free.',
      icon: Languages,
      link: URLS.TRANSLATOR,
      cta: 'Translate Free'
    },
    {
      id: 7,
      title: 'Pro Templates',
      desc: 'A collection of ATS-compatible templates.',
      icon: LayoutTemplate,
      link: URLS.TEMPLATES,
      cta: 'View Templates'
    }
  ]
};

const SERVICES_CATS_DATA = {
  ar: [
    { title: 'كتابة السيرة الذاتية', icon: FileCheck },
    { title: 'التطوير المهني', icon: Zap },
    { title: 'البحث عن وظيفة', icon: Briefcase },
    { title: 'الأدوات والموارد', icon: Star },
  ],
  en: [
    { title: 'CV Writing', icon: FileCheck },
    { title: 'Career Development', icon: Zap },
    { title: 'Job Search', icon: Briefcase },
    { title: 'Tools & Resources', icon: Star },
  ]
};

const FAQS_DATA = {
  ar: [
    {
      q: 'كيف يمكنني الدفع؟',
      a: 'يمكنك الدفع عبر المحفظة الإلكترونية أو بطاقات الائتمان من خلال بوابة Kashier الآمنة.'
    },
    {
      q: 'هل يمكنني تغيير باقتي؟',
      a: 'نعم، يمكنك الترقية أو تغيير باقتك في أي وقت من لوحة التحكم.'
    },
    {
      q: 'هل توجد فترة تجريبية؟',
      a: 'نعم، يمكنك إنشاء حساب مجاني واستكشاف المنصة قبل الاشتراك في أي باقة.'
    }
  ],
  en: [
    {
      q: 'How can I pay?',
      a: 'You can pay via e-wallets or credit cards through the secure Kashier gateway.'
    },
    {
      q: 'Can I change my plan?',
      a: 'Yes, you can upgrade or change your plan at any time from your dashboard.'
    },
    {
      q: 'Is there a trial period?',
      a: 'Yes, you can create a free account and explore the platform before subscribing to any plan.'
    }
  ]
};

export const getModules = (lang: 'ar' | 'en') => MODULES_DATA[lang];
export const getServicesCats = (lang: 'ar' | 'en') => SERVICES_CATS_DATA[lang];
export const getFaqs = (lang: 'ar' | 'en') => FAQS_DATA[lang];
