<template>
	<transition name='fade-in-out'>
		<div class="main">
		  <div class="main-container">
		    <router-view></router-view>
		    <router-view name='siderbar'></router-view>
		    <router-view name='mainbody'></router-view>
		  </div>
		</div>
	</transition>
</template>
<script>

	export default{
		name:'MainPage',
	}
</script>
<style scoped>
	.main{
		margin-top: 5em;
		display: flex;
	}
	.main-container{
        width: 980px;
        display: flex;
        margin:0 auto;
        position: relative;
        margin-top: 1.5em;
	}
	.fade-in-out-enter{		
		opacity: 0;		
	}
	.fade-in-out-enter-active{
        transition:opacity 1s ease;
    }
</style>