import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import User from '@/components/User'
import Profile from '@/components/Profile'

const Test = () => import('@/components/Test')
// 路由懒加载的写法
const HomeNews = () => import('@/components/HomeNews')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'news',
        // 路由懒加载的写法
        component: HomeNews
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  },
  {
    path: '/test',
    // 路由懒加载的写法
    // component: () => import('@/components/Test'),
    component: Test
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

export default new Router({
  routes,
  // 默认是hash模式,路径中有# ,比如localhost:8080/#/home
  // 改成h5的history就没有了
  mode: 'history'
})
