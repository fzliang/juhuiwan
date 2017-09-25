<template>
	<div id="app-header">
		<i class="el-icon-arrow-left" id="back" @click="$router.go(-1)" v-show="headBack"></i>
		<div id="app-header-title">{{ headTitle }}</div>
		<div id="app-header-sub">{{ headSubTitle }}</div>
		<p>{{footMenu}}</p>
	</div>
</template>

<script>
import store from '@/vuex/store'

export default {
	computed: {
		headTitle: ()=> store.state.headTitle.title,
		headSubTitle: ()=> store.state.headTitle.subTitle,
		headBack: ()=>store.state.headTitle.headBack
	}

}
</script>

<style lang="scss">
#app-header {
	position: fixed;
	top: 0;
	height: 3rem;
	background: #008dff;
	width: 100%;
	z-index: 9999;
	line-height: 3rem;
	font-size: 2rem;
  padding-left: 0.52rem;

	#back {
		font-size: 1.6rem;
		color: #fff;
	}
	#app-header-title {
		display: inline-block;
		font-size: 1.6rem;
		color: #fff;
		font-family: '微软雅黑';
	}
	#app-header-sub {
		display: inline-block;
		color: #fff;
		font-size: 1rem;
		font-family: '微软雅黑';
	}
}
</style>
