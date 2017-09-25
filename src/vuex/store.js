import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state =  {
	footMenu : -1,
	headTitle: {
		title: '巨惠玩',
		subTitle: '学生专属优惠',
		headBack: false
	}
}

const mutations = {
	changeMenu(state, n) {
		state.footMenu = n
	},
	changeTitle(state, head) {
		state.headTitle = head
	}
}

export default new Vuex.Store({
	state,
	mutations,
})