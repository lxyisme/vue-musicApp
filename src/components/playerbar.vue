<template>
    <div class="playBar">
        <v-musiclist></v-musiclist>
        <ul class="playBar_box">
            <li class="playBar_l">
                <img :src="songImg" @click="showPlayInfo">
            </li>
            <li class="playBar_m">
                <h1 class="songName">{{songInfo.name}}</h1>
                <p class="singerName">{{songInfo.singer}}</p>
            </li>
            <li class="playBar_r">
                <button @click="play" :class="playBtnClass"></button>
                <button @click="nextMusic" class="iconfont">&#xe64e;</button>
                <button class="iconfont" @click.stop="openListState">&#xe613;</button>
            </li>
        </ul>
    </div>
</template>
<script>
    import MusicList from './musicList.vue'
    import {mapActions,mapGetters} from 'vuex'
    export default{
        data(){
            return{
            }
        },
        methods:mapActions(['play','nextMusic','openListState','closeListState','showPlayInfo']),
        computed:mapGetters(['playBtnClass','currentTime','duration','songImg','songInfo']),
        watch:{

        },
        components:{
            'v-musiclist':MusicList
        }
    }
</script>
<style>
    .playBar{
        position: relative;
    }
    .playBar_box{
        display: flex;
        align-items: center;
        height: 14vh;
        padding-left: 1.5rem;
    }
    .playBar_l{
        height:16vw;
        width: 16vw;
        border: 2px #ccc solid;
        max-width: 90px;
        max-height: 90px;
    }
    .playBar_l img{
        width: 16vw;
        max-width: 86px;
        max-height: 86px;
    }
    .playBar_m{
        flex: 1;
        padding-left: 1.5rem;
    }
    .playBar_r button{
        font-size: 3rem;
        margin-right: 1.2rem;
    }
</style>
