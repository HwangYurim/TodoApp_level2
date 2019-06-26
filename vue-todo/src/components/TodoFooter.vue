<template>
    <div class="clearAllContainer">
        <!-- 버튼 클릭시 clearTodo 메소드 실행 -->
        <span class="clearAllBtn" @click="clearTodo">Clear All</span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    methods: {
        // ...mapMutations({메소드명: 뮤테이션명}) ==> 이 메소드를 호출하는 템플릿에서 객체를 넘기면 뮤테이션에 넘어간다.
        // 템플릿에서는 이 메소드를 @click="메소드명({넘길인자1, 넘길인자2, ...})" 로 호출한다.
        ...mapMutations({clearTodo: 'clearAllItem'})
    }
}
</script>

<style scoped>
.clearAllContainer{
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
}
.clearAllBtn{
    color: #e20303;
    display: block;
}
</style>
