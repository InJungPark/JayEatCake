import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cakes',
      name: 'CAKES',
      component: function () {
        return import('../views/Cakes.vue')
      }
    },
    {
      path: '/order',
      name: 'ORDER',
      component: function () {
        return import('../views/Order.vue')
      }
    },
    {
      path: '/cart',
      name: 'CART',
      component: function () {
        return import('../views/Cart.vue')
      }
    },
    {
      path: '/notice',
      name: 'NOTICE',
      component: function () {
        return import('../views/Notice.vue')
      }
    },
    {
      path: '/terms',
      name: 'TERMS',
      component: function () {
        return import('../views/TermsOfService.vue')
      }
    },
    {
      path: '/privacy',
      name: 'PRIVACY',
      component: function () {
        return import('../views/PrivacyPolicy.vue')
      }
    },
    {
      path: '/refusal',
      name: 'REFUSAL',
      component: function () {
        return import('../views/CollectionRefusal.vue')
      }
    }
  ]
})

export default router
