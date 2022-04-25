<template>
  <div class="layout-box">
    <top-bar></top-bar>
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

<script>
import topBar from './topBar.vue'
export default {
  name: 'layout',
  components: {
    topBar
  },

  data() {
    return {
      routerTime: 0,
      transitionName: "slide-left"
    }
  },

  computed: {
  
    direction () {
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
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../style/transform.scss";
.layout-box {
  color: white;
  overflow: auto;
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
</style>