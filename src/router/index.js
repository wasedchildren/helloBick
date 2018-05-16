import Vue from 'vue'
import Router from 'vue-router'
import ShoppMall from '@/components/pages/shoppingMall'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppMall
    }
  ]
})
