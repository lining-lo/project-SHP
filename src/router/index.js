import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{isShow:true}
        },
        {
            path:'/login',
            component:Login,
            meta:{isShow:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{isShow:false}
        },
        {
            path:'/search',
            component:Search,
            meta:{isShow:true}
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})

