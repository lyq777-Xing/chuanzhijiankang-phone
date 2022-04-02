import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/login.vue'
import Login_phone from '../views/Login/Login-phone.vue'
import index from '../views/Index/index.vue'
import SetMeal from '../views/setmeal/setmeal.vue'
import SetMeal_Detail from '../views/setmeal/setmeal_detail.vue'
import OrderInfo from '../views/order/orderInfo.vue'
import OrderSuccess from '../views/order/orderSuccess.vue'
import Member from '../views/Member/member.vue'
import OrderNodice from '../views/order/orderNodice.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login_phone'
    },
    {
        path: '/login',
        component: Login
    }, {
        path: '/login_phone',
        component: Login_phone
    }, {
        path: '/index',
        component: index
    }, {
        path: '/setmeal',
        component: SetMeal
    }, {
        path: '/setmeal_detail',
        component: SetMeal_Detail
    }, {
        path: '/orderInfo',
        component: OrderInfo
    }, {
        path: '/ordersuccess',
        component: OrderSuccess
    }, {
        path: '/member',
        component: Member
    }, {
        path: '/ordernodice',
        component: OrderNodice
    }
]

const router = new VueRouter({
    routes
})

export default router