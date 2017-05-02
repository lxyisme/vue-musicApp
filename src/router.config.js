import Home from './components/home.vue';
import Search from './components/search.vue';
import Raking from './components/raking.vue';
import TopList from './components/toplist.vue';
const routes =[
    {path:'/home',component:Home},
    {path:'/search',component:Search},
    {path:'/raking',component:Raking},
    {path:'/',redirect:'/home'},
    {name:'toplist',path:'/toplist/:topid',component:TopList}
];

export default {routes}