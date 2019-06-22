<template>
    <div>
        <ul>
            <!-- v-for문을 돌려서 값을 보여준다. v-bind:key는 v-for문을 돌릴때 키를 지정하는것 -->
            <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
                <!-- v-bind:class="{클래스명: vueJS변수}" 여기서 변수가 true일때 클래스가 적용됨 -->
                <i class="fas fa-check checkBtn" v-bind:class="{checkBtnCompleted: todoItem.toggleComplete}"
                    v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
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
    // 부모컴포넌트에서 받아올 props 정의
    props: ['propsdata'],
    // 사용자정의 function들은 methods 안에 정의한다.
    methods: {
        // 삭제 메소드: 로컬스토리지에서 해당 값을 삭제하고 목록에서 값 삭제
        removeTodo: function(todoItem, index){
            // removeItem이라는 이벤트를 발생시키고 todoItem, index를 넘긴다.
            this.$emit('removeItem', todoItem, index);
        },
        // 할일체크버튼 클릭시 반대값으로 바꿔주고, 로컬스토리지 값을 수정한다.
        toggleComplete: function(todoItem, index){
            // toggleItem이라는 이벤트를 발생시키고 todoItem, index를 넘긴다.
            this.$emit('toggleItem', todoItem, index);
        }
    }
}
</script>

<style scoped>
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
