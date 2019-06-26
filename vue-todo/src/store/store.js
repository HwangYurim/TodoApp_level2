// npm install한 라이브러리는 node_modules 폴더에 존재한다. 이 라이브러리를 임포트한다.
import Vue from 'vue'
import Vuex from 'vuex'

// ./getters 경로의 getters 파일 안에 있는 모든 function을 임포트한다.
import * as getters from './getters'
import * as mutations from './mutations'

// use : 뷰 객체에 전역으로 Vuex를 사용할 수 있도록 등록한다.
Vue.use(Vuex);

const storage = {
    fetch(){
        const arr = [];
        if(localStorage.length > 0){
            for(let i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

// Vuex.Store를 export 한다. 여기서 익스포트 한 뷰스토어는 main.js에서 임포트한다.
export const store = new Vuex.Store({
    state: {
        headerText: 'TODO it!',
        todoItems: storage.fetch()
    },
    // getters: getters,
    // mutations: mutations
    // 임포트한 getters와 mutations를 담는다. 객체명과 속성명이같을 경우 생략가능
    getters,
    mutations
});