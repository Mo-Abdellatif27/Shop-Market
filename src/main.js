import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins/element.js'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
