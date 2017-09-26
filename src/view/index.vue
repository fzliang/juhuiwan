<template>
	<div>
		<div id="carousel">
		</div>
		<ul id="shopList">
			<li v-for="shop in shopList" @click="$router.push({path:'goods', query:{ shopId: shop.shopId}})">
				<span class="shopimg">
					<img :src="shop.shopAvatar" width="100%">
				</span>
				<div class="shopDetail">
					<span class="shopName">{{shop.shopName}}</span>
					<span class="shopAddress">[{{shop.shopAddress}}]</span>
					<span class="price">￥{{shop.price}}</span>
					<span class="shopPrice">门市价 ￥{{shop.shopPrice}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
  import axios from "axios";
  export default {
	  data() {
		  return {
			  pics: [],
        shopList: []
		  }
	  },

	  created() {
      this.$http.get('/index/',{})
        .then(response => {
          this.shopList = response.data.shopList;
          this.pics = response.data.pics;
        })
        .catch(error => console.log(error))
    }
}
</script>

<style lang="scss" scoped>
ul li {
	list-style: none;
	width: 100%;
	border-top: 1px solid #ccc;
	background-color: #fff;
	overflow: hidden;
	float: left;
	padding: 5px;
}

.shopimg {
	width: 90px;
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
		margin-top: 9px;
		margin-bottom: 9px;
	}
	.price {
		font-size: 32px;
		color: red;
	}
	.shopPrice {
		color: #ccc;
		margin-left: 32px;
	}
}
</style>
