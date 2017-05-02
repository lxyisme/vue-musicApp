<template>
    <ul class="rakingList">
        <router-link  tag="li" class="raking" v-for="(val,index) in list"
                      :to="{ name: 'toplist', params: { topid: val.id }}">
            <img class="rakingImg" :src="val.picUrl" alt="">
            <div class="rakingBox">
                <h1 class="rakingTitle">{{val.topTitle}}</h1>
                <p v-for="(value,index) in val.songList">
                    <b class="rakingSongName">{{index+1}}.{{value.songname}}</b>
                    <span class="rakingSingerName"> -{{value.singername}}</span>
                </p>
            </div>
        </router-link>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                list:[]
            }
        },
        mounted(){
            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?format=jsonp&g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1492853417073',{
                jsonp:"jsonpCallback"
            }).then(res =>{
                this.list=res.body.data.topList;
            })
        }
    }
</script>
<style>
    .rakingList{
        height:74vh;
        overflow: auto;
    }
    .raking{
        display: flex;
        height: 15vh;
        margin: 2vh auto;
        width: 94%;
        background: #eee;
    }
    .rakingImg{
        display: block;
        height:15vh;
    }
    .rakingBox{
        margin-left: 15px;
        width: 60%;
        overflow: hidden;
    }
    .rakingTitle{
        margin: 8px 0;
        font-size: 1.4rem;
        color: #665757;
    }
    .rakingBox p{
        margin: 5px 0;
        white-space: nowrap;
        font-size: 1rem;
    }
    .rakingSongName{
        font-weight: normal;
        color: #549688;
    }
    .rakingSingerName{
        color: #48c0a3;
    }
</style>