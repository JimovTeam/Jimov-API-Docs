export default defineAppConfig({
  assistant: {
    floatingInput: false,
    explainWithAi: false
  },
  ui: {
     colors: {
       primary: 'purple',
       neutral: 'zinc'
     }
   },
  docus: {
    title: 'JIMOV',
    description: 'This project is an open-source API for retrieving multimedia content such as anime, movies and series, news, and manga in both Spanish and English.',
    socials: {
      github: 'koikiss-dev/jimov_api',
    },
    github: {
      edit: true,
      repo: 'Jimov-API-Docs',
      owner: 'MediaScout',
      branch: 'main',
    },
  
  },
  header: {
    title: 'JIMOV API',
    logo: {
      light: '/logo/logo-light.svg',
      dark: '/logo/logo-dark.svg',
      class: 'h-10',
      alt: 'JIMOV API Logo',
    },
  },
  seo: {
    title: 'JIMOV API',
    description: 'Open-source API for retrieving multimedia content such as anime, movies and series, news, and manga in both Spanish and English.',
  },
})
