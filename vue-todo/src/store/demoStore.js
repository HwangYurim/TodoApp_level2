// npm install한 라이브러리는 node_modules 폴더에 존재한다. 이 라이브러리를 임포트한다.
import Vue from 'vue'
import Vuex from 'vuex'

// use : 뷰 객체에 전역으로 Vuex를 사용할 수 있도록 등록한다.
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters: {
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price * 2;
        },
        triplePrice(state){
            return state.price * 3;
        }
    }
});