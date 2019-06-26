// npm install한 라이브러리는 node_modules 폴더에 존재한다. 이 라이브러리를 임포트한다.
import Vue from 'vue'
import Vuex from 'vuex'

import todoApp from './modules/todoApp'

// use : 뷰 객체에 전역으로 Vuex를 사용할 수 있도록 등록한다.
Vue.use(Vuex);

// Vuex.Store를 export 한다. 여기서 익스포트 한 뷰스토어는 main.js에서 임포트한다.
export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});