<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- TodoInput 컴포넌트에서 addTodoItem 이벤트가 발생되면 addOneItem 메소드를 실행한다. -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- 하위 컴포넌트에 현재 위치에서 가지고있는 todoItems 데이터변수를 propsdata 라는 props로 바인딩한다.
         TodoList 컴포넌트에서 removeItem 이벤트가 발생되면 removeOneItem 메소드를 실행한다.
         v-bind:하위컴포넌트의props명="데이터명"
         v-on:하위컴포넌트에서 $emit된 이벤트명="메소드명" -->
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeItem="removeOneItem"
              v-on:toggleItem="toggleOneItem">
    </TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template> 

<script>
// 컴포넌트들을 임포트한다.
// TodoHeader.vue 파일을 TodoHeader 라는 이름으로 담겠다.
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data(){ 
        return {
            todoItems: []
        }
  },
  methods: {
    // addOneItem은 todoInput 컴포넌트에서 발생시 할일값을 올려보내기 때문에 todoItem으로 받는다.
    addOneItem(todoItem){
      const obj = {completed: false, item: todoItem};
      // addTodo 메소드 실행시 this(이 뷰 객체)의 newTodoItem 변수를 콘솔에 찍음
      console.log(todoItem);
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index){
      console.log('remove items');
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); // 배열에서 index번째 인덱스로부터 1개 지운다.
    },
    toggleOneItem(todoItem, index){
      console.log(todoItem.item + ', ' + index);
      // todoItem.completed = !todoItem.completed;
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(){
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // created : vue instance가 생성되자마자 호출됨 (vue lifecycle hook)
  created(){
      if(localStorage.length > 0){
          for(let i=0; i<localStorage.length; i++){
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                  this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
          }
      }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    // 'TodoHeader' : TodoHeader,
    // 'TodoInput' : TodoInput,
    // 'TodoList' : TodoList,
    // 'TodoFooter' : TodoFooter
    // ES6 - 속성명과 값 명이 동일할때 아래와 같이 축약할 수 있다.
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
/* 앱 전체에서 적용할 css를 여기에 선언한다. */
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
