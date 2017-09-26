<template>
  <div>
    <div id="order">
      <div id="orderInfo">
				<span class="shopimg">
					<img :src="shopAvatar" width="100%">
				</span>
        <div class="shopDetail">
          <span class="shopName">{{shopName}}</span>
          <span class="shopAddress">[{{shopAddress}}]</span>
          <span class="ticket">[{{ticketKindName}}: ￥{{ticketPrice}}]</span>
          <span class="ticketInfo">{{ticketInfo}}</span>
        </div>
      </div>

      <div class="orderContent">
        <table class="orderTable">
          <thead>
          <tr>
            <th>门票</th>
            <th>单价</th>
            <th>数量</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{{ticketKindName}}</td>
            <td>{{ticketPrice}}</td>
            <td>
              <el-input-number v-model="count" @change="handleChange" :min="1" :max="100"
                               size="small"></el-input-number>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="orderFooter">
        <span class="count">合计： {{total}}</span>
        <span class="commit"><el-button type="warning" @click="pay">确认付款</el-button></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        shopAvatar: '',
        shopName: '',
        shopAddress: '',
        ticketKindName: '',
        ticketPrice: 0,
        ticketInfo: '',
        tableData: [{
          ticketKindName: '',
          ticketPrice: '',
          ticketCount: 1
        }],
        count: 1,
        ticketKindId: null
      }
    },

    created() {
      this.ticketKindId = this.$route.query.ticketKindId;
      this.shopAvatar = this.$route.query.shopAvatar;
      this.shopAddress = this.$route.query.shopAddress;
      this.shopName = this.$route.query.shopName;

      this.$http.get('http://47.95.10.5:8888/ticket_kind_info', {
        params: {
          ticketKindId: this.$route.query.ticketKindId
        }
      }).then(response => {
        console.log(response.data);
        this.ticketKindName = response.data.ticketType[0].ticketKindName;
        this.ticketPrice = response.data.ticketType[0].ticketKindPrice;
        this.ticketInfo = response.data.ticketType[0].ticketKindInfo;
      }).catch(error => {
        console.log(error)
      })
    },

    mounted() {
      this.tableData[0].ticketKindName = this.ticketKindName;
      this.tableData[0].ticketPrice = this.ticketPrice;
    },

    computed:{
      total: function() {
        return (this.ticketPrice * this.count).toFixed(2);
      }
    },

    methods: {
      pay() {
        var params = {
          id: this.ticketKindId,
          wechatId: 'wechatId',
          count: this.count
        }
        this.$http.post('/order/', params)
          .then(response => {
          this.shopInfo = response.data.shopInfo[0];
          this.ticketKinds = response.data.ticketTypes;
        }).catch(error => console.log(error))
      }
    }
  }
</script>


<style lang="scss" scoped>
  #order {
    height: 100%;
    background-color: #fff;
  }

  #orderInfo {
    width: 100%;
    border-top: 1px solid #ccc;
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
    padding-top: 5px;
    padding-left: 8px;
    overflow: hidden;
    padding-right: 24px;
    .shopName {
      display: block;
      float: none;
      font-family: '微软雅黑';
      font-size: 20px;
      margin-bottom: 7px;
    }
    .shopAddress {
      display: block;
      float: none;
      color: #ccc;
      font-size: 12px;
      margin-top: 10px;
      margin-top: 8px;
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
      line-height:13px;
      color: #fc0;
    }
  }

  .orderContent {
    .orderTable {
      border: 1px solid #ddd;
      width: 100%;
      max-width: 100%;
      background-color: white;
      border-collapse: collapse;

      th, td {
        border: 1px solid #ddd;
        vertical-align: middle;
        text-align: center;
        padding: 8px;
      }
    }


  }
  .orderFooter {
    position: fixed;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #ccc;
    .count {
      padding: 16px;
    }
    .commit {
      position: absolute;
      right: 16px;
    }
  }
</style>
