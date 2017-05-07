<template>
    <transition
            enter-active-class="animated fadeInUp"
            leave-active-class="animated fadeOutDown"
    >
    <div class="musicList_box" v-show="getListState">
        <h1>播放列表（{{getList?getList.length:0}}首）</h1>
    <ul class="musicList">
        <li v-for="(val,index) in getList" :class="{playing:getMusicPlace==index}">
            <span>{{index+1}}.</span>
            <b  @click.stop="selectMusic(index)">
                {{val?val.name:你还没有添加列表}}
            </b>
            <button class="iconfont" @click.stop="delMusic(index)">&#xe636;</button>
        </li>
    </ul>
        <a href="javascript:;" class="closeList" @click="closeListState">关闭</a>
    </div>
    </transition>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex'
    export default{
        computed:mapGetters(['getList','getListState','getMusicPlace']),//actions.js里有注释功能
        methods:mapActions(['closeListState','selectMusic','delMusic'])//getters.js里有注释功能
    }
</script>
<style>
    .musicList_box{
        position: fixed;
        height:36vh;
        bottom: 0;
        z-index: 2;
        right:0;
        width: 100%;
        overflow: auto;
        background: #eee;
        opacity: .8;
    }
    .musicList .playing{
        color: #00e09e;
    }
    .musicList_box h1{
        text-align: center;
        color: #000;
        height:3vh;
        line-height: 3vh;
        font-size: 1.2rem;
    }
    .musicList{
        overflow: auto;
        height: 25vh;
    }
    .musicList li{
        display: flex;
        justify-content: space-between;
        height:5vh;
        color: #000;
        border-top: 1px #999 solid;
        line-height: 5vh;
        font-size: 1.2rem;
    }
    .musicList li button{
        color: #000;
        margin-right: 1rem;
    }
    .musicList li b{
        flex:1;
        padding-left: 1rem;
        font-weight: normal;
    }
    .closeList{
        display: block;
        color: #000;
        text-align: center;
        line-height: 5vh;
        font-size: 1.2rem;
    }
</style>