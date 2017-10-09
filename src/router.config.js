import News from './components/News.vue'
import My from './components/My.vue'
import HomePage from './components/HomePage.vue'
import Find from './components/Find.vue'
import Search from './components/search/Search.vue'
import information from './components/information/Information.vue'




export default {
	routes:[
		{path:"/news",component:News},
		{path:"/my",component:My},
		{path:"/homePage",component:HomePage},
		{path:"/",component:Find},
		{path:"/search",component:Search},
		{path:"/information/:id",component:information}
	]
}
