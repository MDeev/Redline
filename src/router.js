import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Single from '@/views/SingleBlog'
import AboutUs from '@/views/AboutUs'
import Contact from '@/views/Contact'
import Latest from '@/views/Latest'
import Popular from '@/views/Popular'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog/:id',
      component: Single, 
      props: true
    },
    {
      path: '/about',
      component: AboutUs
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/latest',
      component: Latest
    },
    {
      path: '/popular',
      component: Popular
    },
    {
      path: '*',
      redirect: '/404'
    },
    {
      path: '/404',
      component: NotFound
    }
  ]
})
