<template>
	<div class="cartoon-detail-page">
		<div class="cartoon-detail">
			<img :src="introduction.coverImg">
			<div class="detail-information">
				<h3>动漫名称：{{ introduction.name ||name}}</h3>
				<P>类型：{{ introduction.type }}</P>
				<p>地区：{{ introduction.area }}</p>
				<p class="des">动漫简述：{{ introduction.des }}</p>
				<p>是否完结：{{ introduction.finish | turnToChinese}}</p>
				<p>最后更新日期：{{ introduction.lastUpdate | turnToDate}}</p>
			</div>
		</div>
		<div class="cartoon-index">
			<ul class="cartoon-list">
				<li v-for="(page,index) in pages">
					<router-link :to="'/'+name+'/'+page.id">{{page.name|inter}}</router-link>					
				</li>
				<span @click="getMoreChapter" v-show="this.skip+20<total&&total>20">get more...</span>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'ShowCartoon',
		data(){
			const name=this.$route.params.id;
			return{
				pages:[],
				name:name,
                skip:0,
                introduction :{}
			}
			
		},
		methods:{
			getMoreChapter(){
                this.skip+=20
				this.$store.dispatch('FECTH_CHAPTER',{name:this.name,skip:this.skip})
			}
		},
		computed:{
			pages(){
				return this.$store.state.chapter[this.name]
			},
			total(){
				return this.$store.state.chapter[this.name].total
			}
		},
		beforeMount(){
			this.introduction =this.$store.getters.activeItem||{}
              if(this.$store.state.chapter[this.name]){
              	this.skip=this.$store.state.chapter[this.name].length-20
              }else{
              	this.$store.dispatch('FECTH_CHAPTER',{name:this.name,skip:this.skip})
              }
		},
		filters:{
			inter(page){
				return page.split(' ')[0]
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
            turnToDate(date){
            	if(!date){return}
            	let Sdate=String(date)
            	return Sdate.slice(0,4)+'年'+Sdate.slice(4,6)+'月'+Sdate.slice(6,8)+'日'
            }
		}
	}
</script>
<style type="text/css">
    .cartoon-detail-page{
    	width: 100%;
    }
	.cartoon-detail{
		height: 400px;
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 5px;
		display: flex;
	}
	.cartoon-detail img{
		width: 30.61%;
		height: 100%;
	}
	.detail-information{
        width: 69.39%;
        height: 100%;
        background-color: #ccc;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;
	}
	.detail-information .des{
		max-height: 70%;
		overflow-y: auto;
	}
	.cartoon-index{
		width: 100%;
		box-sizing: border-box;
		max-height: 400px;
		overflow: auto;
		padding: 5px;
		border: 1px solid #a020ff;
	}
	.cartoon-list{
        text-align: left;
        border:1px solid #000;
        padding: 5px;
	}
	.cartoon-list li{
		display: inline-block;
		margin:0 8px 5px 0;
		border: 1px solid red;
	}
	.cartoon-list li a{
		display: block;
		padding: 8px 15px;
	}
	.cartoon-list span{
		display: inline-block;
		margin: 5px;
		border:none;
		color: red;
	}
	.cartoon-list span:hover{
		color: #a020ff;
		cursor: pointer;
	}
</style>