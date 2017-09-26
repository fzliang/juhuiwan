<template>
	<div>
		<ul>
			<li v-for="order in orderList" @click="$router.push('/orderDetail')">
				<span class="orderimg">
					<img :src="order.orderimg" width="100%">
				</span>
				<div class="shopDetail">
					<span class="shopName">{{order.orderName}}</span>
          <span class="shopAddress">[{{order.orderAddr}}]</span>
					<span class="ticketPrice">[{{order.ticketKind}}： ￥{{order.ticketPrice}}] x {{order.ticketCount}}</span>
					<span class="lasttime">有效期至： {{order.lastTime}}</span>
          			<el-button class="pay" type="primary">去使用</el-button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			orderList: [{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
			},{
				orderimg: './static/test.jpg',
				orderName: '主题蜡像馆',
				orderAddr: '兴工街',
				ticketKind: '单人票',
				ticketPrice: '39',
				ticketCount: 1,
				lastTime: '2017年9月31日'
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
	border-top: 1px solid #ccc;
	float: left;
	height: 95px;
	padding: 6px 6px 0 6px
}

.orderimg {
	width: 85px;
	float: left;
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
	.ticketPrice{
		display: block;
		font-family: '微软雅黑';
		color: #ccc;
  }
	.lasttime {
		display: inline-block;
		font-family: '微软雅黑';
		color: #008dff;
		margin-top: 7px;
	}
  .pay {
    float: right;
	  position: absolute;
    right: 12px;
	  top: 20px;
  }
}

</style>
