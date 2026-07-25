export const LANGUAGES = ["en", "pt", "es"] as const;

export type Language = (typeof LANGUAGES)[number];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  pt: "PT",
  es: "ES",
};

export const LANGUAGE_NAMES: Record<Language, string> = {
  en: "English",
  pt: "Português",
  es: "Español",
};

export const LANGUAGE_COLOR_KEYS: Record<Language, "blue" | "lime" | "orange"> = {
  en: "blue",
  pt: "lime",
  es: "orange",
};

export const TAB_LABELS = {
  home: { en: "home", pt: "início", es: "inicio" },
  projects: { en: "projects", pt: "projetos", es: "proyectos" },
  files: { en: "files", pt: "arquivos", es: "archivos" },
} as const;

export type Translated = Record<Language, string>;

export const BIO_SHORT: Translated = {
  en: "I'm Maria Cecília, a front-end developer. I've been turning ideas into code and creating interactive experiences for over four years. I'm always open to collaborations, so feel free to reach out for any opportunities! Welcome to my corner of the internet, I hope you enjoy your visit!",
  pt: "Eu sou a Maria Cecília, desenvolvedora front-end. Já faz mais de quatro anos que transformo ideias em código e crio experiências interativas. Estou sempre aberta a colaborações, então fique à vontade para entrar em contato para qualquer oportunidade! Seja bem-vindo(a) ao meu cantinho da internet, espero que curta a visita!",
  es: "Soy Maria Cecília, desarrolladora front-end. Hace más de cuatro años que transformo ideas en código y creo experiencias interactivas. Siempre estoy abierta a colaboraciones, así que no dudes en contactarme para cualquier oportunidad. ¡Bienvenido(a) a mi rincón de internet, espero que disfrutes la visita!",
};

export const BIO_FULL: Translated = {
  en: "I'm Maria Cecília, a front-end developer. I've been turning ideas into code and creating interactive experiences for over four years. Currently, I work with React and everything involving the web ecosystem. I love working in this space and contributing to keeping it accessible, creative, and full of possibilities. I'm always open to collaborations, so feel free to reach out for any opportunities! Welcome to my corner of the internet, I hope you enjoy your visit!",
  pt: "Eu sou a Maria Cecília, desenvolvedora front-end. Já faz mais de quatro anos que transformo ideias em código e crio experiências interativas. Atualmente trabalho com React e tudo que envolve o ecossistema web. Adoro atuar nessa área e contribuir para que ela continue acessível, criativa e cheia de possibilidades. Estou sempre aberta a colaborações, então fique à vontade para entrar em contato para qualquer oportunidade! Seja bem-vindo(a) ao meu cantinho da internet, espero que curta a visita!",
  es: "Soy Maria Cecília, desarrolladora front-end. Hace más de cuatro años que transformo ideas en código y creo experiencias interactivas. Actualmente trabajo con React y todo lo que involucra el ecosistema web. Me encanta trabajar en esta área y contribuir a que siga siendo accesible, creativa y llena de posibilidades. Siempre estoy abierta a colaboraciones, así que no dudes en contactarme para cualquier oportunidad. ¡Bienvenido(a) a mi rincón de internet, espero que disfrutes la visita!",
};

export const PAGE_DESCRIPTIONS: Record<"projects" | "files", Translated> = {
  projects: {
    en: "Here are some of the projects I've developed along my learning journey. In addition to coding them, I also took care of the design and visual experience, bringing my personal touch to every detail. Each project represents a challenge overcome and new skills acquired!",
    pt: "Aqui estão alguns dos projetos que desenvolvi ao longo da minha jornada de aprendizado. Além de codificá-los, também cuidei do design e da experiência visual, trazendo meu toque pessoal para cada detalhe. Cada projeto representa um desafio superado e novas habilidades adquiridas!",
    es: "Aquí están algunos de los proyectos que desarrollé a lo largo de mi trayectoria de aprendizaje. Además de programarlos, también me encargué del diseño y la experiencia visual, aportando mi toque personal a cada detalle. ¡Cada proyecto representa un desafío superado y nuevas habilidades adquiridas!",
  },
  files: {
    en: "Welcome to my file collection! Here you'll find a mix of studies, notes, documents, and content related to my learning and evolution as a developer. Each item reflects a part of my journey, sharing the knowledge acquired, insights, and reflections along the way. Feel free to explore and follow my professional growth!",
    pt: "Bem-vindo(a) à minha coleção de arquivos! Aqui você vai encontrar uma mistura de estudos, notas, documentos e conteúdos relacionados ao meu aprendizado e evolução como desenvolvedora. Cada item reflete uma parte da minha jornada, compartilhando o conhecimento adquirido, insights e reflexões pelo caminho. Fique à vontade para explorar e acompanhar meu crescimento profissional!",
    es: "¡Bienvenido(a) a mi colección de archivos! Aquí vas a encontrar una mezcla de estudios, notas, documentos y contenidos relacionados con mi aprendizaje y evolución como desarrolladora. Cada elemento refleja una parte de mi trayectoria, compartiendo el conocimiento adquirido, ideas y reflexiones en el camino. ¡Siéntete libre de explorar y acompañar mi crecimiento profesional!",
  },
};

