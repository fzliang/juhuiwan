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
    border-top: 0.1rem solid #ccc;
    float: left;
    height: 6rem;
    padding: 0.75rem;
    padding-bottom: 0rem;
  }

  .shopImg {
    width: 5.2rem;
    float: left;
  }

  .usedImg {
    position: absolute;
    width: 5.3rem;
    top: 0rem;
    right: 0.75rem;
  }

  .shopDetail {
    position: absolute;
    padding-top: 0.3rem;
    left: 6.4rem;
    right: 0rem;
    .shopName {
      display: block;
      float: none;
      font-family: '微软雅黑';
      font-size: 1.25rem;
      margin-bottom: 0.4rem;
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
      margin-top: 0.4rem;
    }
  }

</style>
