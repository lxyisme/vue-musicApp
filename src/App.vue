<template>
  <div id="app">
      <!--loading插件-->
      <v-loading v-show="isLoadingShow"></v-loading>
      <!--头部插件-->
      <v-header v-show="headerShow"></v-header>
      <!--导航插件-->
      <v-nav v-show="navShow"></v-nav>
      <!--路由展示区-->
      <transition enter-active-class="animated bounceInUp">
          <router-view></router-view>
      </transition>
      <!--底部插件-->
      <v-footer></v-footer>
      <!--音乐详情页插件-->
      <transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
        <v-playInfo v-if="isPlayInfoShow"></v-playInfo>
      </transition>
      <!--音频播放标签-->
      <audio src="" ref="audio" autoplay="autoplay" @ended="loopPlayback" @timeupdate="getcurrentTime" @canplay="getDuration"></audio>
  </div>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex'//使用状态管理里的mapActions来传递方法，mapGetters来展示数据
  import Header from './components/header.vue'
  import Footer from  './components/playerbar.vue'
  import NavBar from './components/navBar.vue'
  import PlayInfo from './components/playInfo.vue'
export default {
  name: 'app',
  data () {
    return {
        headerShow:true,//是否显示头
        navShow:true,//是否显示导航
    }
  },
    components:{
        'v-header':Header,
        'v-footer':Footer,
        'v-nav':NavBar,
        'v-playInfo':PlayInfo
    },
    mounted() {
        this.$store.dispatch('sendAudio',this.$refs.audio);//在模板编译完成后把audio元素发送给action
        this.routerChange(this.$route.path);//监听路由隐藏或显示头和导航
    },
    methods:{//需要安装babel插件
            //$ npm install babel-plugin-transform-object-rest-spread
            //配置babelrc
            //添加	"plugins": ["transform-object-rest-spread"]
        routerChange(path){//监听路由隐藏或显示头和导航
            path=path.substring(1);
            if (path.indexOf('toplist') !=-1){
                this.headerShow=false;
                this.navShow=false;
            }else {
                this.headerShow=true;
                this.navShow=true;
            }
        },
        ...mapActions([
            'nextSong',
            'loopPlayback',//循环播放（自动下一曲）
            'getcurrentTime',//获取播放进度
            'getDuration'//获取歌曲时间
        ])
    },
    computed:mapGetters([
        'isLoadingShow',//是否显示loading
        'isPlayInfoShow'//是否显示播放详情页
    ]),
    watch:{
      $route(to){//监听路由隐藏或显示头和导航
          this.routerChange(to.path)
      }
    }
}
</script>

<style lang="scss">

</style>
