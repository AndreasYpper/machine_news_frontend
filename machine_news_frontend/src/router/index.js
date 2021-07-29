import { createWebHistory, createRouter } from "vue-router";

import HomeView from '@/views/machine_news/HomeView'

import AuthenticationView from '@/views/authentication/AuthenticationView'

import ProfileView from '@/views/user/ProfileView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/auth',
        name: 'authentication',
        component: AuthenticationView
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;