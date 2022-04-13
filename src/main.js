import { createApp } from 'vue'
import { store } from '@/store'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/styles.css'

const app = createApp(App)

app.mount('#app')
app.use(store)
