import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/star',
        name: 'star',
        component: () => import('../views/star/index.vue')
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../views/game/index.vue')
    },
    {
        path: '/code',
        name: 'code',
        component: () => import('../views/code/index.vue')
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('../views/message/index.vue')
    },
    {
        path: '/diary',
        name: 'diary',
        component: () => import('../views/diary/index.vue')
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})