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

const state = {
    headerText: 'TODO it!',
    todoItems: storage.fetch()
};

// getters: getters,
// mutations: mutations
// 임포트한 getters와 mutations를 담는다. 객체명과 속성명이같을 경우 생략가능
const getters = {
    getHeaderText(state){
        return state.headerText;
    },
    getTodoItems(state){
        return state.todoItems;
    }
};

const mutations = {
    // addOneItem은 todoInput 컴포넌트에서 발생시 할일값을 올려보내기 때문에 todoItem으로 받는다.
    addOneItem(state, todoItem){
        const obj = {completed: false, item: todoItem};
        console.log(todoItem);
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    // removeOneItem(state, todoItem, index){
    removeOneItem(state, payload){
        console.log('remove items');
        console.log(payload.todoItem.item);
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1); // 배열에서 index번째 인덱스로부터 1개 지운다.
    },
    // toggleOneItem(state, todoItem, index){
    toggleOneItem(state, payload){
        console.log(payload.todoItem.item + ', ' + payload.index);
        // console.log(this.state.todoItems[0]);
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItem(){
        localStorage.clear();
        state.todoItems = [];
    }
};

// export default 는 한개의 파일에서 딱 한번만 가능하다.
export default{
    state,
    getters,
    mutations
}