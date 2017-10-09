import HomeComponent from './Home.vue'

const home = {
	install:function(Vue){
		Vue.component('home',HomeComponent)
	}
}
export default home
