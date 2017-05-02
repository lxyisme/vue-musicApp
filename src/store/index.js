import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import state from './state';

import actions from './actions';

import mutations from './mutations';

import getters from './getters';

export default new Vuex.Store({
    state,actions,mutations,getters
})

