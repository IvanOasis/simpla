export type Lang = 'en' | 'es'

export interface Translations {
  nav: {
    links: { href: string; label: string }[]
    cta: string
  }
  hero: {
    headline1: string
    headline2: string
    description: string
    cta1: string
    cta2: string
    stats: { value: string; label: string }[]
  }
  services: {
    title: string
    subtitle: string
    items: { title: string; description: string; subitems: string[] }[]
  }
  work: {
    title: string
    subtitle: string
    cta: string
    cases: { headline: string; client: string; industry: string; services: string }[]
  }
  method: {
    title: string
    subtitle: string
    steps: { number: string; title: string; description: string }[]
  }
  testimonials: { name: string; role: string; quote: string }[]
  blog: {
    title: string
    subtitle: string
    cta: string
    posts: { title: string; excerpt: string; category: string; date: string; readTime: string }[]
  }
  contact: {
    title: string
    subtitle: string
    placeholder: string
    cta: string
    disclaimer: string
  }
  footer: {
    description: string
    servicesTitle: string
    services: string[]
    companyTitle: string
    companyLinks: { label: string; href: string }[]
    copyright: string
    tagline: string
  }
  manifesto: {
    line1: string
    line2: string
    body: string
  }
}

const en: Translations = {
  nav: {
    links: [
      { href: '#services', label: 'Services' },
      { href: '#work', label: 'Work' },
      { href: '#method', label: 'How we work' },
      { href: '#blog', label: 'Blog' },
    ],
    cta: "Let's talk",
  },
  hero: {
    headline1: 'We learn your business.',
    headline2: 'Then we grow it.',
    description:
      'Simpla is a full-service marketing agency for SMBs and growing businesses. We combine strategic understanding with AI-powered execution — so your marketing works around the clock, not just during office hours.',
    cta1: "Let's talk",
    cta2: 'See our work',
    stats: [
      { value: 'SMB', label: 'Focused' },
      { value: 'AI', label: 'Powered' },
      { value: '24/7', label: 'Working' },
    ],
  },
  services: {
    title: 'What we do.',
    subtitle:
      'Six practice areas. One agency that actually understands your business before touching a single channel.',
    items: [
      {
        title: 'Content',
        description:
          'Social media, blog, and newsletter — content that resonates with your audience and builds your brand over time.',
        subitems: ['Social Strategy', 'High-Converting Copy', 'Brand Storytelling', 'Content Calendars'],
      },
      {
        title: 'Paid Media',
        description:
          'Google, Meta, LinkedIn, TikTok, YouTube, Reddit — and yes, ChatGPT Ads. Every platform your customers are on.',
        subitems: ['Meta & Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Retargeting Funnels', 'Budget Optimization'],
      },
      {
        title: 'Web & Visibility',
        description:
          'Websites, SEO, GEO (AI search presence), landing pages, CRO, analytics, and Google My Business. Being found is step one.',
        subitems: ['High-Performance Landing Pages', 'AI-Powered SEO (GEO)', 'Conversion UX', 'Advanced Analytics'],
      },
      {
        title: 'Automation',
        description:
          'Chatbots, CRM flows, lead nurturing, AI content repurposing. Systems that generate results while you sleep.',
        subitems: ['Lead-Gen Chatbots', 'CRM Automations', 'AI Outbound Systems', 'Workflow Optimization'],
      },
      {
        title: 'Video & Creative',
        description:
          'Video production, Reels, TikTok, brand identity, UGC coordination, and AI-generated video. Creativity with a purpose.',
        subitems: ['Short-form Reels/TikTok', 'UGC Direction', 'AI-Generated Promos', 'Visual Brand Identity'],
      },
      {
        title: 'Strategy & Consulting',
        description:
          'Brand positioning, funnel mapping, competitor analysis, ICP definition, and growth roadmaps. The thinking before the doing.',
        subitems: ['Market Positioning', 'Competitive Audits', 'Growth Roadmaps', 'ICP Identification'],
      },
    ],
  },
  work: {
    title: 'Work that speaks.',
    subtitle: 'Real results for real businesses.',
    cta: 'View all cases',
    cases: [
      {
        headline: '3× revenue in 6 months',
        client: 'Fridge & Flow',
        industry: 'E-commerce / Food',
        services: 'Paid Media, Content',
      },
      {
        headline: 'From zero to 50K monthly visitors',
        client: 'Nómada Studio',
        industry: 'Design / SaaS',
        services: 'SEO, GEO, Web',
      },
      {
        headline: '–62% cost per lead in 90 days',
        client: 'Kinetic',
        industry: 'Fitness / App',
        services: 'Meta Ads, Automation',
      },
    ],
  },
  method: {
    title: 'How we work.',
    subtitle: 'We start by understanding. Then we build. Then we compound.',
    steps: [
      {
        number: '01',
        title: 'We learn your business',
        description:
          'Before any campaign goes live, we invest time understanding your business model, your customers, and what success actually means for you. This is not a standard onboarding form. It is a real conversation.',
      },
      {
        number: '02',
        title: 'We build the strategy',
        description:
          'No templates, no copy-paste playbooks. We design a strategy specific to your business — the right channels, the right message, the right timing — and align on what we\'re measuring.',
      },
      {
        number: '03',
        title: 'We execute with AI + automation',
        description:
          'We combine hands-on execution with modern infrastructure: automated workflows, content pipelines, and systems that run 24/7 without adding headcount.',
      },
      {
        number: '04',
        title: 'We report transparently',
        description:
          'Every client gets clear, honest reporting. We show what is working, what is not, and what we are doing about it. No vanity metrics, no spin. Just the truth and the next move.',
      },
    ],
  },
  testimonials: [
    {
      name: 'Valentina Ríos',
      role: 'Founder, Fridge & Flow',
      quote:
        'Simpla actually took the time to understand how our business works before running a single ad. That changed everything — we tripled revenue in six months and the team felt like true partners.',
    },
    {
      name: 'Matias Carranza',
      role: 'CEO, Nómada Studio',
      quote:
        'Every agency we worked with before handed us a package and ran the same playbook. Simpla was different. They built systems that keep generating results on their own.',
    },
  ],
  blog: {
    title: 'How we think.',
    subtitle: 'Straight talk on marketing, automation, and growing a business in 2025.',
    cta: 'Read all articles',
    posts: [
      {
        title: 'GEO: Why your SEO strategy is missing the most important channel of 2025',
        excerpt:
          'ChatGPT, Perplexity, and Google AI Overviews are now answering your customers\' questions. If your business isn\'t showing up there, someone else is.',
        category: 'Web & Visibility',
        date: 'Apr 2025',
        readTime: '6 min',
      },
      {
        title: 'The agency trap: why packages are killing your marketing ROI',
        excerpt:
          'Most agencies sell you a bundle and run the same playbook they ran last month. Here\'s what to ask for instead.',
        category: 'Strategy',
        date: 'Mar 2025',
        readTime: '5 min',
      },
      {
        title: 'Marketing that works while you sleep: a guide to automation for SMBs',
        excerpt:
          'You don\'t need a big team to have a 24/7 marketing operation. You need the right systems. Here\'s where to start.',
        category: 'Automation',
        date: 'Feb 2025',
        readTime: '7 min',
      },
    ],
  },
  contact: {
    title: 'Ready to grow?',
    subtitle:
      "Tell us about your business. No packages, no templates — just a real conversation about what would actually move the needle for you.",
    placeholder: 'your@email.com',
    cta: "Let's talk",
    disclaimer: 'No spam, ever. Just a conversation.',
  },
  footer: {
    description:
      'Simpla is a full-service marketing agency for SMBs and growing businesses. We learn your business, then we grow it.',
    servicesTitle: 'Services',
    services: [
      'Content',
      'Paid Media',
      'Web & Visibility',
      'Automation',
      'Video & Creative',
      'Strategy & Consulting',
    ],
    companyTitle: 'Company',
    companyLinks: [
      { label: 'About', href: '#' },
      { label: 'Work', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'LATAM', href: '/latam-marketing' },
      { label: 'Contact', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. All rights reserved.',
    tagline: 'Marketing that works while you sleep.',
  },
  manifesto: {
    line1: 'Most agencies sell packages.',
    line2: 'We learn your business first.',
    body:
      'Before any campaign goes live, we invest time understanding your business model, your customers, and your bottlenecks. Because marketing without that understanding is just noise — and you\'ve probably paid for enough of that already.',
  },
}

const es: Translations = {
  nav: {
    links: [
      { href: '#services', label: 'Servicios' },
      { href: '#work', label: 'Casos' },
      { href: '#method', label: 'Cómo trabajamos' },
      { href: '#blog', label: 'Blog' },
    ],
    cta: 'Hablemos',
  },
  hero: {
    headline1: 'Aprendemos tu negocio.',
    headline2: 'Después lo hacemos crecer.',
    description:
      'Simpla es una agencia de marketing integral para pymes y empresas en crecimiento. Combinamos entendimiento estratégico con ejecución basada en IA — para que tu marketing funcione todo el tiempo, no solo en horario de oficina.',
    cta1: 'Hablemos',
    cta2: 'Ver casos',
    stats: [
      { value: 'Pymes', label: 'Nuestro foco' },
      { value: 'IA', label: 'Potenciado' },
      { value: '24/7', label: 'Trabajando' },
    ],
  },
  services: {
    title: 'Lo que hacemos.',
    subtitle:
      'Seis áreas de servicio. Una sola agencia que entiende tu negocio antes de tocar un solo canal.',
    items: [
      {
        title: 'Contenido',
        description:
          'Redes sociales, blog y newsletter — contenido que conecta con tu audiencia y construye tu marca con el tiempo.',
        subitems: ['Estrategia Social', 'Copywriting de Conversión', 'Storytelling de Marca', 'Calendarios de Contenido'],
      },
      {
        title: 'Paid Media',
        description:
          'Google, Meta, LinkedIn, TikTok, YouTube, Reddit — y ChatGPT Ads. Cada plataforma donde están tus clientes.',
        subitems: ['Meta & Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Embudos de Retargeting', 'Optimización de Presupuesto'],
      },
      {
        title: 'Web & Visibilidad',
        description:
          'Sitios web, SEO, GEO (presencia en IA), landing pages, CRO, analítica y Google My Business. Que te encuentren es el primer paso.',
        subitems: ['Landing Pages de Alto Rendimiento', 'SEO Potenciado por IA (GEO)', 'UX de Conversión', 'Analítica Avanzada'],
      },
      {
        title: 'Automatización',
        description:
          'Chatbots, flujos de CRM, lead nurturing, repurposing con IA. Sistemas que generan resultados mientras dormís.',
        subitems: ['Chatbots de Lead-Gen', 'Automatizaciones de CRM', 'Sistemas de Outbound con IA', 'Optimización de Workflows'],
      },
      {
        title: 'Video & Creatividad',
        description:
          'Producción de video, Reels, TikTok, identidad de marca, UGC y video con IA. Creatividad con propósito.',
        subitems: ['Reels/TikTok de Formato Corto', 'Dirección de UGC', 'Promos Generadas con IA', 'Identidad Visual de Marca'],
      },
      {
        title: 'Estrategia & Consultoría',
        description:
          'Posicionamiento, mapeo de funnel, análisis de competencia, definición de ICP y roadmaps. El pensamiento antes de la ejecución.',
        subitems: ['Posicionamiento de Mercado', 'Auditorías Competitivas', 'Roadmaps de Crecimiento', 'Identificación de ICP'],
      },
    ],
  },
  work: {
    title: 'Casos que hablan.',
    subtitle: 'Resultados reales para negocios reales.',
    cta: 'Ver todos los casos',
    cases: [
      {
        headline: '3× de facturación en 6 meses',
        client: 'Fridge & Flow',
        industry: 'E-commerce / Food',
        services: 'Paid Media, Contenido',
      },
      {
        headline: 'De cero a 50K visitas mensuales',
        client: 'Nómada Studio',
        industry: 'Diseño / SaaS',
        services: 'SEO, GEO, Web',
      },
      {
        headline: '–62% costo por lead en 90 días',
        client: 'Kinetic',
        industry: 'Fitness / App',
        services: 'Meta Ads, Automatización',
      },
    ],
  },
  method: {
    title: 'Cómo trabajamos.',
    subtitle: 'Primero entendemos. Después construimos. Después todo se acumula.',
    steps: [
      {
        number: '01',
        title: 'Aprendemos tu negocio',
        description:
          'Antes de lanzar cualquier campaña, nos tomamos el tiempo de entender tu modelo de negocio, tus clientes y qué significa realmente el éxito para vos. No es un formulario de onboarding. Es una conversación real.',
      },
      {
        number: '02',
        title: 'Construimos la estrategia',
        description:
          'Sin templates ni playbooks copiados. Diseñamos una estrategia específica para tu negocio — los canales correctos, el mensaje correcto, el momento correcto — y acordamos qué vamos a medir.',
      },
      {
        number: '03',
        title: 'Ejecutamos con IA + automatización',
        description:
          'Combinamos ejecución directa con infraestructura moderna: flujos automatizados, pipelines de contenido y sistemas que funcionan 24/7 sin sumar personal.',
      },
      {
        number: '04',
        title: 'Reportamos sin filtros',
        description:
          'Cada cliente recibe reportes claros y honestos. Mostramos lo que funciona, lo que no funciona y qué estamos haciendo al respecto. Sin métricas de vanidad, sin adornos. Solo la verdad y el próximo paso.',
      },
    ],
  },
  testimonials: [
    {
      name: 'Valentina Ríos',
      role: 'Fundadora, Fridge & Flow',
      quote:
        'Simpla se tomó el tiempo de entender cómo funciona nuestro negocio antes de correr un solo anuncio. Eso cambió todo — triplicamos la facturación en seis meses y el equipo se sintió como un verdadero socio.',
    },
    {
      name: 'Matias Carranza',
      role: 'CEO, Nómada Studio',
      quote:
        'Todas las agencias con las que trabajamos antes nos daban un paquete y corrían el mismo playbook. Simpla fue distinto. Construyeron sistemas que siguen generando resultados solos.',
    },
  ],
  blog: {
    title: 'Cómo pensamos.',
    subtitle: 'Ideas directas sobre marketing, automatización y cómo hacer crecer un negocio en 2025.',
    cta: 'Ver todos los artículos',
    posts: [
      {
        title: 'GEO: por qué tu estrategia de SEO está ignorando el canal más importante de 2025',
        excerpt:
          'ChatGPT, Perplexity y Google AI Overviews ya están respondiendo las preguntas de tus clientes. Si tu negocio no aparece ahí, alguien más lo hace.',
        category: 'Web & Visibilidad',
        date: 'Abr 2025',
        readTime: '6 min',
      },
      {
        title: 'La trampa de los paquetes: por qué destruyen tu ROI de marketing',
        excerpt:
          'La mayoría de las agencias te venden un bundle y corren el mismo playbook que corrieron el mes pasado. Acá está lo que tenés que pedir en cambio.',
        category: 'Estrategia',
        date: 'Mar 2025',
        readTime: '5 min',
      },
      {
        title: 'Marketing que trabaja mientras dormís: guía de automatización para pymes',
        excerpt:
          'No necesitás un equipo grande para tener una operación de marketing 24/7. Necesitás los sistemas correctos. Por acá se empieza.',
        category: 'Automatización',
        date: 'Feb 2025',
        readTime: '7 min',
      },
    ],
  },
  contact: {
    title: '¿Arrancamos?',
    subtitle:
      'Contanos de tu negocio. Sin paquetes, sin templates — solo una conversación real sobre qué te movería la aguja.',
    placeholder: 'tu@email.com',
    cta: 'Hablemos',
    disclaimer: 'Sin spam. Solo una conversación.',
  },
  footer: {
    description:
      'Simpla es una agencia de marketing integral para pymes y empresas en crecimiento. Aprendemos tu negocio, después lo hacemos crecer.',
    servicesTitle: 'Servicios',
    services: [
      'Contenido',
      'Paid Media',
      'Web & Visibilidad',
      'Automatización',
      'Video & Creatividad',
      'Estrategia & Consultoría',
    ],
    companyTitle: 'Empresa',
    companyLinks: [
      { label: 'Nosotros', href: '#' },
      { label: 'Casos', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'LATAM', href: '/latam-marketing' },
      { label: 'Contacto', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. Todos los derechos reservados.',
    tagline: 'Marketing que trabaja mientras dormís.',
  },
  manifesto: {
    line1: 'La mayoría de las agencias venden paquetes.',
    line2: 'Nosotros primero aprendemos tu negocio.',
    body:
      'Antes de lanzar cualquier campaña, invertimos tiempo entendiendo tu modelo de negocio, tus clientes y tus cuellos de botella. Porque el marketing sin ese entendimiento es solo ruido — y probablemente ya pagaste suficiente por eso.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
