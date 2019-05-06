import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../pages/index.vue'
import Technology from '../pages/technology.vue'
import Recruit from '../pages/recruit.vue'
import Profile from '../pages/profile.vue'
import Front from '../pages/front.vue'
import Advantage from '../pages/advantage.vue'

export default new VueRouter({
    routes:[
        {path:'/',redirect:'/index.html'},
        {path:'/index.html',component:Index},
        {path:'/technology.html',component:Technology},
        {path:'/recruit.html',component:Recruit},
        {path:'/front.html',component:Front},
        {path:'/profile.html',component:Profile},
        {path:'/advantage.html',component:Advantage},
    ]
})