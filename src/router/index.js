import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/cyForm/index.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index.vue'),
}, {
    path: '/',
    name: 'cyForm',
    component: Form,
}]
const router = new VueRouter({ routes })

export default router
