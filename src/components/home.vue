<template>
    <div class="home">
        <v-carousel></v-carousel>
        <div class="homeTitle"><p>小雨滴推荐</p></div>
        <ul>
            <li v-for="(val,index) in arr">
                <a href="javascript:;" @click="sendMusic(val)">
                    <img :src="val.img" :alt="val.name">
                    <p class="songName">{{val.name}}</p>
                    <p class="singer">{{val.singer}}</p>
                </a>
            </li>
        </ul>
        <router-link to="/raking" tag="a" class="goToSeniority" >底下没有啦，快去排行榜看看吧</router-link>
    </div>
</template>
<script>
    import {mapActions} from 'vuex'//使用状态管理里的mapActions来传递方法
    import Carousel from './carousel.vue'
    export default{
        data(){
            return{
                arr:[]//存放推荐列表
            }
        },
        methods:mapActions(['sendMusic']),//传递当前点击音乐
        mounted(){
            this.$http.get("/src/json/recommend.json").then(res => {//请求推荐列表数据
                this.arr=res.body.data;
            },error =>{
                console.log(error);
            });
        },
        components:{
            'v-carousel':Carousel
        }
    }

</script>
<style>
    .home{
        height:74vh;
        overflow: auto;
    }
    .homeTitle{
        display: flex;
        margin: 8px 0;
        justify-content: space-between;
    }
    .homeTitle p{
        padding:0 10px;
        height:4vh;
        line-height: 4vh;
        background:#3de1ad;
        font-size: 1.2rem;
        color: #fff;
        border-radius: 0 2vh 2vh 0;
    }
    .homeTitle a{
        display: block;
        padding:0 10px;
        margin-right: 20px;
        height:4vh;
        line-height: 4vh;
        font-size: 1rem;
        color: #4c221b;
        background: #edd1d8;
        border-radius: 2vh;
    }
    .home ul{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .home ul li{
        margin-bottom: 10px;
    }
    .songName{
        color: #666;
        font-size: 1.2rem;
        margin: 5px 0;
    }
    .singer{
        color: #00e09e;
        font-size: 1rem;
    }
    .goToSeniority{
        margin-top: 20px;
        display: block;
        text-align: center;
        color: #999;
    }
</style>