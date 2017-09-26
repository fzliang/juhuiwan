<template>
  <div id="main">
    <AppHeader></AppHeader>
    <transition name="fade" mode="out-in">
      <router-view id="orderContent"></router-view>
    </transition>
  </div>
</template>

<script>
import { AppHeader } from '@/components/layout'
import store from '@/vuex/store'
export default {
  name: 'main',
  components: { AppHeader },
  created() {
    store.commit('changeTitle', {title: '订单详情', headBack: true})
  },
  destroyed() {
    store.commit('changeTitle', {title: '巨惠玩', subTitle: '学生专属优惠', headBack: false})
  },
  data() {
    return {
      title: "订单详情",
    }
  }
}
</script>

<style lang="scss">

#orderContent {
  position: absolute;
  top: 50px;
  bottom: 0rem;
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0 auto;
  width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: transform .1s ease;
  transform: translate(0, 0)
}
.fade-enter, .fade-leave-to {
  transition: transform .1s ease;
  transform: translate(-100%, 0)
}
</style>
