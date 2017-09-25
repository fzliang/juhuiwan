<template>
  <div id="main">
    <AppHeader :title="title" :subtitle="subtitle" backButton="false"></AppHeader>
    <transition name="fade" mode="out-in">
      <router-view id="content"></router-view>
    </transition>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import { AppFooter, AppHeader } from '@/components/layout'
export default {
  name: 'main',
  components: { AppHeader, AppFooter },
  data() {
    return {
      title: "巨惠玩",
      subtitle: "学生专属优惠",
    }
  },

  mounted() {
    this.updateMenu();
  },

  updated() {
    this.updateMenu();
  },

  methods: {
    updateMenu() {
      switch (this.$route.name) {
        case '订单':
          this.title = "订单", this.subtitle = "";
          break;
        case '我的':
          this.title = "我的", this.subtitle = "";
          break;
        default:
          this.title = "巨惠玩", this.subtitle = "学生专属优惠";
      }
    }
  }
}
</script>

<style lang="scss">

#content {
  position: absolute;
  top: 3.5rem;
  bottom: 3rem;
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