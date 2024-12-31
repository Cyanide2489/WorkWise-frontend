import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'

if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser')
  worker.start()
}

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  },
})

app.mount('#app')
