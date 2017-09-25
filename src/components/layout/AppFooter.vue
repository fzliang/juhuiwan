<template>
  <div id="app-footer">
      <el-row type="flex" justify="space-around">
        <el-col :span="6">
          <router-link to="/" tag="div">
          <div class="footer-icon" @click="menuClick(0)">
            <i class="iconfont icon-home" v-show="menu != 0"></i>
            <i class="iconfont icon-homefill" v-show="menu == 0"></i>
            首页
          </div>
          </router-link>
        </el-col>
        <el-col :span="6">

          <router-link to="/order" tag="div">
          <div class="footer-icon" @click="menuClick(1)">
            <i class="iconfont icon-news_hot_light" v-show="menu != 1"></i>
            <i class="iconfont icon-news_hot_fill_light" v-show="menu == 1"></i>
            订单
          </div>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link to="/person" tag="div">
          <div class="footer-icon" @click="menuClick(2)">
            <i class="iconfont icon-people" v-show="menu != 2"></i>
            <i class="iconfont icon-peoplefill" v-show="menu == 2"></i>
            我的
          </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
</template>
<script>

import store from '@/vuex/store'
const menuList = [
  {title: '巨惠玩', subTitle: '学生专属优惠'},
  {title: '订单', subTitle: ''},
  {title: '我的', subTitle: ''}
]

export default {
  name: 'Footer',

  methods: {
	  menuClick(index) {
      store.commit('changeMenu', index);
      store.commit('changeTitle', menuList[index])
    }
  },

  computed: {
    menu() {
      return store.state.footMenu
    }
  }
}
</script>



<style lang="scss">

#app-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  font-family: '微软雅黑';
  z-index: 9999;
  .footer-icon {
    margin: 0 auto;
    padding: 0.15rem;
    font-size: 0.75rem;
    text-align: center;
    width: 2rem;
    i {
      font-size: 2rem;
    }
  }
}
</style>
