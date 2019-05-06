import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'
import 'lib-flexible'
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'element-ui/lib/theme-chalk/index.css'
import { Button } from 'element-ui'
Vue.component(Button.name, Button)

import { Icon, Popup } from 'vant';
Vue.use(Icon).use(Popup);

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.options.emulateJSON = true;

new Vue({
    el:'#app',
    render:h => h(App),
    components: { App },
    router,
    store,
    watch: {
      '$route.path': function (newVal, oldVal) {
       if (newVal === '/index.html') {
        $("title").html("锁生活 首页");
       }
       if (newVal === '/advantage.html') {
        $("title").html("锁生活 产品优势");
       }
       if (newVal === '/technology.html') {
        $("title").html("锁生活 核心科技");
       }
       if (newVal === '/front.html') {
        $("title").html("锁生活 项目前景");
       }
       if (newVal === '/recruit.html') {
        $("title").html("锁生活 招募伙伴");
       }
       if (newVal === '/profile.html') {
        $("title").html("锁生活 关于我们");
       }
      }
    }
})