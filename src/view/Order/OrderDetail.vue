<template>
  <div>
    <div id="order">
      <div id="orderInfo">
				<span class="shopimg">
					<img :src="orderInfo.shopImg" width="100%">
				</span>
        <div class="shopDetail">
          <span class="shopName">{{orderInfo.shopName}}</span>
          <span class="shopAddress">[{{orderInfo.shopAddress}}]</span>
          <span class="ticket">[{{orderInfo.ticketKind}}: ￥{{orderInfo.ticketPrice}}]</span>
          <span class="ticketInfo">{{orderInfo.ticketInfo}}</span>
        </div>
      </div>

      <div class="orderCode" v-show="!used">
          <span class="orderCodeTitle">电子凭证</span>
          <span class="orderCode">984750</span>
      </div>

      <div class="orderContent">
        <div class="detail">详情</div>
        <table class="orderTable">
          <thead>
          <tr>
            <th>门票</th>
            <th>单价</th>
            <th>数量</th>
            <th>合计</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{orderInfo.ticketKind}}</td>
            <td>{{orderInfo.ticketPrice}}</td>
            <td>{{orderInfo.ticketCount}}</td>
            <td>{{orderInfo.totalPrice}}</td>
          </tr>
          </tbody>
        </table>
        <div class="orderDetail top3">
          <table class="orderTable">
            <tbody>
            <tr>
              <td class="left">订单号</td>
              <td>{{orderInfo.orderId}}</td>
            </tr>
            <tr>
              <td class="left">总价</td>
              <td>{{orderInfo.totalPrice}}</td>
            </tr>

            <tr>
              <td class="left">实付</td>
              <td>{{orderInfo.realPay}}</td>
            </tr>
            <tr>
              <td class="left">购买日期</td>
              <td>{{orderInfo.buyDate}}</td>
            </tr>
            <tr>
              <td class="left">有效期至</td>
              <td>{{orderInfo.endDate}}</td>
            </tr>
            <tr>
              <td class="left">有效期至</td>
              <td>{{orderInfo.endDate}}</td>
            </tr>
            <tr>
              <td class="left">使用状态</td>
              <td class="use" :class="{active: used}">{{orderInfo.status}}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        orderInfo: {
          shopImg: './static/test.jpg',
          shopName: '主题蜡像馆',
          shopAddress: '兴工街',
          ticketKind: '单人票',
          ticketPrice: 78,
          ticketInfo: '仅供门票1张，仅供单人使用。',
          ticketCount: 1,
          totalPrice: 78,
          orderId: '201709072158001',
          realPay: 39,
          buyDate: '2017-09-07 21:58:21',
          endDate: '2017-09-08',
          status:'未使用'
        }
      }
    },

    computed: {
      used: function() {
        console.log(this.orderInfo.status)
        return this.orderInfo.status == '已使用';
      }
    }
  }
</script>


<style lang="scss" scoped>
    #order {
      background-color: #fff;


      .orderCodeTitle {
        clear: both;
        display: block;
        text-align: center;
        color: #666;
        font-size: 1rem;
        line-height: 1.5rem;
        border-bottom: 1px solid #ccc;
      }
      .orderCode {
        display: block;
        text-align: center;
        color: #666;
        font-size: 2rem;
        line-height: 4rem;
      }

      .top3 {
        margin-top: 2rem;

      }
      #order {
        height: 100%;
        background-color: #fff;
      }

      #orderInfo {
        width: 100%;
        border-top: 0.1rem solid #ccc;
        background-color: #fff;
        overflow: hidden;
        float: left;
        padding: 0.75rem;
      }

      .shopimg {
        width: 5rem;
        float: left;
      }

      .shopDetail {
        float: left;
        padding-top: 0.3rem;
        padding-left: 0.5rem;
        overflow: hidden;
        .shopName {
          display: block;
          float: none;
          font-family: '微软雅黑';
          font-size: 1.25rem;
          margin-bottom: 0.4rem;
        }
        .shopAddress {
          display: block;
          float: none;
          color: #ccc;
          font-size: 0.8rem;
          margin-top: 0.3rem;
        }

        .ticket {
          display: block;
          margin-top: 0.3rem;
          font-size: 0.8rem;
          color: #666;
        }

        .ticketInfo {
          display: block;
          margin-top: 0.3rem;
          font-size: 0.8rem;
          color: #008dff;
        }
      }

      .orderContent {
        clear: both;
        .detail {
          display: block;
          font-size: 1.5rem;
          padding: 0.5rem 1rem 0.5rem 1rem;
          border-top: 1px solid #ddd;
        }
        .orderTable {
          width: 100%;
          max-width: 100%;
          background-color: white;
          font-size: 0.9rem;
          color: #666;

          th, td {
            border: 1px solid #ddd;
            vertical-align: middle;
            text-align: center;
            padding: 0.5rem;
          }

          .left {
            width: 6rem;
            text-align: right;
          }
        }

        .use {
          color: #008dff;
        }

        .active {
          color: #fc0;
        }
      }
    }
</style>
