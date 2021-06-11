import Vue from 'vue';
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue';
import Dashboard from './pages/Dashboard.vue';
import Login from './pages/Login.vue';

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/login', component: Login },
    { path: '/', component: App },
    // { path: "*", redirect: "/" }
]

const router = new VueRouter({ routes, mode: 'history' });

Vue.use(VueRouter);
Vue.use(ElementUI);
export default new Vue({
    router,
    render: h => h(App),
}).$mount('#app')