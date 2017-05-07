<template>
    <div class="header">
        <ul>
            <li><a href="javascript:;" class="iconfont icon-liebiao" @click="open('left')"></a></li>
            <li><a href="javascript:;">小雨滴音乐</a></li>
            <li><a href="javascript:;" class="iconfont icon-geren"></a></li>
        </ul>
        <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
            <div class="leftMuH">
                <p class="portrait"></p>
                <p class="userInfo">
                    <span>小雨滴音乐</span>
                    <span>懂你的音乐播放器</span>
                </p>
            </div>
            <ul class="optionsList">
                <li>会员中心</li>
                <li>我的音乐</li>
                <li>我的好友</li>
                <li>小雨滴推荐</li>
            </ul>
            <ul class="optionsList">
                <li>关于作者</li>
                <li>意见反馈</li>
                <li>版本说明  v1.2.0</li>
            </ul>

        </mu-popup>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                leftPopup: false
            }
        },
        methods:{
            open (position) {
                this[position + 'Popup'] = true
            },
            close (position) {
                this[position + 'Popup'] = false
            }
        }
    }
</script>
<style>
    .header{
        position: relative;
    }
    .header ul{
        height:6vh;
        line-height: 6vh;
        display: flex;
        justify-content: space-between;
    }
    .header ul li a{
        font-size: 1.6rem;
        color: #000;
    }
    .demo-popup-left {
        width: 80%;
        max-width: 375px;
        height: 100%;
        position: absolute;
        left: 0;
        background: #eee;
    }
    .leftMuH{
        height: 30vh;
        padding-top: 15vh;
        background:url("../assets/img/landing_bg.jpg") no-repeat center;
        background-size: cover;
        display: flex;
    }
    .portrait{
        width:80px;
        height:80px;
        background: url("../assets/img/head_portrait.jpg") no-repeat center;
        background-size:cover ;
        border-radius: 40px;
        margin: 0 8%;
    }
    .userInfo{
        color: #00e09e;
    }
    .userInfo span{
        display: block;
        margin-top: 1rem;
        font-size: 1.4rem;
    }
    .optionsList{
        background: #fff;
        margin-top: 1rem;
    }
    .optionsList li{
        border-bottom: 1px #999999 solid;
        font-size: 1.6rem;
        line-height: 6vh;
        padding-left: 2rem;
        color: #333;
    }

    .optionsList li:hover{
        background: #999;
    }
</style>