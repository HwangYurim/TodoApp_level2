// addOneItem은 todoInput 컴포넌트에서 발생시 할일값을 올려보내기 때문에 todoItem으로 받는다.
const addOneItem = (state, todoItem) => {
    const obj = {completed: false, item: todoItem};
    console.log(todoItem);
    localStorage.setItem(todoItem, JSON.stringify(obj));
    this.state.todoItems.push(obj);
}

// removeOneItem(state, todoItem, index){
const removeOneItem = (state, payload) => {
    console.log('remove items');
    console.log(payload.todoItem.item);
    localStorage.removeItem(payload.todoItem.item);
    this.state.todoItems.splice(payload.index, 1); // 배열에서 index번째 인덱스로부터 1개 지운다.
}

// toggleOneItem(state, todoItem, index){
const toggleOneItem = (state, payload) => {
    console.log(payload.todoItem.item + ', ' + payload.index);
    // console.log(this.state.todoItems[0]);
    this.state.todoItems[payload.index].completed = !this.state.todoItems[payload.index].completed;
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItem = () => {
    localStorage.clear();
    this.state.todoItems = [];
}

// 정의한 함수들을 한번에 export 하여 store 로 포함시킬 수 있다.
export { addOneItem, removeOneItem, toggleOneItem, clearAllItem }