<template>
<transition name="fade-in-out">
	<div class="mainbody">
      <div class="mainbody-select">
	      <ul class="select-box">
	      	<li v-for="item in items" :class="{active:selected===item}"><span @click="getCartoonByType(item)">{{item}}</span></li>
	      </ul>
      </div>
      <div class="content">
      	<div v-for="image in images" class="img-content">
	      	<router-link :to="'/'+image.name">
			    <img :src="image.coverImg" :alt="image.name">
	      	</router-link>
	      	<div class="image-detail">
	      	   <h3 :title="image.name">{{image.name}}</h3>
	      	   <p>{{image.area||'未知区域'}} {{image.type}}</p>
		    </div>	      	
      	</div>     	
      </div>
      <div class="loading" @click="getMore">加载更多...</div>		
	</div>
</transition>	
</template>
<script>	
export default{
		name:'MainBody',
		data(){
			return{
				items:[ "全部漫画",
				        "少年漫画",
					    "青年漫画",
						"少女漫画",
						"耽美漫画",
						"用户上传"
					  ],
			    images:[{coverImg:'../assets/loading.gif'}],
			    skip:0,
			    selected:'全部漫画'
			};
		},
		methods:{
			getMore(){
				this.skip+=20
				let skip=this.skip
				let type=this.$store.state.activeType
				this.$store.dispatch('FETCH_BOOKLIST',{type,skip})
			},
			getCartoonByType(type){
				this.selected=type
				if(this.$store.state.bookList[type].length>0){
					this.$store.dispatch('CHANGE_ACTIVETYPE',{type})
				}else{
					this.$store.dispatch('FETCH_BOOKLIST',{type})
				}                
			}
		},

		computed:{
			images(){
				return this.$store.state.bookList[this.$store.state.activeType]
			}
		},

		beforeMount(){
			this.selected=this.$store.state.activeType
			if(this.$store.state.bookList['全部漫画'].length>0){return}
			this.$store.dispatch('FETCH_BOOKLIST',{})
			
		},
	}
</script>
<style scoped>
	.mainbody{
		position: relative;
		width: 100%;
		background-color: #fff;
		border: 1px solid #e1e1e1;
		box-shadow: 5px 5px 5px rgba(16,16,16,.15);
	}
	.mainbody-select{
		display: flex;
		border-bottom: 1px solid #ebebeb;
		height: 2em;
		line-height: 2em;

	}
	.select-box li{
		display: inline-block;
		padding:0 6px;
		user-select:none;
		
	}
	.select-box li:hover{
		background-color: #ebebeb;
		cursor: pointer;
	}
	.select-box li span{
		display: block;
		color: #20a0ff;
	}
	.select-box .active{
		background-color: #ebebeb;
	}
	.content{
		display: flex;
		background-color: #ebebeb;
		margin-top: 5px;
		margin-right: -1px;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 3px;
	}
	.content .img-content{
		margin-bottom: 5px;
		padding: 3px;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: 1px 1px 1px rgba(16,16,16,.15);
	}
	.content .img-content:hover{
		border-color: #20a0ff;
		background-color:#20a0ff;
	}
	.content img{
		width: 200px;
		height: 250px;
		object-fit: cover;
	}
	.img-content img{
		font-size: 0;
	}
	.image-detail{
		
		background-color: #ce7979;
		margin-top: -3px;
		border: 1px solid #ebebeb;
		
	}
	.image-detail h3{
		width: 200px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.loading{
		height:40px;
		line-height: 40px;
		font-size:20px;
		cursor: pointer;
		background-color:#ebebeb;
		border-top:1px solid #ccc;   
	}
	.loading:hover{
		color: #20a0ff;
	}
	.footerpage{
		background-color: #ebebeb;
		border-top: 1px solid #ccc;
	}
	.fade-in-out-enter{
		opacity: 0;
	}
	.fade-in-out-enter-active{
        transition:opacity 1s ease;
    }
</style>