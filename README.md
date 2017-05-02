## 基于vue2.0制作的音乐播放器（基于qq音乐api）

前段时间逛论坛，无意间看到了一个大神用vue写的音乐播放器，于是就手热自己写了一个

> 关于我，欢迎关注
  作者：潇禹

## 源代码
源代码地址：[GitHub](https://github.com/921227965/vue-musicApp)  
欢迎大家star和follow


### 在线预览
在线预览地址： [Vue音乐播放器](https://921227965.github.io)

### 预览图
![Vue音乐播放器](https://github.com/921227965/vue-musicApp/blob/master/preview/preview.gif?raw=true)

### 使用依赖
<pre>
   animate.css
   vue-router
   vue-resource
   webpack
   vue-awesome-swiper...
</pre>
### 目录结构
<pre>
.
├── README.md           
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── store          // vuex状态管理器
│   ├── json           // 推荐页面数据
│   ├── App.vue        
│   └── main.js        // Webpack 预编译入口
</pre>


### 已实现功能：
<pre>
   音乐播放
   自动播放下一曲
   音乐列表（增删）
   下一曲
   排行榜
   排行榜详情页
   搜索
   loading
   播放详情页
   滚动歌词
   展示音乐进度
</pre>
---
### 待实现功能：
<pre>
   音乐进度的拖拽
   侧边栏
   登陆，注册
</pre>   
