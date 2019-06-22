<template>
  <div class="inputBox shadow">
    <!-- v-model 은 vueJS로 data를 동적으로 매핑하기 위한 것
             이 input에 값을 입력하면 vueJS의 newTodoItem 이라는 data 변수에 값이 반영된다.
    onclick으로 keyup이벤트가 enter키에서 발생했을때 메소드를 실행한다.-->
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- v-on:click="메소드명" 은 onclick="메소드명" 과 같다 -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <!-- showModal 데이터변수가 true일때만 모달이 나타난다. -->
    <Modal v-if="showModal" @close="showModal = false">
      <!-- slot은 이미 해당 컴포넌트의 템플릿에서 정의된 부분을 재정의할 수 있다. -->
      <h3 slot="header">
        경고!
        <!-- v-on:click 은 @click 으로 줄여서 쓸 수 있다. 아이콘 클릭시 showModal 변수를 false로 바꿔서 모달을 미노출한다. -->
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <p slot="body">등록할 할일내용을 입력하십시오.</p>
    </Modal>
  </div>
</template>

<script>
// Modal.vue 컴포넌트를 Modal이라는 이름으로 임포트한다.
import Modal from "./common/Modal.vue";

export default {
  data: function() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  // 사용자정의 function들은 methods 안에 정의한다.
  methods: {
    addTodo: function() {
      if (this.newTodoItem !== "") {
        // eventBus 실행하기 : $emit('이벤트명', '인자1', '인자2', ...);
        // 상위컴포넌트로 addTodoItem 이벤트버스를 발생시키고(emit) this.newTodoItem을 보낸다.
        this.$emit("addTodoItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput: function() {
      // input창 값 초기화
      this.newTodoItem = "";
    }
  },
  // TodoInput 컴포넌트의 내장 컴포넌트를 등록한다.
  components: {
    // Modal이라는 컴포넌트명으로 위에서 임포트한 Modal을 등록.
    Modal: Modal
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>
