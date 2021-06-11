import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import Dashboard from './pages/Dashboard.vue';

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/', component: App },
    // { path: "*", redirect: "/" }
]

const router = new VueRouter({ routes, mode: 'history' });

Vue.use(VueRouter);
export default new Vue({
    router,
    render: h => h(App),
}).$mount('#app')