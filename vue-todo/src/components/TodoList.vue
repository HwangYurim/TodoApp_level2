<template>
    <div>
        <ul>
            <!-- v-for문을 돌려서 값을 보여준다. v-bind:key는 v-for문을 돌릴때 키를 지정하는것 -->
            <li class="shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem">
                {{ todoItem }}
                <!-- 삭제버튼에 onclick이벤트로 removeTodo()를 호출 -->
                <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            todoItems: []
        }
    },
    // 사용자정의 function들은 methods 안에 정의한다.
    methods: {
        removeTodo: function(todoItem, index){
            // 삭제 메소드: 로컬스토리지에서 해당 값을 삭제하고 목록에서 값 삭제
            console.log('remove items');
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1); // 배열에서 몇번째 인덱스로부터 몇개 지운다.
        }
    },
    // created : vue instance가 생성되자마자 호출됨 (vue lifecycle hook)
    created: function(){
        if(localStorage.length > 0){
            for(var i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        }
    }
}
</script>

<style>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.5rem;
    background: white;
    border-radius: 5px;
}
.removeBtn{
    margin-left: auto;
    color: #de4343;
}
.checkBtn{
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCompleted{
    color: #b3adad;
}
.textCompleted{
    text-decoration: line-through;
    color: #b3adad;
}
</style>
