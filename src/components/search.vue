<template>
    <div class="searchPage">
        <p class="searchBox">
            <b class="iconfont">&#xe61a;</b>
            <input type="text" placeholder="歌手/歌名/专辑名/歌词" v-model="searchKey" @keyup.enter="search(searchKey)">
            <button class="iconfont" @click="search(searchKey)">&#xe601;</button>
        </p>
        <h1 class="hotTitle" v-show="hotListState">热门搜索</h1>
        <transition enter-active-class="animated bounceInUp">
              <ul class="hotList" v-show="hotListState">
            <li v-for="(val,index) in seedSearch" @click="search(val.k)">
                {{val.k}}
            </li>
        </ul>
        </transition>
        <transition enter-active-class="animated bounceInUp">
                <div class="searchListBox" v-show="searchListState">
            <button class="iconfont" @click="closeList">&#xe623;</button>
        <ul class="searchList">
            <li v-for="(val,index) in searchList" @click="$store.dispatch('sendMusic',val)">
                <div><img :src="val.img" alt=""></div>
                <div>
                <h1>{{val.name}}</h1>
                <p>{{val.singer}}</p>
                </div>
            </li>
        </ul>
        </div>
        </transition>
        <transition enter-active-class="animated bounceInUp">
        <div class="notFound" v-show="notFound">
            <button class="iconfont" @click="closeList">&#xe623;</button>
            <h1>抱歉找不到了QAQ</h1>
        </div>
        </transition>
    </div>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex'
    export default{
        data(){
            return{
                seedSearch:[],
                hotListState:true,
                searchListState:false,
                notFound:false,
                searchKey:'',
                searchList:[]
            }
        },
        methods:{
            search(key){
                this.$http.jsonp(
                    "https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp?format=jsonp&n=20&w="+key+"",{
                    jsonp:"jsonpCallback"
                }).then(res => {
                    if (res.body.data.song.list !=[]){
                        this.hotListState=false;
                        this.searchListState=true;
                        this.searchList=[];
                        res.body.data.song.list.forEach(val => {
                            this.searchList.push({name:val.songname,
                                img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+val.albummid+".jpg?max_age=2592000",
                                songid:val.songid,
                                singer:val.singer[0].name})
                        });
                    }else {
                        this.notFound=true
                    }
                })
            },
            closeList(){
                this.hotListState=true;
                this.searchListState=false;
                this.notFound=false;
            }
        },
        mounted(){
            this.$http.jsonp('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?format=jsonp',
                {
                    jsonp:"jsonpCallback"
                }).then(res => {
                res.body.data.hotkey.forEach((val,index) => {
                    index<10?this.seedSearch.push(val):false;
                });
            })
        }
    }
</script>
<style>
    .searchPage{
        height:74vh;
        width: 80%;
        min-width:80%;
        margin: 0 auto;
        overflow: hidden;
    }
    .searchBox{

        margin: 1rem auto 0 auto;
        height:5vh;
        border:1px #ccc solid;
        border-radius: 2.5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .searchBox input{
        border: none;
        flex: 1;
    }
    .searchBox b,.searchBox button{
        margin: 0 1rem;
    }
    .hotTitle{
        margin:1.2rem .3rem;
        font-size: 1.2rem;
        color: #999;
    }
    .hotList{
        display: flex;
        flex-wrap: wrap;
    }
    .hotList li{
        padding: .5rem 1rem;
        border:1px #ccc solid;
        margin:.4rem .3rem;
        font-size: 1rem;
    }
    .searchListBox{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 4vh;
    }
    .searchListBox>button{
        font-size: 2rem;
        margin-right: 10px;
    }
    .searchList{
        overflow: auto;
        height: 62vh;
        flex: 1;
    }
    .searchList li{
        border-bottom: 1px #ccc solid;
        display: flex;
        overflow: hidden;
    }
    .searchList li img{
        width:50px;
        margin: 2px 0;
    }
    .searchList li h1,.searchList li p{
        margin: .5rem 0;
        padding-left: 1rem;
    }
    .searchList li h1{
        font-size: 1.2rem;
    }
    .notFound{
        position: relative;
        height: 62vh;
    }
    .notFound button{
        font-size: 2rem;
        margin-right: 10px;
        margin-top: 10px;
    }
    .notFound h1{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin: auto;
        text-align: center;
        height:5vh;
        font-size: 1.2rem;
    }
</style>