import SearchComponent from './Search.vue'

const search = {
	install:function(Vue){
		Vue.component('search',SearchComponent)
	}
}
export default search
