<template>
	<header class="peng-header">
		<div class="header-container">
			<img src="../assets/logo.png" @click="firstpage">
			<div class="header-container-right">
				<div class="header-container-action" :class="{
				    'is-active':active==='search'
				}">
				  <span class="icon-search" @click="search">搜索漫画</span>
				</div>
				<div class="header-container-action" :class="{
				    'is-active':active==='chating'
				}">
				  <span class="icon-chating" @click="chating">聊天室</span>
				</div>
				<div class="header-container-action" :class="{
				}">
				  <span @mouseover="imgenter" @mouseleave="imgout">想跟我交流一下?</span>
				  <transition name='fade-out-in'>
					  <div class="connect-me" v-show="ishover"><img src="../assets/pengsama.png" width="150px;"></div>
				  </transition>
				</div>
				<div class="login">
					<div class="login-img" v-if="login">
					  <img src="">
					</div>
					<div v-else>
						<span @click="tologin">登录</span>
						<span @click="register">注册</span>
					</div>
					<ul v-if="login&&openmenu" class="menu">
						<li>我的收藏</li>
						<li>漫画上传</li>
						<li>退出</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
	  name: 'Header',
	  data(){
	  	return{
	  		active:'',
	  		login:false,
	  		openmenu:false,
	  		ishover:false
	  	}
	  },
	  methods:{
	  	firstpage(){
	  		this.active='';
	  		this.$router.push('/')
	  	},
	  	search(){
	  		this.active='search';
	  		this.$router.push('/search')
	  	},
	  	chating(){
	  		this.active='chating';
	  		this.$router.push('/chating')
	  	},
	  	tologin(){
	  		this.$router.push('/login')
	  	},
	  	register(){
	  		this.$router.push('/register')
	  	},
	  	imgenter(){
	  		this.ishover=true;
	  	},
	  	imgout(){
	  		this.ishover=false;
	  	}
	  }
	}
</script>
<style scoped>
	.peng-header{
	    background-color:#fff;
	    border-bottom: 1px solid #f1f1f1;
	    box-sizing: border-box;
	    height: 5em;
	    width: 100%;
	    position: fixed;
	    left: 0;
	    top: 0;
	    box-shadow: 0 4px 8px 0 rgba(16,16,32,0.25);
	    z-index: 1;
	}
	.peng-header:before,.peng-header:after{
		display: table;
		content: '';
	}
	.peng-header:after{
		clear: both;
	}
	.header-container{
		display: flex;
		align-items: center;
		height: 100%;
		box-sizing: border-box;
		width: 980px;
		position: relative;
		margin: 0 auto;
		padding: 0 0.3em;
		justify-content: flex-end;
	}
	.header-container>img{
		position: absolute;
		left: 0;
		background-color:#fafafa;
		cursor: pointer;
		height: 68px; 
	}
    .header-container-right{
		display: flex;
		position: relative;
		height: 100%;
		align-items: center;
	}
	.header-container-action{
		display: flex;
		justify-content: center;
		position: relative;
		height: 100%;
		padding: 0 1.1em;
		white-space: nowrap;
		user-select:none;
	}	
	.header-container-action span{
		display: flex;
		height: 100%;
		color: #c0c6cc;
		align-items: center;
		font-weight: bold;
	}
	.header-container-action span:hover{
		color: #20a0ff;
		cursor: pointer;
		border-bottom: 2px solid #20a0ff;
	}
	.header-container-action.is-active span{
		color: #20a0ff;
		border-color: 2px solid #20a0ff;
	}
	.login span{
		cursor: pointer;
		color: #20a0ff;
		padding-left: 0 0.3em;
		white-space: nowrap;
		user-select:none;
	}
	.login span:hover{
		color: #11bae2;
	}
	.login .menu{
		position:absolute;
		width: 11em;
		margin-top: 4px;
		padding: 0;
		top: 100%;
		right: 0;
		background-color: #fafafa;
		border: 1px solid hsla(217,5%,71%,.45);
		padding: 10px 0 ;
		text-align: left;
		box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
		border-radius:4px; 
	}
	.login .menu li{
		display: block;
		font-size: 1.1em;
		line-height: 2;
		color: #909090;
		padding-left: 20px;
		white-space: nowrap;
		user-select:none;
	}
	.login .menu li:hover{
		background-color: #f1f1f1;
		cursor: pointer;
	}
	.connect-me{
		position: absolute;
		top: 72px;
		border: 1px solid #ebebeb;
		border-top: none;
		line-height: 0;
	}
	.fade-out-in-enter,.fade-out-in-leave-active{		
		opacity: 0;		
	}
	.fade-out-in-enter-active,.fade-out-in-leave-active{
        transition:opacity 1s ease;
	}
</style>