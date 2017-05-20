## 使用vue2.0制作的音乐播放器（基于qq音乐api）持续更新中...

前段时间逛论坛，无意间看到了一个大神用vue写的音乐播放器，于是就手热自己写了一个

> 关于我，欢迎关注
  作者：潇禹

## 源代码
源代码地址：[GitHub](https://github.com/921227965/vue-musicApp)  
欢迎大家star和follow


### 在线预览
在线预览地址： [Vue音乐播放器](https://lxyisme.github.io) (PC端请在浏览器的移动端模式下查看)

![移动端二维码](https://github.com/lxyisme/vue-musicApp/blob/master/preview/1494160244.png)

### 预览图
![Vue音乐播放器](https://github.com/921227965/vue-musicApp/blob/master/preview/preview.gif?raw=true)

## 使用 Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

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

├── README.md           
├── config             // 项目不同环境的配置
├── index.html         // 项目入口文件
├── dist               // 项目build目录
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // css js 和图片资源
│   │	├── css
│   │	├── iconfont
│   │	├── img
│   │	└── js
│   ├── components     // 各种组件
│   │	├── loading
│   │	├── carousel.vue
│   │	├── header.vue
│   │	├── home.vue
│   │	├── musicList.vue
│   │	├── navBar.vue
│   │	├── playInfo.vue
│   │	├── playBar.vue
│   │	├── raking.vue
│   │	├── search.vue
│   │	└── toplist.vue
│   ├── store          // vuex状态管理器
│   │	├── action.js
│   │	├── getters.js
│   │	├── index.js
│   │	├── mutations.js
│   │	├── state.js
│   │	└── types.js
│   ├── json           // 推荐页面数据
│   │	└── recommend.json
│   ├── App.vue        
│   └── main.js        // Webpack 预编译入口
</pre>


### 已实现功能：

- [x]   音乐播放
- [x]   自动播放下一曲
- [x]   音乐列表（增删）
- [x]   下一曲
- [x]   排行榜
- [x]   排行榜详情页
- [x]   搜索
- [x]   loading
- [x]   播放详情页
- [x]   滚动歌词
- [x]   展示音乐进度
- [x]   音乐进度的拖拽

### 存在的Bug：
- [ ]   进度条拖拽后歌词位置不能及时定位
- [ ]   点开歌曲详情页歌词位置不执行定位

---
#### 欢迎技术交流，xiaoyuliu.webdeveloper@gmail.com
#### 微信：13216210763（欢迎“骚扰”）
