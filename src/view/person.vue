<template>
  <div>
    <div id="person">
      <div id="userpic">
        <img id="picBg" :src="pic" width="100%">
        <ul>
          <li><img id="picHead" :src="pic" width="25%"></li>
        </ul>

      </div>
      <div id="userinfo">
        <p>{{name}}</p>
      </div>

      <!-- <div class="list">
        <div class="option">
          <div class="title">选项1</div>
          <div class="right">
            <span class="red_number">12</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div> -->

      <ul class="list">
        <li class="option">
          <div class="title">选项1</div>
          <div class="right">
            <span class="red_number">12</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
        <li class="option">
          <div class="title">选项1</div>
          <div class="right">
            <span class="grey_number">12</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
        <li class="option">
          <div class="title">选项1</div>
          <div class="right">
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
        <li class="option">
          <div class="title">选项1</div>
          <div class="right">
            <span class="red_number">12</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>
      </ul>

      <ul class="list">
        <li class="option">
          <div class="title">选项1</div>
          <div class="right">
            <span class="red_number">12</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </li>

      </ul>

      <ul class="list">
        <li class="option">
          <div class="title">版本号</div>
          <div class="right">
            <span>0.0.1</span>
          </div>
        </li>

      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pic: './static/userpic.jpg',
      name: 'hi~欧嫩汁er'
    }
  }
}
</script>

<style lang="scss" scoped>
#person {

  #userpic {
    height: 128px;
    overflow-y: hidden;
    #picBg {
      filter: blur(10px)
    }
    ul {
      list-style: none;
      position: absolute;
      top: 0;
      width: 100%;
      text-align: center;
      vertical-align: middle;
      line-height: 128px;
      height: 128px;
      #picHead {
        display: inline-block;
        vertical-align: middle;
        width: 96px;
        height: 96px;
        border: 1px solid #fff;
        border-radius: 50%;
      }
    }
  }
  #userinfo {
    background-color: #fff;
    font-size: 25px;
    height: 50px;
    line-height: 50px;
    padding-left: 12px
  }

  .list {
    padding-top: 12px;
    .option {
      padding-left: 12px;
      height: 40px;
      line-height: 40px;
      background-color: #fff;
      border-top: 1px solid #ccc;
      .title {
        display: inline-block;
        float: left;
      }
      .right {
        float: right;
        display: inline-block;
        font-size: 12px;
        padding: 0 6px;
      }
    }
  }

  .red_number {
    background-color: #ff4949;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    border: 1px solid #fff;
    position: relative;
  }

  .grey_number {
    background-color: #ccc;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    border: 1px solid #fff;
    position: relative;
  }
}
</style>
