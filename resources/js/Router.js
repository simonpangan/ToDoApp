import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history', 
    routes: [
        {path: '/', component: require('./components/HomeComponent.vue').default},
        {path: '/login', component: require('./components/auth/LoginComponent.vue').default},
        {path: '/register', component: require('./components/auth/RegisterComponent.vue').default}
    ] 
});


