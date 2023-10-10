import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('./pages/Home')
        },
        {
            path: '/cocktail/:id',
            name: 'cocktail',
            component: () => import('./pages/Cocktail')
        },
        {
            path: '/cocktail-random',
            name: 'cocktail-random,',
            component: () => import('./pages/CocktailRandom')
        }
    ]
})