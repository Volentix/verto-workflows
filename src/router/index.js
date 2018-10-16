import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import copykey from '@/components/copykey'
import encryptkey from '@/components/encryptkey'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/copykey',
      name: 'copykey',
      component: copykey
    },
    {
      path: '/encryptkey',
      name: 'encryptkey',
      component: encryptkey
    }
  ]
})

Vue.use(Router)
