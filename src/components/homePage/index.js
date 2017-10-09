import AddFriendsComponent from './AddFriends.vue'
import RecommendComponent from './Recommend.vue'
const homepage = {
	install:function(Vue){
		Vue.component('addFriends',AddFriendsComponent);
		Vue.component('recommend',RecommendComponent);
	}
}
export default homepage