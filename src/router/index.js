/*路由器对象模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
/*import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'*/
const Msite = () => import('../pages/Msite/Msite')
const Order = () => import('../pages/Order/Order')
const Profile = () => import('../pages/Profile/Profile')
const Search = () => import('../pages/Search/Search')
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopGoods/ShopInfo'
import ShopRatings from '../pages/Shop/ShopGoods/ShopRatings'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
        path: '/shop/goods',
        component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})