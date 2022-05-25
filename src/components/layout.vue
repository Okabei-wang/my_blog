<template>
  <div :class="[isMobile ? 'layout-box-mobile' : 'layout-box']">
    <topBar :isMobile="isMobile"></topBar>
    <div class="main-page">
      <router-view class="router-view" v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import topBar from './topBar.vue'
const transitionName = "slide-left"
let isMobile = ref(false)
const direction = () => {
  const viewDir = this.$store.state.viewDirection
  let tranName = ''

  if (viewDir === 'left') {
    tranName = 'view-out'
  } else if (viewDir === 'right') {
    tranName = 'view-in'
  } else {
    tranName = 'fade'
  }

  return tranName
}

const checkIsMobile = () => {
  if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
    //显示移动端的代码
    isMobile.value = true
  }else{
    //显示非移动端的代码
    isMobile.value = false
  }
}
onBeforeMount(() => {
  checkIsMobile()
})
</script>

<style lang="scss" scoped>
@import "../style/transform.scss";
.layout-box {
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  width: calc( 100vw - 80px);
  height: calc( 100vh - 80px);
  margin: 40px;
  background-color: #0a0c16;
  border-radius: 35px;
  box-shadow: 0 0 5px #0a0c16;

  .main-page {
    padding: 0 15px;
  }
}

.layout-box-mobile {
  color: white;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #0a0c16;
  box-shadow: 0 0 5px #0a0c16;

  .main-page {
    padding: 0 15px;
  }
}
</style>