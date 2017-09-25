<template>
  <div>
    <div id="app-order-select">
      <el-radio-group v-model="radio" @change="changeOrderMenu" id="app-select">
        <el-radio-button label="0">待使用</el-radio-button>
        <el-radio-button label="1">已使用</el-radio-button>
      </el-radio-group>
    </div>

  <div id="app-order">
    <NonUsed v-show="menu[0]">
    </NonUsed>

    <Used v-show="menu[1]">
    </used>
  </div>
  </div>
</template>

<script>

import NonUsed from '@/view/Order/NonUsed'
import Used from '@/view/Order/Used'

export default {
  data() {
    return {
      msg: 'order',
      radio: '0',
      menu: [ true, false]
    }
  },

  components: { NonUsed, Used },

  methods: {
    changeOrderMenu() {
      this.menu = [ false, false];
      this.menu[parseInt(this.radio)] = true;
    }
  }
}
</script>

<style lang="scss" scoped>
#content {
  background: #ccc;
  width: 100%;
  #app-order-select {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    background: #fff;
  }
}
</style>
