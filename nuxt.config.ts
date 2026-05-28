export default defineNuxtConfig({
  extends: ['docus'],
  aiReady: {
     contentSignal: {
       search: true,
       aiInput: false,
       aiTrain: false
     }
  },
  vite: {
     optimizeDeps: {
       include: [
         '@vue/devtools-core',
         '@vue/devtools-kit',
       ]
     }
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'json', 'js', 'ts', 'shell', 'mdc', 'md', 'yaml', 'python', 'javascript'],
        },
      },
    },
  },
})
