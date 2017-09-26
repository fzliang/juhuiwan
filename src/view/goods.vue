<template>
	<div>
		<div id="goods">
			<i class="el-icon-arrow-left" id="back" @click="$router.go(-1)"></i>
			<div id="goodsImg">
				<img :src="shopInfo.shopPic" width="100%">

			</div>
			<div id="shop">
				<div id="shopInfo">
					<span id="shopName">{{shopInfo.shopName}}</span>
					<span id="shopAddr">{{shopInfo.shopAddress}}</span>
				</div>
				<el-button id="enterShop" type="primary">进店看看</el-button>
			</div>

			<div id="ticketList">
        <el-button class="ticket" type="info" v-for="ticket in ticketKinds" @click="clickTicket(ticket.ticketKindId)" :plain="true" >{{ticket.ticketKindName}} ：￥{{ticket.ticketKindPrice}}</el-button>

				<el-button id="buy" type="warning" @click="buy" :disabled="disabledBuy">{{buyMessage}}</el-button>
			</div>

			<div id="detail">
				<div class="ticketDetail" v-for="ticket in ticketKinds">
					<span class="name">{{ticket.ticketKindName}}：</span>
					<span class="ticket_detail">{{ticket.ticketKindInfo}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
      disabledBuy: true,
      shopInfo: {},
      shopId: 0,
      ticketKinds: [],
      tickedId: null,
      buyMessage: '请先选择票'
		}
	},

  created() {
    this.shopId = this.$route.query.shopId;
    this.$http.get('/shop_detail/', {
        params:{
          shopId: this.shopId
        }
      })
      .then(response => {
        this.shopInfo = response.data.shopInfo[0];
        this.ticketKinds = response.data.ticketTypes;
      })
      .catch(error => console.log(error))
  },

	methods: {
		buy() {
      this.$router.push({
        path: 'orderPay',
        query: {
          ticketKindId: this.tickedId,
          shopName: this.shopInfo.shopName,
          shopAvatar: this.shopInfo.shopAvatar,
          shopAddress: this.shopInfo.shopAddress
        }
      })
		},
    clickTicket(ticketKindId) {
      this.tickedId = ticketKindId;
      this.disabledBuy = false;
      this.buyMessage = '优惠购票';
    }
	}
}
</script>


<style lang="scss">
#goods {
	background-color: #fff;
	#back {
		position: absolute;
		margin: 12px;
		font-size: 24px;
		color: #fff;
	}

	#shop {
		padding: 12px;
		border-bottom: 1px solid #ccc;
		#shopInfo {
			display: inline-block;
			#shopName {
				display: block;
				font-size: 24px;
				color: #333;
			}
			#shopAddr {
				padding-top: 9px;
				font-size: 12px;
				display: block;
				color: #999;
			}
		}
		#enterShop {
			display: inline-block;
			float: right;
		}
	}

	#ticketList {
		padding: 12px;
		border-bottom: 1px solid #ccc;
		.ticket {
			margin: 0 4px 1px 0;
		}
		#buy {
			display: block;
			margin: 16px auto 0 auto;
		}
	}

	#detail {
		padding: 12px;
		border-bottom: 1px solid #ccc;
		.ticketDetail {
			line-height: 22px;
			padding-bottom: 8px;
			.name {
				display: block;
				font-size: 16px;
				color: #333;
			}
			.ticket_detail {
        display: inline-block;
				padding-left: 32px;
				font-size: 13px;
				color: #666;
			}
		}
	}
}
</style>

