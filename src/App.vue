<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'APP'
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: transform .1s ease;
	transform: translate(0, 0)
}

.fade-enter,
.fade-leave-to {
	transition: transform .1s ease;
	transform: translate(-100%, 0)
}
</style>