export const PROJECT_DESCRIPTIONS: Record<string, Translated> = {
  "box-shadow-generator": {
    en: "Generate and copy custom CSS shadows with a real-time preview.",
    pt: "Gere e copie sombras CSS personalizadas com preview em tempo real.",
    es: "Genera y copia sombras CSS personalizadas con vista previa en tiempo real.",
  },
  "design-system": {
    en: "Documentation for my portfolio components.",
    pt: "Documentação dos componentes do meu portfólio.",
    es: "Documentación de los componentes de mi portafolio.",
  },
  "psychologist-laura-lacerda": {
    en: "Institutional website focused on psychologist Laura Lacerda's clinical practice. Features a welcoming design, easy navigation, and is fully responsive.",
    pt: "Site institucional focado na prática clínica da psicóloga Laura Lacerda. Conta com design acolhedor, navegação fácil e é totalmente responsivo.",
    es: "Sitio institucional enfocado en la práctica clínica de la psicóloga Laura Lacerda. Cuenta con un diseño acogedor, navegación sencilla y es totalmente responsivo.",
  },
  "prof-lucas-gomes": {
    en: "Institutional website focused on Prof. Lucas Gomes's private tutoring. Features a modern design, intuitive navigation, and is fully responsive.",
    pt: "Site institucional focado nas aulas particulares do Prof. Lucas Gomes. Conta com design moderno, navegação intuitiva e é totalmente responsivo.",
    es: "Sitio institucional enfocado en las clases particulares del Prof. Lucas Gomes. Cuenta con un diseño moderno, navegación intuitiva y es totalmente responsivo.",
  },
};

export const CATEGORY_LABELS: Record<string, Translated> = {
  frameworks: {
    en: "Frameworks & Tools",
    pt: "Frameworks e Ferramentas",
    es: "Frameworks y Herramientas",
  },
  notes: {
    en: "Notes",
    pt: "Notas",
    es: "Notas",
  },
  thoughts: {
    en: "Thoughts",
    pt: "Reflexões",
    es: "Reflexiones",
  },
};

export const CATEGORY_DESCRIPTIONS: Record<string, Translated> = {
  frameworks: {
    en: "Frameworks, libraries and tools I'm learning or using.",
    pt: "Frameworks, bibliotecas e ferramentas que estou aprendendo ou usando.",
    es: "Frameworks, librerías y herramientas que estoy aprendiendo o usando.",
  },
  notes: {
    en: "Study notes and things I don't want to forget.",
    pt: "Anotações de estudo e coisas que não quero esquecer.",
    es: "Apuntes de estudio y cosas que no quiero olvidar.",
  },
  thoughts: {
    en: "Opinions and reflections on being a developer.",
    pt: "Opiniões e reflexões sobre ser desenvolvedora.",
    es: "Opiniones y reflexiones sobre ser desarrolladora.",
  },
};

export const UI_STRINGS = {
  backToFiles: { en: "Back to Files", pt: "Voltar para Files", es: "Volver a Files" } as Translated,
  backTo: { en: "Back to", pt: "Voltar para", es: "Volver a" } as Translated,
  noCategoriesMatch: {
    en: "No categories match this filter.",
    pt: "Nenhuma categoria corresponde a esse filtro.",
    es: "Ninguna categoría coincide con este filtro.",
  } as Translated,
  noPostsYet: {
    en: "No posts here yet, check back soon.",
    pt: "Ainda não há posts aqui, volte em breve.",
    es: "Todavía no hay publicaciones aquí, vuelve pronto.",
  } as Translated,
  minRead: { en: "min read", pt: "min de leitura", es: "min de lectura" } as Translated,
};

export const LOADING_WINDOW_TITLE: Translated = {
  en: "constant evolution",
  pt: "evolução constante",
  es: "evolución constante",
};

export const WINDOW_INFO_TEXT: Translated = {
  en: "Made with love and caffeine.",
  pt: "Feito com amor e cafeína.",
  es: "Hecho con amor y cafeína.",
};

export const MEMORY_STORAGE_TITLE: Translated = {
  en: "s t o r a g e",
  pt: "a r m a z e n a m e n t o",
  es: "a l m a c e n a m i e n t o",
};

export const MEMORY_STORAGE_FREE_TEXT: Translated = {
  en: "0.02 GB free of 24 GB",
  pt: "0.02 GB livres de 24 GB",
  es: "0.02 GB libres de 24 GB",
};

export const MEMORY_CATEGORY_LABELS: Record<string, Translated> = {
  "code & tech": {
    en: "code & tech",
    pt: "código & tech",
    es: "código & tech",
  },
  coffee: {
    en: "coffee",
    pt: "café",
    es: "café",
  },
  "travel & adventures": {
    en: "travel & adventures",
    pt: "viagens & aventuras",
    es: "viajes & aventuras",
  },
  "art & creativity": {
    en: "art & creativity",
    pt: "arte & criatividade",
    es: "arte & creatividad",
  },
};

export const TERMINAL_MESSAGES: Record<Language, string[]> = {
  en: [
    "$ initializing...",
    "✔ loading skills...",
    "✔ rendering projects...",
    "✔ connecting creativity and code...",
    "✔ done! explore my portfolio :)",
    "...",
  ],
  pt: [
    "$ inicializando...",
    "✔ carregando habilidades...",
    "✔ renderizando projetos...",
    "✔ conectando criatividade e código...",
    "✔ pronto! explore meu portfólio :)",
    "...",
  ],
  es: [
    "$ inicializando...",
    "✔ cargando habilidades...",
    "✔ renderizando proyectos...",
    "✔ conectando creatividad y código...",
    "✔ ¡listo! explora mi portafolio :)",
    "...",
  ],
};
