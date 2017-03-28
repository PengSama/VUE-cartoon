<template>
  <transition name='fade-in-out'>
	<div class="container">
		<div class="search-container">
			<input type="text" autofocus placeholder="Search" v-model="searchText">
			<div class="search-icon-box" v-show="searchText.trim()" @click='search(searchText)'>
				<span class="search-icon"></span>
			</div>
		</div>
		<div class="search-result">
			<ul>
				<li v-for="result in list">
					<div class="search-result-list">
						<router-link :to="'/'+result.name"><img :src="result.coverImg"></router-link>
						<div class="search-result-des">
							<h3>动漫名称：{{ result.name }}</h3>
							<P>类型：{{ result.type }}</P>
							<p>地区：{{ result.area }}</p>
							<p class="des">动漫简述：{{ result.des }}</p>
							<p>是否完结：{{ result.finish | turnToChinese}}</p>
							<p>最后更新日期：{{ result.lastUpdate | turnToDate}}</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</transition>
</template>
<script>
	export default{
		name:'Search',
		data(){
			return{
				searchText:'',
				exactSearch:false,
				list:[]
			};
		},

		computed:{
            list(){
            	return this.$store.state.searchBooklist
            },
		},

		methods:{
            search(val){
                const text=val.trim()
                if(text){
                    this.exactSearch?this.$store.dispatch('FECTH_CHAPTER',{name:text}):this.$store.dispatch('SEARCH_BOOKLIST',{name:text})
                }
            }
		},

		// beforeDestory(){
		// 	this.$store.dispatch('CLEAR_SEARCHLIST')
		// },

		filters:{
			turnToDate(date){
            	if(!date){return}
            	let Sdate=String(date)
            	return Sdate.slice(0,4)+'年'+Sdate.slice(4,6)+'月'+Sdate.slice(6,8)+'日'
            },
            turnToChinese(value){
            	if(value===true){
            		return '是'
            	}else if(value===false){
            		return '否'
            	}else{
            		return
            	}
            },
		}
	}
</script>
<style scoped>
	.container{
        width: 100%;
        box-sizing: border-box;
        outline: none;

        font-family: inherit;
	}
	.container:before,.container:after{
		content: '';
		display: table;
	}
	.container:after{
		clear: both;
	}
	.search-container{
		width:980px;
		height: 4em;
		background-color: #fff;
		position: relative;
        box-shadow: 0 6px 16px 0 rgba(16,16,32,.15);
	}
	.search-container input{
		height: inherit;
		width: inherit;
		border: none;
		padding-left: 10px;
		outline: none;
		font-size: 2em;
		box-sizing: border-box;
	}
	.fade-in-out-enter{
		opacity: 0;
	}
	.fade-in-out-enter-active{
        transition:opacity 1s ease;
    }
    .search-icon-box{
    	height: 56px;
    	width: 56px;
    	position: absolute;
    	display: flex;
    	right: 0;
    	top: 0;
    	cursor: pointer;
    	justify-content: center;
    	align-items: center;
    	background-color: #ebebeb;
    }
    .search-icon-box span{
    	height:40px;
    	width:40px;
    	display:block;
    	position:relative;
    }
	.search-icon:before, .search-icon:after{
		content:'';
		height:20px;
		display:block;
		position:absolute;
		top:0;
		left:0;
	}
	.search-icon:before{
		width:20px;
		border:3px #20a0ff solid;
		border-radius:100%;
		-webkit-border-radius:100%;
		-moz-border-radius:100%;
	}

	.search-icon:after{
		width:7px;
		background:#20a0ff;
		transform:rotate(-45deg);
		-webkit-transform:rotate(-45deg);
		-moz-transform:rotate(-45deg);
		-o-transform:rotate(-45deg);
		-ms-transform:rotate(-45deg);
		top:17px;
		left:24px;
	}
	.search-icon-box:hover{
		background-color: #ccc;
	}
	.search-result{
		width: 100%;
		margin-top: 2em;
		margin-bottom: 2em;
	}
	.search-result-list{
		display: flex;
		height: 300px;
		width: 100%;
		margin-bottom: 1em;
		background-color: rgba(32, 160, 255, 0.06);
		box-shadow: 0 6px 16px rgba(16,16,32,.15);

	}

	.search-result-list img{
		padding: 5px;
		height: 300px;
		box-sizing: border-box;

	}
	.search-result-list img:hover{
		background-color: #20a0ff;
	}
	.search-result-des{
        width: 75%;
        height: 300px;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;

	}
</style>
