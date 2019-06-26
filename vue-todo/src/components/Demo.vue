<template>
    <div id="root">
        <p>{{ originalPrice }}</p>
        <p>{{ doublePrice }}</p>
        <p>{{ triplePrice }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        // originalPrice(){
        //     return this.$store.getters.originalPrice;
        // },
        // doublePrice(){
        //     return this.$store.getters.doublePrice;
        // },
        // triplePrice(){
        //     return this.$store.getters.triplePrice;
        // }
        
        // 위와 같이 vuex store에서 만들어놓은 getters와 메소드명이 같을 경우 아래와 같이 간단하게 표현할 수 있다.
        ...mapGetters(['origenalPrice', 'doublePrice', 'triplePrice'])
    }
}
</script>

<style>

</style>
