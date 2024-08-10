/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Button from "primevue/button"
import PrimeVue from 'primevue/config';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
const app = createApp(App)

app.use(router)
app.use(PrimeVue);  
app.component('Toast', Toast);
app.component("Tag", Tag)
app.use(ToastService);
app.component('Button', Button);

app.mount('#app')
