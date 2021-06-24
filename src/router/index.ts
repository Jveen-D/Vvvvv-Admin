import { createRouter, createWebHashHistory } from "vue-router"
import Layout from "@/layout/layout.vue"
const routes = [
    { path: '/', name: 'Index', component: Layout },
    { path: '/login', name: 'Login', component: () => import('@/pages/login/index.vue') },
    { path: '/:pathMatch(.*)*', name: '', component: () => import('@/pages/err/404.vue') }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(() => {
})
router.isReady().then(() => {
    console.log('Welcome Vvvv-Admin!')
    console.log("%cGitHub： https://github.com/Jveen-D/Vvvvv-Admin ","color:orangered;font-weight:bolder")
})

export default router