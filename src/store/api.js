//引入Ajax库
import axios from 'axios'

const URL='/api/'
const KEY='5deb77171c4b05796fe6d712f98d8e7b'

export function fetchBookList(name,type,skip,finish){
	return axios.get(`${URL}book`,{
		params:{
            name: name || '',
            type: type || '',
            skip: skip || '',
            finish: finish || '',
            key: KEY
		}
	})
}
export function fetchChapterList(name,skip){
	return axios.get(`${URL}chapter`,{
		params:{
			comicName: name,
			skip: skip || '',
			key:KEY
		}
	})
}

export function fetchChapterContent(name,index){
	return axios.get(`${URL}chapterContent`,{
		params:{
			comicName: name,
			id: index,
			key: KEY
		}
	})
}