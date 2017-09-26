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
        font-size: 16px;
        line-height: 24px;
        border-bottom: 1px solid #ccc;
      }
      .orderCode {
        display: block;
        text-align: center;
        color: #666;
        font-size: 32px;
        line-height: 84px;
      }

      .top3 {
        margin-top: 32px;

      }
      #order {
        height: 100%;
        background-color: #fff;
      }

      #orderInfo {
        width: 100%;
        border-top: 2px solid #ccc;
        background-color: #fff;
        overflow: hidden;
        float: left;
        padding: 12px;
      }

      .shopimg {
        width: 80px;
        float: left;
      }

      .shopDetail {
        float: left;
        padding-top: 2px;
        padding-left: 8px;
        overflow: hidden;
        .shopName {
          display: block;
          float: none;
          font-family: '微软雅黑';
          font-size: 20px;
          margin-bottom: 8px;
        }
        .shopAddress {
          display: block;
          float: none;
          color: #ccc;
          font-size: 12px;
        }

        .ticket {
          display: block;
          margin-top: 5px;
          font-size: 12px;
          color: #666;
        }

        .ticketInfo {
          display: block;
          margin-top: 5px;
          font-size: 12px;
          color: #008dff;
          line-height: 15px;
        }
      }

      .orderContent {
        clear: both;
        .detail {
          display: block;
          font-size: 20px;
          padding: 8px 16px 8px 16px;
          border-top: 1px solid #ddd;
        }
        .orderTable {
          width: 100%;
          max-width: 100%;
          background-color: white;
          font-size: 15px;
          color: #666;

          th, td {
            border: 1px solid #ddd;
            vertical-align: middle;
            text-align: center;
            padding: 8px;
          }

          .left {
            width: 60px;
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
