import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Order from '@/view/order'
import Person from '@/view/person'
import Layout from '@/view/Layout/Layout'
import Goods from '@/view/goods'
import OrderLayout from '@/view/Layout/OrderLayout'
import OrderPay from '@/view/orderPay'
import OrderDetail from '@/view/Order/OrderDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Layout,
      children: [
       { path:'', component: Index},
      ]
    },
    {
      path: '/order',
      name: '订单',
      component: Layout,
      children: [
        { path:'', component: Order}
       ]
    },
    {
      path: '/person',
      name: '我的',
      component: Layout,
      children: [
        { path:'', component: Person }
       ]
    },
    {
      path: '/goods',
      name: '商品',
      component: Goods
    },
    {
      path: '/orderPay',
      component: OrderLayout,
      children: [
        { path: '', component: OrderPay }
      ]
    },
    {
      path: '/orderDetail',
      component: OrderLayout,
      children: [
        { path: '', component: OrderDetail }
      ]
    }
  ]
})
