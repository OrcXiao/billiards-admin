import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/home.vue'),
        children:[
            {
                path: '/',
                name: 'nav1',
                component: () => import('../views/nav1/nav1.vue'),

            },
            {
                path: '/nav2',
                name: 'nav2',
                component: () => import('../views/nav2/nav2.vue'),

            },
            {
                path: '/nav3',
                name: 'nav3',
                component: () => import('../views/nav3/nav3.vue'),

            },
        ]
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
