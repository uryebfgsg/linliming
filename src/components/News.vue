<template>
	<div id="news">
		<home></home>
		<div class="news-header">
			<p>消息</p>
			<div class="news-header-right">
				<img src="../assets/images/news.png" alt="" />
				<img @click="show()" src="../assets/images/search.png" alt="" />
			</div>
		</div>
		<div class="news-list">
			<ul>
				<li v-for="newsList in newsLists" @click="inform(newsList)">
					<img :src="newsList.url" alt="" />
					<p>{{newsList.content}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				toggle:false,
				newsLists:[
					{url:require("../assets/images/comment.png"),content:"评论",address:"comment"},
					{url:require("../assets/images/jane.png"),content:"简信",address:"jane"},
					{url:require("../assets/images/upload.png"),content:"投稿请求",address:"submission"},
					{url:require("../assets/images/like.png"),content:"喜欢和赞",address:"praises"},
					{url:require("../assets/images/follow.png"),content:"关注",address:"follow"},
					{url:require("../assets/images/appreciate.png"),content:"赞赏",address:"appreciate"},
					{url:require("../assets/images/more.png"),content:"其它提醒",address:"reminders"},
				]
			}
		},
		methods:{
			show(){
				this.$router.push({path:'/search'})
			},
			inform(newsList){
				this.$router.push({path:"/information/"+newsList.address,query:{content : newsList.content}})
			}
		}
	}
</script>

<style>
	#news{
		width:100%;
	}
	.news-header{
		width:100%;
		height:3rem;
		border-bottom: 1px solid #eee;
		position:fixed;
	}
	.news-header p{
		margin:0;
		margin-left:1rem;
		font-size:1.2rem;
		line-height:3rem;
		width:5rem;
		height:3rem;
		float:left;
	}
	.news-header-right{
		width:10rem;
		height:3rem;
		float:right;
	}
	.news-header-right img{
		width:1.6rem;
		height:1.6rem;
		margin-top:0.7rem;
		margin-left:2.2rem;
	}
	.news-list{
		margin-top:3rem;
		width:100%;
		float:left;
	}
	.news-list ul li{
		width:100%;
		height:4rem;
		list-style:none;
		border-bottom:1px solid #eee;
	}
	.news-list ul li img{
		width:1.4rem;
		height:1.4rem;
		padding-top:1.3rem;
		padding-left:1rem;
		float:left;
	}
	.news-list ul li p{
		float:left;
		height:4rem;
		margin-left:1rem;
		line-height:4rem;
		font-size:1.4rem;
	}
</style>