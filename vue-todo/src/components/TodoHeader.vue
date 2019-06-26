<template>
    <div>
        <!-- <h1>TODO it!</h1> -->
        <!-- js에서 computed 안에 정의한 vuex helpers mapState 로 값을 꺼내옴 -->
        <h1>{{ this.headerText }}</h1>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    // js script
    computed: {
        // vuex helpers - mapState 적용
        ...mapState(['headerText'])
    }
}
</script>

<style scoped> /* scoped를 설정하여 이 css는 해당 컴포넌트에서만 적용되도록 한다. */
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>
