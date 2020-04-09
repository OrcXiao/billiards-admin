import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: '/information',
        component: () => import('../views/admin/admin.vue'),
        children: [
            {
                path: '/information',
                name: 'information',
                component: () => import('../views/information/information.vue'),

            },
            {
                path: '/signature',
                name: 'signature',
                component: () => import('../views/signature/signature.vue'),

            },
            {
                path: '/course',
                name: 'course',
                component: () => import('../views/course/course.vue'),

            },
            {
                path: '/appoint',
                name: 'appoint',
                component: () => import('../views/appoint/appoint.vue'),

            },
            {
                path: '/room',
                name: 'room',
                component: () => import('../views/room/room.vue'),

            },
            {
                path: '/game',
                name: 'game',
                component: () => import('../views/game/game.vue'),

            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/user.vue'),

            },
            {
                path: '/banner',
                name: 'banner',
                component: () => import('../views/banner/banner.vue'),

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
