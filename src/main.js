// Vue 3
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// createApp(App).use(router).mount('#app');


// Vue 2
import Vue from 'vue'
import App from './App.vue'
import router from './Router/index.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
