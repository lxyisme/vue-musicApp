<template>
    <div>
        text
    </div>
</template>
<script>
    import jquery from 'jquery'
    export default{
        data(){
            return{
                msg:[]
            }
        },
        mounted(){
//            jquery.ajax({
//                url:'https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg',
//                data:{
//                    is_xml: 0,
//                    format: 'jsonp',
//                    key: "zhoujielun",
//                    g_tk: 5381,
//                    loginUin: 0,
//                    hostUin: 0,
//                    inCharset: 'utf8',
//                    outCharset: 'utf-8',
//                    notice: 0,
//                    platform: 'yqq',
//                    needNewCode: 0
//                },
//                dataType:' JSONP',
//                jsonp:"jsonpCallback",
//                success(res){
//                    console.log(res)
//                }
//            });
            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?topid=4&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0',{
            jsonp:"jsonpCallback"}
            ).then(res =>{
                console.log(res.body)
            });
//            this.$http.jsonp('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg',{
//                    jsonp:'jsonpCallback'
//                },{
//                format: 'jsonp',
//                g_tk: 5381,
//                uin: 0,
//                inCharset: 'utf-8',
//                outCharset: 'utf-8',
//                notice: 0,
//                platform: 'h5',
//                needNewCode: 1,
//                _: new Date().getTime()
//                }
//            ).then(res =>{
//                console.log(res.body)
//            });
//            this.$http.jsonp("https://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&format=jsonp&key=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&jsonpCallback=_jsonpgwn0a2n7sm",{jsonp:"jsonpCallback"})
//                .then((res) => {
//                    console.log(res);
//                })
        }
    }
</script>