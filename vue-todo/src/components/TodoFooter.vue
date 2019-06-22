<template>
    <div class="clearAllContainer">
        <!-- 버튼 클릭시 clearTodo 메소드 실행 -->
        <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
</template>

<script>
export default {
    methods: {
        // clearTodo 메소드 실행시 clearAll 이벤트 발생
        // App.vue에서 TodoFooter 컴포넌트에서 clearAll 발생시 clearAllItem 메소드 실행 (v-on:clearAll="clearAllItem")
        clearTodo: function(){
            this.$emit('clearAll');
        }
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
