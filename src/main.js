import { createApp } from 'vue'
import App from './App.vue'
// import router from './router/index.js'
// import VueRouter from 'vue-router'
import '@/assets/styles/main.scss';
import router from "@/router";
import store from "@/store";
// import Vue from 'vue'

// Vue.use(VueRouter)
// createApp.use(VueRouter)
const app = createApp(App)

app
    .use(router)
    .use(store)
    .mount('#app')


// app.use(router)
// createApp(App).use(router).mount('#app')


//
// const app = createApp(App)
// app.use(router)

