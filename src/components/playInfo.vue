<template>
    <div class="playInfo">
        <v-musiclist></v-musiclist>
        <div class="playInfoTitle">
            <button @click="hidPlayInfo" class="iconfont">&#xe615;</button>
            <p>{{this.nowSong.name}} - {{this.nowSong.singer}}</p>
        </div>
        <div class="lycBox">
            <transition>
                <ul class="lyc" :style='{top:lyricPlace}'>
                     <li v-for="(val,index) in lyric"
                         :class="{nowLyc:index<=parseInt(currentTime)}"
                     >
                          {{val}}
                     </li>
                 </ul>
            </transition>
        </div>
        <div class="playbackProgress">
            <span>{{currentTime | date}}  </span>
            <mu-slider
                    v-model="moveValue"
                    class="demo-slider progress"
                    @change="moveSetTime"
            />
            <span>{{duration | date}}</span>
        </div>
        <div class="playBtnBox">
            <button @click="prevMusic" class="iconfont prev">&#xe64d;</button>
            <button @click="play" :class="playBtnClass"></button>
            <button @click="nextMusic" class="iconfont nextSong">&#xe64e;</button>
            <button class="iconfont songList" @click.stop="openListState">&#xe613;</button>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import Base64 from '../assets/js/base64';
    import parseLyric from '../assets/js/lyc';
    import {mapActions,mapGetters} from 'vuex';
    import MusicList from './musicList.vue'
    import jquery from 'jquery';

    Vue.filter('date',function(input){
        let time = new Date();
        time.setTime(input*1000);
        let seconds = time.getSeconds()<10?"0"+time.getSeconds():time.getSeconds();
        return time.getMinutes()+'.'+seconds;
    });
    export default{
        data(){
            return{
                lyric:'',
                lyricPlace:35+"vh",
                time:0,
                moveValue:0
            }
        },
        mounted(){
            this.getLyc();
            let _this =this;
            document.onclick=function () {
                _this.closeListState()
            };
            setTimeout(function () {
                let nowLyc= document.getElementsByClassName('nowLyc');
                let scrH =0;
                for (let i=0;i<nowLyc.length;i++){
                    scrH+=nowLyc[i].offsetHeight;
                    console.log(i)
                }
                jquery('.lycBox').scrollTop(scrH);
            },100);
        },
        methods:{
            moveSetTime(){
                if (this.duration>0){
                    setTimeout( () =>{
                        this.setCurrentTime(this.moveValue*this.duration/100);
                    },0);
                    let scroll = setTimeout(()=>{
                        clearTimeout(scroll);
                        let nowLyc= document.getElementsByClassName('nowLyc');
                        let scrH =0;
                        for (let i=0;i<nowLyc.length;i++){
                            scrH+=nowLyc[i].offsetHeight;
                        }
                        console.log(scrH);
                        jquery('.lycBox').scrollTop(scrH);
                    },10)
                }
            },
            getLyc(){
                if(this.nowSong.songid !== -1){
                    this.$http.jsonp("https://api.darlin.me/music/lyric/"+this.nowSong.songid+"/?").then(res =>{
                        let base = new Base64();
                        let result2 = base.decode(res.body.lyric);
                        this.lyric=parseLyric(result2)
                    })
                }
            },
            ...mapActions([
                'hidPlayInfo',
                'openListState',
                'closeListState',
                'play','nextMusic',
                'prevMusic',
                'setCurrentTime',
                'movePlay'
            ])
        },
        computed:{
            ...mapGetters(['nowSong','currentTime','playBtnClass','duration'])
        },
        components:{
            'v-musiclist':MusicList
        },
        watch:{
            nowSong(){
                this.getLyc();
                jquery('.lycBox').scrollTop(0)
            },
            currentTime(){
                this.time=parseInt(this.currentTime)
            },
            time(){
                if (this.lyric[this.time]){
                    let nowLyc= document.getElementsByClassName('nowLyc')
                    let scrH =0;
                    for (let i=0;i<nowLyc.length;i++){
                        scrH+=nowLyc[i].offsetHeight;
                    }
                    jquery('.lycBox').animate({scrollTop:scrH});
                }
                this.moveValue=(this.currentTime/this.duration).toFixed(4)*100
            }
        }
    }
</script>
<style scoped>
    .playInfo{
        position: absolute;
        top: 0;
        left:0;
        bottom:0;
        right:0;
        height:100vh;
        width:100%;
        max-width: 633px;
        background: #e1e2fe;
        margin: 0 auto;
        z-index: 3;
    }
    .playInfoTitle{
        height:6vh;
        display: flex;
    }
    .playInfoTitle p{
        line-height: 6vh;
        font-size: 1.4rem;
        color: #999;
    }
    .playInfoTitle button{
        margin-right: 1rem;
        margin-left: .5rem;
        font-size: 2rem;
        color: #999;
    }
    .lycBox{
        height:70vh;
        overflow: auto;
    }
    .lyc{
        position: relative;
    }
    .lyc .nowLyc{
        color: #00e09e;
    }
    .lyc li{
        min-height: 5vh;
        line-height: 5vh;
        text-align: center;
        font-size: 1.2rem;
    }
    .playbackProgress{
        margin-top: 4vh;
        height: 6vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .progress{
        width:70%;
        background: #fff;
        height:.5vh;
        margin: 0 1rem;
        position: relative;
        color: #00e09e;
    }
    .progress p{
        position: absolute;
        background: #00e09e;
        height:.5vh;
    }
    .progress button{
        width:2vh;
        height:2vh;
        border-radius: 1vh;
        background: #00e09e;
        position: absolute;
        top:-.8vh;
    }
    .playBtnBox{
        height:12vh;
        display: flex;
        justify-content: space-around;
    }
    .playBtnBox button{
        font-size: 2.5rem;
        flex: 1;
    }
    .playBtnBox .songList{
        flex: 0;
        font-size: 2rem;
    }
</style>