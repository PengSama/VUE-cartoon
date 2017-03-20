import Vue from 'vue'
import VueRouter from 'vue-router'
import HeaderNav from './components/header'
import Login from './components/login'
import Register from './components/register'
import Search from './components/search'
import Chat from './components/chat'
import MainPage from './views/mainpage'
import SiderBar from './components/siderbar'
import MainBody from './components/mainbody'
import ShowCartoon from './components/show-cartoon'
import Cartoon from './components/cartoon'

Vue.use(VueRouter)

const routes=[{
	path:'/',
	redirect:'/home'
},{
	path:'/home',
	components:{
		siderbar:SiderBar,
		mainbody:MainBody
	}
},{
	path:'/login',
	component:Login
},{
	path:'/register',
	component:Register
},{
	path:'/search',
	component:Search
},{
	path:'/chating',
	component:Chat
},{
	path:'/:id',
	component:ShowCartoon
	// children:[
	// {
	// 	path:':post',
	// 	component:MainPage
	// }]
},{
	path:'/:id/:index(\\d+)',
	component:Cartoon
}]

const router=new VueRouter({
	mode:'history',
	routes
})
export default router