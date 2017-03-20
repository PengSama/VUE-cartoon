<template>
	<transition name='fade-in-out'>
		<div class="siderbar-container">
			<div class="siderbar">
				<h3 class="siderbar-title">{{title}}</h3>
				<div class="siderbar-content">
					<ul>
						<li v-for="item in items">
						   <router-link :to="'/'+item">{{item}}</router-link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default{
		name:'SiderBar',
		data(){
			return{
				title:'热门动漫',
				items:['火影忍者','航海王','死神','寄生兽','进击的巨人','名侦探柯南','秦时明月']
			};
		}
	}
</script>
<style scoped>
    .siderbar-container{
    	width: 138px;
    	height: 100%;	
    }
	.siderbar{
		position: fixed;
		background-color: #d8e8e6;
		box-sizing: border-box;
		box-shadow: 5px 5px 5px rgba(16,16,16,.15);
		text-align: left;
		border-radius: 2px;
	}
	.siderbar-title{
		text-align: center;
		padding: 3px 0;
		border-bottom: 2px solid #ebebeb;
		user-select:none;
		white-space: nowrap;
	}
	
	.siderbar-content li{		
		border-bottom: 1px solid #ebebeb;
		user-select:none;
		white-space: nowrap;
	}
	.siderbar-content li:hover{
		background-color: #ebebeb;
		cursor: pointer;		
	}
	.siderbar-content li a{
		display: block;
		padding: 10px;
		color: #20a0ff;
	}
</style>