import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      redirect: '/homePage/recommend',
      component: (resolve) => require(['@/components/homePage/homePage'], resolve),
      children: [
        {
          path: '/homePage/recommend',
          name: 'recommend',
          component: (resolve) => require(['@/components/homePage/content/recommend'], resolve)
        },
        {
          path: '/homePage/search',
          name: 'search',
          component: (resolve) => require(['@/components/homePage/content/search'], resolve)
        },
        {
          path: '/homePage/richList',
          name: 'richList',
          component: (resolve) => require(['@/components/homePage/content/richList'], resolve)
        }
      ]
    }
  ]
})
