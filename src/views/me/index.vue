<template>
    <div>
        About Me Page
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import { getHomeInfo } from '../../api/home'
const getData = async () => {
    const res = await getHomeInfo()
    console.log(res)
}
onBeforeMount(async () => {
    const res = await getData()
})
</script>