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
      budget: string
      message: string
    }
    placeholders: {
      name: string
      email: string
      company: string
      country: string
      budget: string
      message: string
    }
  }
  presence: {
    title: string
    subtitle: string
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
    cta: "Get a free audit",
  },
  hero: {
    tagline: 'Performance done Simple',
    description:
      "We run paid ads for businesses that are serious about growing. Meta, Google, TikTok, LinkedIn, and more. One team that handles your strategy, your creatives, and your spend. We start by understanding your business. Then we build campaigns that actually perform.",
    cta1: "Get a free audit",
    cta2: 'What we do',
    stats: [
      { value: 'LATAM', label: 'Based' },
      { value: 'US', label: 'Focused' },
      { value: '24/7', label: 'Working' },
    ],
  },
  clients: {
    title: 'Happy clients.',
    subtitle: 'Businesses we have helped grow with paid advertising.',
  },
  services: {
    title: 'What we run.',
    subtitle:
      'Every platform where your customers are ready to buy. A team that treats your budget like it is their own.',
    items: [
      {
        title: 'Meta Ads',
        description:
          'Facebook and Instagram are still the highest-ROI ad platforms for most businesses, when run by someone who actually knows what they are doing. We build full-funnel campaigns from cold audiences all the way to purchase, with creatives tested and audiences refined until the numbers make sense.',
        subitems: ['Full-Funnel Strategy', 'Creative Testing', 'Retargeting Sequences', 'Audience Research'],
      },
      {
        title: 'Google Ads',
        description:
          'Capture demand at the exact moment someone is looking for what you offer. We run Search, Performance Max, and Shopping campaigns with attention to what most agencies ignore: Quality Score, bid strategy, and negative keyword lists that actually stop waste.',
        subitems: ['Search Campaigns', 'Performance Max', 'Shopping Ads', 'Negative Keyword Audits'],
      },
      {
        title: 'TikTok Ads',
        description:
          'The platform with the fastest-growing ad inventory and the lowest CPMs right now. We handle both the content and the campaign. Short-form ads that feel native to the feed and perform like paid.',
        subitems: ['UGC-Style Creatives', 'Spark Ads', 'Interest Targeting', 'Performance Creative'],
      },
      {
        title: 'LinkedIn Ads',
        description:
          'The best B2B channel for reaching decision-makers, and the one with the worst average execution in the industry. We run Sponsored Content, Lead Gen Forms, and retargeting campaigns for companies that sell to other companies.',
        subitems: ['Sponsored Content', 'Lead Gen Forms', 'Account-Based Targeting', 'B2B Retargeting'],
      },
      {
        title: 'More Platforms',
        description:
          'Twitter/X and Reddit reach audiences that no other platform touches. Niche communities, early adopters, and high-intent buyers that are invisible on Meta or Google. We run campaigns where your competitors are not looking.',
        subitems: ['Twitter/X Ads', 'Reddit Ads', 'Niche Community Targeting', 'Promoted Posts'],
      },
      {
        title: 'Ad Creative',
        description:
          'The creative is responsible for 60 to 70 percent of your campaign performance. We produce static ads, video, and UGC-style content built specifically for paid. Not repurposed from your Instagram. Every piece is made to stop the scroll and earn the click.',
        subitems: ['Static Ad Design', 'Short-Form Video', 'UGC Direction', 'A/B Creative Testing'],
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
        services: 'Meta Ads, Ad Creative',
      },
      {
        headline: 'From zero to 50K monthly visitors',
        client: 'Nómada Studio',
        industry: 'Design / SaaS',
        services: 'Google Ads, LinkedIn Ads',
      },
      {
        headline: '–62% cost per lead in 90 days',
        client: 'Kinetic',
        industry: 'Fitness / App',
        services: 'Meta Ads, TikTok Ads',
      },
    ],
  },
  method: {
    title: 'How we work.',
    subtitle: 'We start by understanding what is broken. Then we build the system. Then we scale what works.',
    steps: [
      {
        number: '01',
        title: 'We audit your account',
        description:
          'Before we touch anything, we look at everything. Account structure, pixel health, creative performance, landing pages, audience overlap. You get a clear picture of what is working, what is wasted, and where the real opportunity is.',
      },
      {
        number: '02',
        title: 'We build the strategy',
        description:
          'No templates, no copy-paste playbooks. We design a campaign architecture specific to your business, your offer, and your customer. The right platform, the right funnel, the right message. And clear agreement on how we measure success.',
      },
      {
        number: '03',
        title: 'We launch and test',
        description:
          'We launch with multiple creative variants and audience hypotheses, structured to generate real data fast. Nothing runs on assumption. Everything runs on a test.',
      },
      {
        number: '04',
        title: 'We report and scale',
        description:
          'Every client gets clear, honest reporting. We show exactly what is working, what is not, and what we are doing about it. When we find a winner, we scale it. When something is not performing, we say so and we fix it.',
      },
    ],
  },
  testimonials: {
    title: 'What clients say.',
    items: [
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
  },
  blog: {
    title: 'How we think.',
    subtitle: 'Straight talk on paid advertising, performance marketing, and growing a business in 2025.',
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
    title: 'Get a free audit.',
    subtitle:
      'Share access to your ad account and we will tell you exactly what is costing you money and what is worth scaling. If it makes sense to work together, we will talk about it then.',
    cta: "Send it over",
    success: "Perfect. We will be in touch within 24 hours.",
    labels: {
      name: 'Full Name',
      email: 'Email Address',
      company: 'Company',
      country: 'Country',
      budget: 'Monthly Ad Budget',
      message: 'Anything else we should know?',
    },
    placeholders: {
      name: 'Jane Doe',
      email: 'jane@company.com',
      company: 'Company Name',
      country: 'e.g. USA, UK, Spain',
      budget: 'e.g. $2,000/mo',
      message: 'Tell us about your business, your goals, what has or has not worked...',
    },
  },
  presence: {
    title: "From <span class=\"text-primary-fixed-dim\">LATAM</span> to the <span class=\"text-secondary-fixed\">world.</span>",
    subtitle: "We work with ambitious brands across every timezone, driving real results wherever growth happens.",
  },
  footer: {
    description:
      'Simpla is a performance marketing agency for businesses that want results. We learn your business, then we grow it with paid ads.',
    servicesTitle: 'Services',
    services: [
      'Meta Ads',
      'Google Ads',
      'TikTok Ads',
      'LinkedIn Ads',
      'More Platforms',
      'Ad Creative',
    ],
    companyTitle: 'Company',
    companyLinks: [
      { label: 'About', href: '#' },
      { label: 'Clients', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contact', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. All rights reserved.',
    tagline: 'Performance marketing that works while you sleep.',
  },
  manifesto: {
    line1: 'Most agencies sell packages.',
    line2: 'We learn your business and run ads that pay for themselves.',
    body:
      'Before any campaign goes live, we audit your account, understand your customers, and build a strategy around what actually moves revenue. Because running ads without that foundation is just burning money. You have probably done enough of that already.',
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
    cta: 'Auditá tu cuenta',
  },
  hero: {
    tagline: 'Performance hecho Simple',
    description:
      'Corremos publicidad paga para negocios que quieren crecer en serio. Meta, Google, TikTok, LinkedIn y más. Un solo equipo que maneja tu estrategia, tus creativos y tu pauta. Entendemos tu negocio antes de invertir un peso.',
    cta1: 'Auditá tu cuenta gratis',
    cta2: 'Lo que hacemos',
    stats: [
      { value: 'LATAM', label: 'Base' },
      { value: 'EE.UU.', label: 'Foco' },
      { value: '24/7', label: 'Trabajando' },
    ],
  },
  clients: {
    title: 'Clientes felices.',
    subtitle: 'Negocios que ayudamos a crecer con publicidad paga.',
  },
  services: {
    title: 'Lo que manejamos.',
    subtitle:
      'Cada plataforma donde tus clientes están listos para comprar. Un equipo que trata tu presupuesto como si fuera propio.',
    items: [
      {
        title: 'Meta Ads',
        description:
          'Facebook e Instagram siguen siendo los canales de mayor ROI para la mayoría de los negocios, cuando los maneja alguien que realmente sabe lo que hace. Construimos campañas de embudo completo, desde audiencias frías hasta la compra, con creativos testeados y audiencias refinadas hasta que los números cierren.',
        subitems: ['Estrategia de Embudo Completo', 'Testeo de Creativos', 'Secuencias de Retargeting', 'Investigación de Audiencias'],
      },
      {
        title: 'Google Ads',
        description:
          'Capturá demanda en el momento exacto en que alguien está buscando lo que ofrecés. Corremos campañas de Search, Performance Max y Shopping prestando atención a lo que la mayoría ignora: Quality Score, estrategia de puja y listas de palabras negativas que realmente frenan el gasto innecesario.',
        subitems: ['Campañas de Search', 'Performance Max', 'Shopping Ads', 'Auditorías de Palabras Negativas'],
      },
      {
        title: 'TikTok Ads',
        description:
          'La plataforma con el inventario publicitario de mayor crecimiento y los CPMs más bajos del mercado hoy. Nos encargamos tanto del contenido como de la campaña: anuncios de formato corto que se sienten nativos al feed y rinden como pauta.',
        subitems: ['Creativos Estilo UGC', 'Spark Ads', 'Targeting por Intereses', 'Creativos de Performance'],
      },
      {
        title: 'LinkedIn Ads',
        description:
          'El mejor canal B2B para llegar a tomadores de decisiones, y el que tiene la peor ejecución promedio en la industria. Corremos Sponsored Content, Lead Gen Forms y campañas de retargeting para empresas que le venden a otras empresas.',
        subitems: ['Sponsored Content', 'Lead Gen Forms', 'Targeting por Cuenta', 'Retargeting B2B'],
      },
      {
        title: 'Más Plataformas',
        description:
          'Twitter/X y Reddit alcanzan audiencias que ninguna otra plataforma toca. Comunidades de nicho, early adopters y compradores de alta intención que no aparecen en Meta ni en Google. Corremos campañas donde tus competidores no están mirando.',
        subitems: ['Twitter/X Ads', 'Reddit Ads', 'Targeting de Comunidades', 'Publicaciones Promocionadas'],
      },
      {
        title: 'Creativos',
        description:
          'El creativo es responsable del 60 al 70 por ciento del rendimiento de tu campaña. Producimos gráficas, video y contenido estilo UGC hecho específicamente para pauta, no reciclado de tu Instagram. Cada pieza está creada para frenar el scroll y ganarse el clic.',
        subitems: ['Diseño de Anuncios Estáticos', 'Video de Formato Corto', 'Dirección de UGC', 'Testeo A/B de Creativos'],
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
        services: 'Meta Ads, Creativos',
      },
      {
        headline: 'De cero a 50K visitas mensuales',
        client: 'Nómada Studio',
        industry: 'Diseño / SaaS',
        services: 'Google Ads, LinkedIn Ads',
      },
      {
        headline: '–62% costo por lead en 90 días',
        client: 'Kinetic',
        industry: 'Fitness / App',
        services: 'Meta Ads, TikTok Ads',
      },
    ],
  },
  method: {
    title: 'Cómo trabajamos.',
    subtitle: 'Empezamos entendiendo qué está roto. Después construimos el sistema. Después escalamos lo que funciona.',
    steps: [
      {
        number: '01',
        title: 'Auditamos tu cuenta',
        description:
          'Antes de tocar algo, miramos todo. Estructura de la cuenta, estado del píxel, rendimiento de los creativos, páginas de destino, superposición de audiencias. Obtenés un panorama claro de qué funciona, qué se desperdicia y dónde está la oportunidad real.',
      },
      {
        number: '02',
        title: 'Construimos la estrategia',
        description:
          'Sin plantillas ni fórmulas copiadas. Diseñamos una arquitectura de campaña específica para tu negocio, tu oferta y tu cliente. La plataforma correcta, el embudo correcto, el mensaje correcto, y un acuerdo claro sobre cómo medimos el éxito.',
      },
      {
        number: '03',
        title: 'Lanzamos y testeamos',
        description:
          'Lanzamos con múltiples variantes de creativos e hipótesis de audiencia, estructuradas para generar datos reales rápido. Nada corre por suposición. Todo corre como un test.',
      },
      {
        number: '04',
        title: 'Reportamos y escalamos',
        description:
          'Cada cliente recibe reportes claros y honestos. Mostramos exactamente qué funciona, qué no y qué estamos haciendo al respecto. Cuando encontramos algo que gana, lo escalamos. Cuando algo no rinde, lo decimos y lo arreglamos.',
      },
    ],
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes.',
    items: [
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
          'Todas las agencias con las que trabajamos antes nos daban un paquete y corrían la misma fórmula de siempre. Simpla fue distinto. Construyeron sistemas que siguen generando resultados solos.',
      },
    ],
  },
  blog: {
    title: 'Cómo pensamos.',
    subtitle: 'Ideas directas sobre publicidad paga, performance marketing y cómo hacer crecer un negocio en 2025.',
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
    title: 'Auditá tu cuenta gratis.',
    subtitle:
      'Compartí acceso a tu cuenta publicitaria y te decimos exactamente qué te está costando dinero y qué vale la pena escalar. Si tiene sentido trabajar juntos, lo hablamos después.',
    cta: 'Mandarlo',
    success: 'Perfecto. Te contactamos en menos de 24 horas.',
    labels: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      company: 'Empresa',
      country: 'País',
      budget: 'Presupuesto mensual en pauta',
      message: '¿Algo más que debamos saber?',
    },
    placeholders: {
      name: 'Juan García',
      email: 'juan@empresa.com',
      company: 'Nombre de la empresa',
      country: 'ej. Argentina, España, México',
      budget: 'ej. USD 2.000/mes',
      message: 'Contanos de tu negocio, tus objetivos, qué funcionó y qué no...',
    },
  },
  presence: {
    title: "De <span class=\"text-primary-fixed-dim\">LATAM</span> para el <span class=\"text-secondary-fixed\">mundo.</span>",
    subtitle: "Trabajamos con marcas que piensan en grande, en cualquier mercado y zona horaria.",
  },
  footer: {
    description:
      'Simpla es una agencia de performance marketing para negocios que quieren resultados. Aprendemos tu negocio y lo hacemos crecer con publicidad paga.',
    servicesTitle: 'Servicios',
    services: [
      'Meta Ads',
      'Google Ads',
      'TikTok Ads',
      'LinkedIn Ads',
      'Más Plataformas',
      'Creativos',
    ],
    companyTitle: 'Empresa',
    companyLinks: [
      { label: 'Nosotros', href: '#' },
      { label: 'Clientes', href: '#work' },
      { label: 'Blog', href: '#blog' },
      { label: 'Contacto', href: '#contact' },
    ],
    copyright: '© 2025 Simpla Agency. Todos los derechos reservados.',
    tagline: 'Performance marketing que trabaja mientras dormís.',
  },
  manifesto: {
    line1: 'La mayoría de las agencias venden paquetes.',
    line2: 'Nosotros aprendemos tu negocio y corremos anuncios que se pagan solos.',
    body:
      'Antes de lanzar cualquier campaña, auditamos tu cuenta, entendemos a tus clientes y construimos una estrategia alrededor de lo que realmente mueve los ingresos. Porque correr anuncios sin esa base es quemar dinero, y probablemente ya lo hiciste suficiente.',
  },
}

export const translations: Record<Lang, Translations> = { en, es }
