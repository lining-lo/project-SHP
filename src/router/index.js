import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

Vue.use(VueRouter)

//重写push|replace解决多次执行报错问题
//第一个参数：跳转的地址
//第二个参数：成功的回调
//第三个参数：失败的回调
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }

}


export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { isShow: true }
        },
        {
            path: '/login',
            component: Login,
            meta: { isShow: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { isShow: false }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: { isShow: true }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})

