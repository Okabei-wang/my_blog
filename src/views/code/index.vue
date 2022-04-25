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

<script>
import { reactive, ref } from 'vue'
export default {
    setup() {
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
        return { name, mobile, a, b, c, d }
    }
}
</script>