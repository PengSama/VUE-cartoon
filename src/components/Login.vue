<template>
<transition name='fade-in-out'>
	<div class="login_container">
		<div class="login_box">
			<form>
				<div class="login_heard">账号登录</div>
				<div class="login_name">
					<input id='username' type="text" placeholder="用户名">
				</div>
				<div class="login_password">
					<input id='password' type="password" placeholder="密码">
				</div>
				<button id="login_btn" type="button">登录</button>
			</form>
	    </div>
	</div>
</transition>
</template>
<script type="text/javascript">
	export default{}
</script>
<style>
	.login_container{
		margin: 200px auto;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);

	}
	.login_box{
		border:1px solid #e8e8e8;
		padding-bottom: 20px;
		background: #fff;
	}
	.login_heard{
		font-size: 21px;
		color: #414952;
		padding: 20px 35px;
		border-bottom: 1px solid rgba(158,158,158,0.3);
		margin-bottom:35px; 
	}
	.login_name, .login_password{
		margin: 0 35px 14px;
	}
	#username{
		width: 360px;
		height: 56px;
		background: #edf1f5;
		border:1px solid #cad3de;
		border-radius: 5px;
		padding: 0 20px;
		font-size: 16px;
		color: #2d3238;
	}
	#password{
		width: 360px;
		height: 56px;
		background: #edf1f5;
		border:1px solid #cad3de;
		border-radius: 5px;
		padding: 0 20px;
		font-size: 16px;
		color: #2d3238;
	}
	#login_btn{
		width: 402px;
		height: 56px;
		background: skyblue;
		border-radius: 5px;
		font-size: 18px;
		color: #fff;
		border:none;
		cursor: pointer;

	}
	.fade-in-out-enter{		
		opacity: 0;		
	}
	.fade-in-out-enter-active{
        transition:opacity 1s ease;
    }
</style>