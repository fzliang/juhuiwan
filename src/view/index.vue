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
      this.$http.get('http://47.95.10.5:8888/index/',{})
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
	border-top: 0.1rem solid #ccc;
	background-color: #fff;
	overflow: hidden;
	float: left;
	padding-top: 0.75rem;
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	padding-bottom: 0.5rem;
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
		margin-top: 0.3rem;
		margin-bottom: 0.6rem;
	}
	.price {
		font-size: 2rem;
		color: red;
	}
	.shopPrice {
		color: #ccc;
		margin-left: 2rem;
	}
}
</style>
