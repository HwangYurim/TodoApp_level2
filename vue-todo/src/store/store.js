// npm install한 라이브러리는 node_modules 폴더에 존재한다. 이 라이브러리를 임포트한다.
import Vue from 'vue'
import Vuex from 'vuex'

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
    getters: {
        getTodoItems(state){
            return state.todoItems;
        }
    },
    mutations: {
        // addOneItem은 todoInput 컴포넌트에서 발생시 할일값을 올려보내기 때문에 todoItem으로 받는다.
        addOneItem(state, todoItem){
            const obj = {completed: false, item: todoItem};
            console.log(todoItem);
            localStorage.setItem(todoItem, JSON.stringify(obj));
            this.state.todoItems.push(obj);
        },
        // removeOneItem(state, todoItem, index){
        removeOneItem(state, payload){
            console.log('remove items');
            console.log(payload.todoItem.item);
            localStorage.removeItem(payload.todoItem.item);
            this.state.todoItems.splice(payload.index, 1); // 배열에서 index번째 인덱스로부터 1개 지운다.
          },
        // toggleOneItem(state, todoItem, index){
        toggleOneItem(state, payload){
            console.log(payload.todoItem.item + ', ' + payload.index);
            // console.log(this.state.todoItems[0]);
            this.state.todoItems[payload.index].completed = !this.state.todoItems[payload.index].completed;
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        clearAllItem(){
            localStorage.clear();
            this.state.todoItems = [];
        }
    }
});