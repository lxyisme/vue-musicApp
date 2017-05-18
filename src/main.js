import Vue from 'vue'
import App from './App.vue'
import 'animate.css'//导入动画组件
import VueResource from 'vue-resource'//导入数据交互模块
Vue.use(VueResource);
import './assets/css/reset.css'//导入全局reset
import VueRouter from 'vue-router';//导入路由
Vue.use(VueRouter);
import routes from './router.config';//导入路由配置文件
const router =new VueRouter(routes);//创建路由实列
import './assets/iconfont/iconfont.css';//图形字体库
import store from './store';//全局挂载状态管理
import museUi from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'
Vue.use(museUi);
import loading from './components/loading';
Vue.use(loading);
Vue.http.interceptors.push((request, next) => {
    store.dispatch('showLoading');
    next((response) => {
      setTimeout(function () {
          store.dispatch('hidLoading')
      },100);
        return response
    });
});
new Vue({
  el: '#app',
  render: h => h(App),
    router,
    components:{
    },
    store
});
