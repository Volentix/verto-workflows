import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import VueRouter from 'vue-router'
// const NotFound = { template: '<p>Page not found</p>' }
import KeyStorage from './components/KeyStorage.vue'
import FileStorage from './components/FileStorage'
import WrittenStorage from './components/WrittenStorage'
import DisplayKey from './components/DisplayKey'
import InputPassword from './components/InputPassword'
import Congrats from './components/Congrats'
import Done from './components/Done'

Vue.use(VueRouter)
Vue.use(Buefy)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: App
      }
    },
    {
      path: '/keyStorage',
      components: {
        default: KeyStorage
      }
    },
    {
      path: '/fileStorage',
      components: {
        default: FileStorage
      }
    },
    {
      path: '/writtenStorage',
      components: {
        default: WrittenStorage
      }
    },
    {
      path: '/displayKey',
      components: {
        default: DisplayKey
      }
    },
    {
      path: '/inputPassword',
      components: {
        default: InputPassword
      }
    },
    {
      path: '/congrats',
      components: {
        default: Congrats
      }
    },
    {
      path: '/done',
      components: {
        default: Done
      }
    }
  ]
})

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
})
