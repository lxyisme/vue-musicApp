import  * as types from './types';
export default {
    [types.NEXTSONG](state){

    },
    [types.SENDAUDIO](state,obj){
        state.dom = obj;
    },
    [types.SENDMUSIC](state,obj){
        state.playState=true;
        state.musicList.push(obj);
        state.musicPlace=state.musicList.length-1;
        state.dom.src="http://ws.stream.qqmusic.qq.com/"+state.musicList[state.musicPlace].songid+".m4a?fromtag=46";
    },
    [types.LOOPPLAYBACK](state){
        if (state.musicPlace>=state.musicList.length-1){
            state.musicPlace=0;
        }else {
            state.musicPlace++;
        }
        state.dom.src="http://ws.stream.qqmusic.qq.com/"+state.musicList[state.musicPlace].songid+".m4a?fromtag=46"
    },
    [types.PREVSONG](state){
        if (state.musicPlace==0){
            state.musicPlace=state.musicList.length-1;
        }else {
            state.musicPlace--;
        }
        state.dom.src="http://ws.stream.qqmusic.qq.com/"+state.musicList[state.musicPlace].songid+".m4a?fromtag=46"
    },
    [types.PAUSE](state){
        state.playState=false;
    },
    [types.PLAY](state){
        state.playState=true;
    },
    [types.CLOSELISTSTATE](state){
        state.listState=false;
    },
    [types.OPENLISTSTATE](state){
        state.listState=true;
    },
    [types.SELECTMUSIC](state,index){
        state.musicPlace=index;
        state.dom.src="http://ws.stream.qqmusic.qq.com/"+state.musicList[state.musicPlace].songid+".m4a?fromtag=46";
    },
    [types.DELMUSIC](state,index){
        index<=state.musicPlace?state.musicPlace--:false;
        state.musicList.splice(index,1);
        if(index==state.musicList.length&&index==state.musicPlace+1){
            if(index==0){
                state.playState=false;
                state.dom.src="";
            }else {
                state.dom.src="http://ws.stream.qqmusic.qq.com/"+state.musicList[state.musicPlace].songid+".m4a?fromtag=46";
            }
        }
    },
    [types.SHOWLOADING](state){
        state.isLoadingShow=true;
    },
    [types.HIDLOADING](state){
        state.isLoadingShow=false;
    },
    [types.SHOWPLAYINFO](state){
        state.isShowPlayInfo = true;
    },
    [types.HIDPLAYINFO](state){
        state.isShowPlayInfo = false;
    },
    [types.SETCURRENTTIME](state,time){
        state.dom.currentTime = time;
    }
}