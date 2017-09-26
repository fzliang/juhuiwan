<template>
  <div>
    <ul>
      <li v-for="order in orderList" @click="$router.push('/orderDetail')">
				<span class="shopImg">
					<img :src="order.orderImg" width="100%">
				</span>
        <div class="shopDetail">
          <span class="shopName">{{order.orderName}}</span>
          <span class="shopAddress">[{{order.orderAddr}}]</span>
          <span class="ticketPrice">[{{order.ticketKind}}： ￥{{order.ticketPrice}}] x {{order.ticketCount}}</span>
          <span class="lastTime">使用日期： {{order.usedDate}}</span>
          <span class="usedImg">
						<img :src="usedImg" width="100%">
					</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        usedImg: './static/used.png',
        orderList: [{
          orderImg: "./static/test.jpg",
          orderName: "主题蜡像馆",
          orderAddr: "兴工街",
          ticketKind: '单人票',
          ticketPrice: 39,
          ticketCount: 1,
          usedDate: '2017年9月31日'
        }, {
          orderImg: "./static/test.jpg",
          orderName: "主题蜡像馆",
          orderAddr: "兴工街",
          ticketKind: '单人票',
          ticketPrice: 39,
          ticketCount: 1,
          usedDate: '2017年9月31日'
        }, {
          orderImg: "./static/test.jpg",
          orderName: "主题蜡像馆",
          orderAddr: "兴工街",
          ticketKind: '单人票',
          ticketPrice: 39,
          ticketCount: 1,
          usedDate: '2017年9月31日'
        }, {
          orderImg: "./static/test.jpg",
          orderName: "主题蜡像馆",
          orderAddr: "兴工街",
          ticketKind: '单人票',
          ticketPrice: 39,
          ticketCount: 1,
          usedDate: '2017年9月31日'
        }, {
          orderImg: "./static/test.jpg",
          orderName: "主题蜡像馆",
          orderAddr: "兴工街",
          ticketKind: '单人票',
          ticketPrice: 39,
          ticketCount: 1,
          usedDate: '2017年9月31日'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul li {
    list-style: none;
    background-color: #fff;
    width: 100%;
    border-top:  1px solid #ccc;
    float: left;
    height: 95px;
    padding: 6px 6px 0 6px
  }

  .shopImg {
    width: 85px;
    float: left;
  }

  .usedImg {
    position: absolute;
    width: 90px;
    top: 0;
    right: 6px;
  }

  .shopDetail {
    float: left;
    position: absolute;
    padding-top: 0;
    left: 100px;
    right: 0;
    .shopName {
      display: block;
      float: none;
      font-family: '微软雅黑';
      font-size: 20px;
      margin-bottom: 3px;
    }
    .shopAddress {
      display: block;
      font-family: '微软雅黑';
      color: #ccc;
    }
    .ticketPrice {
      display: block;
      font-family: '微软雅黑';
      color: #ccc;
    }
    .lastTime {

      display: inline-block;
      font-family: '微软雅黑';
      color: #008dff;
      margin-top: 7px;
    }
  }

</style>
