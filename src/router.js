import Vue from 'vue'
import VueRouter from 'vue-router'
import BeerList from '@/components/pages/beer-list'
import BeerDetails from '@/components/pages/beer-details'

const routes = [
    {
      path: '/list',
      name: 'list',
      component: BeerList
    },
    {
      path: '/details/:id',
      name: 'details',
      component: BeerDetails
    }
  ];

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior () { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

export default router