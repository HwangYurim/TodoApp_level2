<template>
  <div>
    <!-- 트랜지션 효과를 줄 그룹을 ul로 설정한다.
         vueJS 공식문서의 트랜지션 클래스에서 v-enter-active의 v-는 트랜지션그룹의 네임값이다.
         즉, css에서 트랜지션그룹네임값-enter-active 로 클래스를 설정해주면 된다. -->
    <transition-group name="list" tag="ul"> <!-- <ul>로 html이 생성된다. -->
      <!-- v-for문을 돌려서 값을 보여준다. v-bind:key는 v-for문을 돌릴때 키를 지정하는것.
           js에서 computed 안에 정의한 vuex helpers mapGetters 로 for loop -->
      <li class="shadow" v-for="(todoItem, index) in this.getTodoItems" v-bind:key="todoItem.item">
        <!-- v-bind:class="{클래스명: vueJS변수}" 여기서 변수가 true일때 클래스가 적용됨 -->
        <i class="fas fa-check checkBtn"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <!-- 삭제버튼에 onclick이벤트로 removeTodo()를 호출.
             객체타입으로 넘긴다. 메소드명({객체들}) -->
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group> <!-- </ul>로 html이 생성된다. -->
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // 사용자정의 function들은 methods 안에 정의한다.
  // methods 는 vuex store의 mutations와 같다.
  methods: {
    // ...mapMutations({메소드명: 뮤테이션명}) ==> 이 메소드를 호출하는 템플릿에서 객체를 넘기면 뮤테이션에 넘어간다.
    // 템플릿에서는 이 메소드를 @click="메소드명({넘길인자1, 넘길인자2, ...})" 로 호출한다.
    ...mapMutations({
      // 삭제 메소드: 로컬스토리지에서 해당 값을 삭제하고 목록에서 값 삭제
      removeTodo: 'removeOneItem',
    // 할일체크버튼 클릭시 반대값으로 바꿔주고, 로컬스토리지 값을 수정한다.
      toggleComplete: 'toggleOneItem'
    }),
  },
  // 연산식은 템플릿안에 넣지 않고 computed 안에 정의한다.
  computed: {
    // todoItems(){
    //   // computed에서 todoItems() 로 정의한 function은 템플릿에서 todoItems 로 쓸 수 있다.
    //   return this.$store.getters.getTodoItems;
    // }
    // vuex helpers - mapGetters 적용
    ...mapGetters(['getTodoItems'])
  }
};
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
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
