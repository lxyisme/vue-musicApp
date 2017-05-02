<template>
    <div class="loading">
        <img src="../../assets/img/loading1.gif" alt="">
        <p>正在加载中...</p>
    </div>
</template>
<style>
    .loading{
        position: fixed;
        top:0;
        left: 0;
        right:0;
        bottom:0;
        margin: auto;
        z-index: 3;
        width: 100%;
        height: 100vh;
        background: #e1e2fe;
    }
    .loading img{
        width:60%;
        position: absolute;
        top:30%;
        left: 0;
        right:0;
        margin: 0 auto;
    }
    .loading p{
        position: absolute;
        right:5%;
        bottom:3%;
        color: #999;
        font-size: 1.2rem;
    }
</style>