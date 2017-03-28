<template>
<transition name='fade-in-out'>
	<div class="register_container">
		<div class="register_box">

				<div class="register_heard">账号注册</div>
				<div class="register_name">
					<input id='reg_username' type="text" placeholder="用户名" v-model="name" @blur="validata(name)" @focus="notic(name)" :class="[{'redborder':noticecolor==='red'},{'greenborder':noticecolor==='green'}]">
				</div>
        <div class="notice_box" :class="[noticecolor==='red'?'red':'green']" v-show="notice">{{notice}}</div>
				<div class="register_password">
					<input type="password" placeholder="密码" v-model="password" @blur="mimavalidata(password)" @focus="mimanotic(password)" :class="[{'redborder':passwordnoticecolor==='red'},{'greenborder':passwordnoticecolor==='green'}]">
				</div>
        <div class="notice_box" v-show="passwordnotice" :class="[passwordnoticecolor==='red'?'red':'green']">{{passwordnotice}}</div>
				<div class="register_password">
					<input type="password" placeholder="重复密码" v-model="repassword" @blur="remimavalidata(repassword)" @focus="remimanotic(repassword)" :class="[{'redborder':repasswordnoticecolor==='red'},{'greenborder':repasswordnoticecolor==='green'}]">
				</div>
        <div class="notice_box" v-show="repasswordnotice" :class="[repasswordnoticecolor==='red'?'red':'green']">{{repasswordnotice}}</div>
				<button id="register_btn" type="button" @click="validataall()">登录</button>

	    </div>
	</div>
</transition>
</template>
<script type="text/javascript">
	export default{
	  name:'Register',
	  data(){
	    return{
	      name:'',
        password:'',
        repassword:'',
        notice:'',
        noticecolor:'',
        passwordnotice:'',
        passwordnoticecolor:'',
        repasswordnoticecolor:'',
        repasswordnotice:''
      }
    },
    methods:{
	    strlen(val){
        let len=0;
        for(let i=0;i<val.length;i++){
          let c=val.charCodeAt(i)
          if((c>=0x0001 && c<=0x007e) || (0xff60<=c && c<=0xff9f)){
            len++
          }else{
            len+=2
          }
        }
        return len
      },
	    validata(name){
	      if(this.strlen(name)>16 || this.strlen(name)<4){
	        this.noticecolor='red'
	        this.notice='字符数需要在4-16个之间'
          return false
        }else{
	        this.noticecolor='green'
	        this.notice='格式正确'
          return true
        }
      },
      notic(name){
	      if(!name.trim()){
	        this.noticecolor='red'
	        this.notice='请输入4-16个字符数'
        }
      },
      mimavalidata(password){
        if(this.strlen(password)>16 || this.strlen(password)<6){
          this.passwordnoticecolor='red'
          this.passwordnotice='密码位数需要在4-16个字符数'
          return false
        }else{
          this.passwordnoticecolor='green'
          this.passwordnotice='密码格式正确'
          return true
        }
      },
      mimanotic(password){
        if(!password.trim()){
          this.passwordnoticecolor='red'
          this.passwordnotice='请输入4-16位密码'
        }
      },
      remimavalidata(repassword){
        if(this.password===this.repassword && this.strlen(repassword)<=16 && this.strlen(repassword)>=6){
          this.repasswordnoticecolor='green'
          this.repasswordnotice='密码相同'
          return true
        }else if(this.password!==this.repassword){
          this.repasswordnoticecolor='red'
          this.repasswordnotice='请输入与第一次密码相同的密码'
          return false
        }else{
          this.repasswordnoticecolor='red'
          this.repasswordnotice='密码长度不匹配'
          return false
        }
      },
      remimanotic(repassword){
        if(!repassword.trim()){
          this.repasswordnoticecolor='red'
          this.repasswordnotice='再次输入相同的密码'
        }
      },
      validataall(){
        if(this.validata(this.name) && this.mimavalidata(this.password) && this.remimavalidata(this.repassword)){
          alert('ok')
        }else{
          alert('no')
        }
      }
    },
  }
</script>
<style>
	.register_container{
		margin: 200px auto;
		box-shadow: 0 2px 5px 0 rgba(0,0,0,0.2);
	}
	.register_box{
		border:1px solid #e8e8e8;
		padding-bottom: 20px;
		background: #fff;
	}
	.register_heard{
		font-size: 21px;
		color: #414952;
		padding: 20px 35px;
		border-bottom: 1px solid rgba(158,158,158,0.3);
		margin-bottom:35px;
	}
	.register_name, .register_password{
		margin: 0 35px 14px;
	}
	#reg_username{
		width: 360px;
		height: 56px;
		background: #edf1f5;
		border:1px solid #cad3de;
		border-radius: 5px;
		padding: 0 20px;
		font-size: 16px;
		color: #2d3238;
    outline: none;
	}
	.register_password input{
		width: 360px;
		height: 56px;
		background: #edf1f5;
		border:1px solid #cad3de;
		border-radius: 5px;
		padding: 0 20px;
		font-size: 16px;
		color: #2d3238;
    outline: none;
	}
	#register_btn{
		width: 402px;
		height: 56px;
		background: skyblue;
		border-radius: 5px;
		font-size: 18px;
		color: #fff;
		border:none;
		cursor: pointer;
	}
  .notice_box{
    margin:0 0 14px 0;
    padding:1px;
  }
  .red{
    color: darkred;
  }
  .green{
    color: green;
  }
  #reg_username.redborder{
    border:2px solid red;
  }
  #reg_username.greenborder{
    border: 2px solid green;
  }
  .register_password .redborder{
    border:2px solid red;
  }
  .register_password .greenborder {
    border:2px solid green;
  }
  .fade-in-out-enter{
		opacity: 0;
	}
	.fade-in-out-enter-active{
        transition:opacity 1s ease;
    }
</style>
