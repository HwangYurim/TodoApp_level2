<template>
    <div class="inputBox shadow">
        <!-- v-model 은 vueJS로 data를 동적으로 매핑하기 위한 것
             이 input에 값을 입력하면 vueJS의 newTodoItem 이라는 data 변수에 값이 반영된다.
             onclick으로 keyup이벤트가 enter키에서 발생했을때 메소드를 실행한다. -->
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- v-on:click="메소드명" 은 onclick="메소드명" 과 같다 -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            newTodoItem: "" 
        }
    },
    // 사용자정의 function들은 methods 안에 정의한다.
    methods: {
        addTodo: function(){
            if(this.newTodoItem !== ''){
                // eventBus 실행하기 : $emit('이벤트명', '인자1', '인자2', ...);
                // 상위컴포넌트로 addTodoItem 이벤트버스를 발생시키고(emit) this.newTodoItem을 보낸다.
                this.$emit('addTodoItem', this.newTodoItem);
                this.clearInput();
            }
        },
        clearInput: function(){
            // input창 값 초기화
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
input:focus{
    outline: none;
}
.inputBox{
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
}
.addBtn{
    color: white;
    vertical-align: middle;
}
</style>
