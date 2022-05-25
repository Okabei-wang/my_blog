<template>
    <div class="code-page">
        My Code Page
        {{ name }}
        {{ mobile }}
        {{ a }}
        {{ b }}
        {{ c }}
        {{ d }}
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
let name = ref('王钊');
let mobile = '15001107622';
let { a, b } = {
    a: 1,
    b: 2
}
let { c, d } = reactive({
    c: 3,
    d: 4
})
</script>