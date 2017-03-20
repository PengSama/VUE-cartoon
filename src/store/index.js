import Vue from 'vue'
import Vuex from 'vuex'
import {fetchBookList,fetchChapterList,fetchChapterContent} from './api'

Vue.use(Vuex)

const store=new Vuex.Store({
	state:{
		bookList:{
			'全部漫画':[],
			'少年漫画':[],
			'青年漫画':[],
			'少女漫画':[],
			'耽美漫画':[],
			'用户上传':[]
		},
		activeType:'全部漫画',
		chapter:{},
		chapterContent:[],
		searchBooklist:[]
	},

	actions:{
		FETCH_BOOKLIST:({commit,state},{name,type,skip,finish})=>{
			if(type==='全部漫画'){
				type=''
			}
			fetchBookList(name,type,skip,finish)
			.then((data)=>commit('SET_BOOKLIST',{data,type}))
		},

		CHANGE_ACTIVETYPE:({commit},{type})=>{
			commit('SET_ACTIVETYPE',{type})
		},

		FECTH_CHAPTER:({commit,state},{name,skip})=>{
			if(!state.chapter[name]){
				commit('SET_CHAPTERNAME',{name})
			}
			fetchChapterList(name,skip)
			.then(chapterList=>commit('SET_CHAPTER',{chapterList,name,skip}))
		},

		FECTH_CHAPTERCONTENT:({commit,state},{name,index})=>{
			fetchChapterContent(name,index)
			.then(chapterContent=>commit('SET_CHAPTERCONTENT',{chapterContent}))
		},

		SEARCH_BOOKLIST:({commit},{name})=>{
			fetchBookList(name).then((data)=>commit('SET_SEARCH_BOOKLIST',{data}))
		},

		// CLEAR_SEARCHLIST:({commit})=>{
		// 	commit('SET_CLEAR_SEARCHLIST')
		// }
	},

	mutations:{
		SET_BOOKLIST:(state,{data,type})=>{
			if(!type){
				state.bookList['全部漫画']=state.bookList['全部漫画'].concat(data.data.result.bookList)
				state.activeType='全部漫画'
			}else{
				state.activeType=type
                state.bookList[type]=state.bookList[type].concat(data.data.result.bookList)
			}

		},

		SET_ACTIVETYPE:(state,{type})=>{
            state.activeType=type
		},

		SET_CHAPTERNAME:(state,{name})=>{
            Vue.set(state.chapter,name,[])

		},

		SET_CHAPTER:(state,{chapterList,name,skip})=>{			
            state.chapter[name]=state.chapter[name].concat(chapterList.data.result.chapterList)
			state.chapter[name]['total']=chapterList.data.result.total
			
		},

		SET_CHAPTERCONTENT:(state,{chapterContent})=>{
			state.chapterContent=chapterContent.data.result.imageList
		},

		SET_SEARCH_BOOKLIST:(state,{data})=>{
			state.searchBooklist=data.data.result.bookList
		},

		// SET_CLEAR_SEARCHLIST:(state)=>{
		// 	state.searchBooklist=[]
		// }
	},

	getters:{
          activeItem(state){

          	const {bookList,activeType,searchBooklist}=state
          	const item=state.route.params.id
          	var active=null
            bookList[activeType].forEach(function(el){
          		if(el.name===item){        		
                     active=el
          		}
          	})

          	if(active===null){
          		searchBooklist.forEach(function(el,index){
                	if(el.name===item){
                		active=el
                	}
                })
          	}
            return active  	
          }
	}
})

export default store