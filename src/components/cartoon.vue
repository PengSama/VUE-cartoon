<template>
	<div class="cartoon-box">
		<div class="fixed-box">
			<ul>
			   <li v-for="image in imageList">
			     <div class="img-box">
				     <img :src='image.imageUrl'>
			     </div>
			     <span class="pageOfpages">{{image.id}} / {{imageList.length}}</span>
			   </li>
	        </ul>
	    </div>
        <div class="choose-box">
        	<button><router-link :to="'/'+params">返回目录</router-link></button>
        </div>	
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Cartoon',
		data(){
			const params=this.$route.params.id;
			const index=this.$route.params.index;
			return{
				imageList:[],
				index:index,
				params:params
			}
		},
		computed:{
			imageList(){
				return this.$store.state.chapterContent
			}
		},
		beforeMount(){
			this.$store.dispatch('FECTH_CHAPTERCONTENT',{name:this.params,index:this.index})
		},
		watch:{
			'$route'(to,from){
                this.$store.dispatch('FECTH_CHAPTERCONTENT',{name:this.params,index:to})			
			}
		}
	}
</script>

<style type="text/css">
    .cartoon-box{
    	width: 100%;
    	height: 882px;
    	background: #ccc;
    	border: 1px solid #e1e1e1;
    	border-radius: 4px;
    	box-shadow: 5px 5px 5px rgba(16,16,16,.15);
    }
    .fixed-box{
    	width: 98%;
    	height: 840px;
    	background: #fff;
    	margin: 0 auto;
    	margin-top: 10px;
    	overflow-y: scroll;
    	overflow-x:hidden;
    	border: 2px solid #374e5f;
    }
    .img-box{
    	border: 1px solid #000;
    }
    .img-box img{
    	width:100%;
    }
    .pageOfpages{
    	display: block;
    	width: 100%;
    	background-color: #f58a8a;
    }
    .choose-box{
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    	height: 30px;
    }
</style>