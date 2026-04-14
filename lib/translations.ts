export type Lang = 'en' | 'es'

export interface Translations {
  nav: {
    links: { href: string; label: string }[]
    cta: string
  }
  hero: {
    tagline: string
    description: string
    cta1: string
    cta2: string
    stats: { value: string; label: string }[]
  }
  clients: {
    title: string
    subtitle: string
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
  testimonials: {
    title: string
    items: { name: string; role: string; quote: string }[]
  }
  blog: {
    title: string
    subtitle: string
    cta: string
    posts: { title: string; excerpt: string; category: string; date: string; readTime: string }[]
  }
  contact: {
    title: string
    subtitle: string
    cta: string
    success: string
    labels: {
      name: string
      email: string
      company: string
      country: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      company: string
      country: string
      message: string
    }
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
      { href: '#work', label: 'Clients' },
      { href: '#method', label: 'How we work' },
      { href: '#blog', label: 'Blog' },
    ],
    cta: "Let's talk",
  },
  hero: {
    tagline: 'Marketing done Simple',
    description:
      "We're a full-service marketing agency that treats your business like our own. Strategy, content, paid media, automation — everything under one roof, built around what you actually need.",
    cta1: "Let's talk",
    cta2: 'What we do',
    stats: [
      { value: 'SMB', label: 'Focused' },
      { value: 'AI', label: 'Powered' },
      { value: '24/7', label: 'Working' },
    ],
  },
  clients: {
    title: 'Happy clients.',
    subtitle: 'Brands and businesses that trusted us to grow.',
  },
  services: {
    title: 'What we do.',
    subtitle:
      'Six practice areas. One agency that learns your business before opening a single tool.',
    items: [
      {
        title: 'Content',
        description:
          'The right words, in the right place, at the right time. We create content that actually sounds like you — and makes people want to keep reading.',
        subitems: ['Social Strategy', 'High-Converting Copy', 'Brand Storytelling', 'Content Calendars'],
      },
      {
        title: 'Paid Media',
        description:
          'Your budget deserves more than boosted posts. We run paid media across every platform where your customers actually spend time — and we optimize every dollar.',
        subitems: ['Meta & Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Retargeting Funnels', 'Budget Optimization'],
      },
      {
        title: 'Web & Visibility',
        description:
          "If they can't find you, nothing else matters. We build fast, conversion-focused websites and make sure you show up — on Google, on AI search, and everywhere in between.",
        subitems: ['High-Performance Landing Pages', 'AI-Powered SEO (GEO)', 'Conversion UX', 'Advanced Analytics'],
      },
      {
        title: 'Automation',
        description:
          "The best marketing doesn't stop when you do. We build automations that nurture leads, follow up, and convert — without you lifting a finger.",
        subitems: ['Lead-Gen Chatbots', 'CRM Automations', 'AI Outbound Systems', 'Workflow Optimization'],
      },
      {
        title: 'Video & Creative',
        description:
          "Scroll-stopping content that's actually on-brand. From Reels to full productions, we handle the creative so you don't have to.",
        subitems: ['Short-form Reels/TikTok', 'UGC Direction', 'AI-Generated Promos', 'Visual Brand Identity'],
      },
      {
        title: 'Strategy & Consulting',
        description:
          'Before we do anything, we think. We map your market, define your ideal customer, and build a clear path to growth — so every move has a reason behind it.',
        subitems: ['Market Positioning', 'Competitive Audits', 'Growth Roadmaps', 'ICP Definition'],
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
          "No templates, no copy-paste playbooks. We design a strategy specific to your business — the right channels, the right message, the right timing — and align on what we're measuring.",
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
  testimonials: {
    title: 'What clients say.',
    items: [
      {
        name: 'Ivan',
        role: 'COO – Multicover',
        quote:
          'Simpla did a spectacular job building our self-managed website. Super attentive, incredibly fast, and the end result exceeded every expectation.',
      },
      {
        name: 'Leo',
        role: 'CEO – Mixturev',
        quote:
          'They ran our Google and Meta Ads campaigns and drove a real, measurable increase in e-commerce sales. Highly recommended — no hesitation.',
      },
    ],
  },
  blog: {
    title: 'How we think.',
    subtitle: 'Straight talk on marketing, automation, and growing a business in 2025.',
    cta: 'Read all articles',
    posts: [
      {
        title: 'GEO: Why your SEO strategy is missing the most important channel of 2025',
        excerpt:
          "ChatGPT, Perplexity, and Google AI Overviews are now answering your customers' questions. If your business isn't showing up there, someone else is.",
        category: 'Web & Visibility',
        date: 'Apr 2025',
        readTime: '6 min',
      },
      {
        title: 'The agency trap: why packages are killing your marketing ROI',
        excerpt:
          "Most agencies sell you a bundle and run the same playbook they ran last month. Here's what to ask for instead.",
        category: 'Strategy',
        date: 'Mar 2025',
        readTime: '5 min',
      },
      {
        title: 'Marketing that works while you sleep: a guide to automation for SMBs',
        excerpt:
          "You don't need a big team to have a 24/7 marketing operation. You need the right systems. Here's where to start.",
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
    cta: "Let's talk",
    success: "Perfect — we'll be in touch soon.",
    labels: {
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company',
      country: 'Country',
      message: 'How can we help?',
    },
    placeholders: {
      name: 'Jane Doe',
      email: 'jane@company.com',
      company: 'Company Name',
      country: 'e.g. USA, UK, Spain',
      message: 'Tell us more about your business...',
    },
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
      { label: 'Clients', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. All rights reserved.',
    tagline: 'Marketing that works while you sleep.',
  },
  manifesto: {
    line1: 'Most agencies sell packages.',
    line2: 'We learn your business first.',
    body:
      "Before any campaign goes live, we invest time understanding your business model, your customers, and your bottlenecks. Because marketing without that understanding is just noise — and you've probably paid for enough of that already.",
  },
}

const es: Translations = {
  nav: {
    links: [
      { href: '#services', label: 'Servicios' },
      { href: '#work', label: 'Clientes' },
      { href: '#method', label: 'Cómo trabajamos' },
      { href: '#blog', label: 'Blog' },
    ],
    cta: 'Hablemos',
  },
  hero: {
    tagline: 'Marketing hecho Simple',
    description:
      'Somos una agencia de marketing integral que trata tu negocio como si fuera el nuestro. Estrategia, contenido, pauta, automatización — todo bajo un mismo techo, construido alrededor de lo que realmente necesitás.',
    cta1: 'Hablemos',
    cta2: 'Lo que hacemos',
    stats: [
      { value: 'Pymes', label: 'Nuestro foco' },
      { value: 'IA', label: 'Potenciado' },
      { value: '24/7', label: 'Trabajando' },
    ],
  },
  clients: {
    title: 'Clientes felices.',
    subtitle: 'Marcas y negocios que confiaron en nosotros para crecer.',
  },
  services: {
    title: 'Lo que hacemos.',
    subtitle:
      'Seis áreas de servicio. Una sola agencia que aprende tu negocio antes de abrir una sola herramienta.',
    items: [
      {
        title: 'Contenido',
        description:
          'Las palabras correctas, en el lugar correcto, en el momento correcto. Creamos contenido que suena como vos — y que hace que la gente quiera seguir leyendo.',
        subitems: ['Estrategia en Redes', 'Copywriting de Conversión', 'Storytelling de Marca', 'Calendarios de Contenido'],
      },
      {
        title: 'Paid Media',
        description:
          'Tu presupuesto merece más que posteos impulsados. Manejamos pauta en cada plataforma donde tus clientes realmente pasan el tiempo — y optimizamos cada peso.',
        subitems: ['Meta & Google Ads', 'LinkedIn Ads', 'TikTok Ads', 'Embudos de Retargeting', 'Optimización de Presupuesto'],
      },
      {
        title: 'Web & Visibilidad',
        description:
          'Si no te encuentran, nada más importa. Construimos sitios rápidos y orientados a la conversión, y nos aseguramos de que aparezcas — en Google, en búsquedas con IA, y en todo lo que hay en el medio.',
        subitems: ['Landing Pages de Alto Rendimiento', 'SEO Potenciado por IA (GEO)', 'UX de Conversión', 'Analítica Avanzada'],
      },
      {
        title: 'Automatización',
        description:
          'El mejor marketing no para cuando vos parás. Construimos automatizaciones que nutren leads, hacen seguimiento y convierten — sin que tengas que mover un dedo.',
        subitems: ['Chatbots de Captación', 'Automatizaciones de CRM', 'Sistemas de Outreach con IA', 'Optimización de Flujos'],
      },
      {
        title: 'Video & Creatividad',
        description:
          'Contenido que para el scroll y que es genuinamente tuyo. Desde Reels hasta producciones completas, nos encargamos de la creatividad para que vos no tengas que hacerlo.',
        subitems: ['Reels y TikTok de Formato Corto', 'Dirección de UGC', 'Promos Generadas con IA', 'Identidad Visual de Marca'],
      },
      {
        title: 'Estrategia & Consultoría',
        description:
          'Antes de hacer cualquier cosa, pensamos. Mapeamos tu mercado, definimos tu cliente ideal y construimos un camino claro hacia el crecimiento — para que cada movimiento tenga una razón detrás.',
        subitems: ['Posicionamiento de Mercado', 'Auditorías Competitivas', 'Hoja de Ruta de Crecimiento', 'Definición de ICP'],
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
        industry: 'E-commerce / Alimentos',
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
          'Sin plantillas ni fórmulas copiadas. Diseñamos una estrategia específica para tu negocio — los canales correctos, el mensaje correcto, el momento correcto — y acordamos qué vamos a medir.',
      },
      {
        number: '03',
        title: 'Ejecutamos con IA + automatización',
        description:
          'Combinamos ejecución directa con infraestructura moderna: flujos automatizados, pipelines de contenido y sistemas que funcionan las 24 horas sin sumar personal.',
      },
      {
        number: '04',
        title: 'Reportamos sin filtros',
        description:
          'Cada cliente recibe reportes claros y honestos. Mostramos lo que funciona, lo que no funciona y qué estamos haciendo al respecto. Sin métricas de vanidad, sin adornos. Solo la verdad y el próximo paso.',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes.',
    items: [
      {
        name: 'Ivan',
        role: 'COO – Multicover',
        quote:
          'Simpla hizo un trabajo espectacular desarrollando nuestro sitio web autoadministrable. Muy atentos, muy rápidos y el resultado superó todas las expectativas.',
      },
      {
        name: 'Leo',
        role: 'CEO – Mixturev',
        quote:
          'Corrieron nuestras campañas de Google y Meta Ads y aumentaron las ventas del ecommerce de forma real y medible. Totalmente recomendables, sin dudarlo.',
      },
    ],
  },
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
          'La mayoría de las agencias te venden un paquete y corren la misma fórmula que corrieron el mes pasado. Acá está lo que tenés que pedir en cambio.',
        category: 'Estrategia',
        date: 'Mar 2025',
        readTime: '5 min',
      },
      {
        title: 'Marketing que trabaja mientras dormís: guía de automatización para pymes',
        excerpt:
          'No necesitás un equipo grande para tener una operación de marketing las 24 horas. Necesitás los sistemas correctos. Por acá se empieza.',
        category: 'Automatización',
        date: 'Feb 2025',
        readTime: '7 min',
      },
    ],
  },
  contact: {
    title: '¿Arrancamos?',
    subtitle:
      'Contanos de tu negocio. Sin paquetes, sin plantillas — solo una conversación real sobre qué te movería la aguja.',
    cta: 'Hablemos',
    success: 'Perfecto — te contactaremos pronto.',
    labels: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      company: 'Empresa',
      country: 'País',
      message: '¿En qué podemos ayudarte?',
    },
    placeholders: {
      name: 'Juan García',
      email: 'juan@empresa.com',
      company: 'Nombre de la empresa',
      country: 'ej. Argentina, España, México',
      message: 'Contanos más sobre tu negocio...',
    },
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
      { label: 'Clientes', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contacto', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. Todos los derechos reservados.',
    tagline: 'Marketing que trabaja mientras dormís.',
  },
  manifesto: {
    line1: 'La mayoría de las agencias venden paquetes.',
    line2: 'Nosotros primero aprendemos tu negocio.',
    body:
      'Antes de lanzar cualquier campaña, invertimos tiempo entendiendo tu modelo de negocio, tus clientes y tus puntos de mejora. Porque el marketing sin ese entendimiento es solo ruido — y probablemente ya pagaste suficiente por eso.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
