<template>
	<div id="my">
		<home></home>
		<div class="my-header">
			<p>我的</p>
			<div class="my-header-img">
				<img src="../assets/images/set.png" alt="" />
				<img @click="show()" src="../assets/images/search.png" alt="" />
			</div>
		</div>
		<div class="my-section">
			<div class="my-section-top">
				<div class="portrait">
					<img src="../assets/images/headPortrait.png" alt="" />
				</div>
				<div class="content">
					<p>洁身丶自爱</p>
					<div class="section-img">
						<img src="../assets/images/modify.png" alt="" />
					</div>
				</div>
			</div>
			<div class="my-section-bottom">
				<ul>
					<li v-for="mySection in mySections"  @click="inform(mySection)">
						<div class="my-section-list-top">
							{{mySection.num}}
						</div>
						<div class="my-section-list-bottom">
							{{mySection.content}}
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="mylist-first">
			<ul>
				<li v-for="myListFirst in myListFirsts" @click="informFirst(myListFirst)">
					<div class="mylist-left">
						<img :src="myListFirst.url" alt="" />
					</div>
					<div class="mylist-center">
						{{myListFirst.content}}
					</div>
					<div class="mylist-right">
						{{myListFirst.num}}
					</div>
				</li>
			</ul>
		</div>
		<div class="mylist-second">
			
			<ul>
				<li>
					<div class="mylist-left">
						<img src="../assets/images/night.png" alt="" />
					</div>
					<div class="mylist-center">
						夜间模式
					</div>
					<div class="mylist-right">
						<mt-switch class="switch" @change="pattern" v-model="value"></mt-switch>
					</div>
				</li>
				<li>
					<div class="mylist-left">
						<img src="../assets/images/Browse.png" alt="" />
					</div>
					<div class="mylist-center">
						浏览记录
					</div>
				</li>
			</ul>
		</div>
		<div class="mylist-third">
			<ul>
				<li>
					<div class="mylist-left">
						<img src="../assets/images/share.png" alt="" />
					</div>
					<div class="mylist-center">
						分享简书
					</div>
				</li>
				<li>
					<div class="mylist-left">
						<img src="../assets/images/help.png" alt="" />
					</div>
					<div class="mylist-center">
						帮助与反馈
					</div>
				</li>
				<li>
					<div class="mylist-left">
						<img src="../assets/images/score.png" alt="" />
					</div>
					<div class="mylist-center">
						给简书评分
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
				mySections:[
					{num:0,content:"公开文章",address:"publicArticle"},
					{num:0,content:"关注",address:"follow"},
					{num:0,content:"粉丝",address:"fans"}
				],
				myListFirsts:[
					{url:require("../assets/images/lock.png"),content:"私有文章",num:0,address:"private"},
					{url:require("../assets/images/collection.png"),content:"收藏的文章",num:0,address:"collection"},
					{url:require("../assets/images/likegray.png"),content:"喜欢的文章",num:0,address:"likegray"},
					{url:require("../assets/images/special.png"),content:"我的专题",num:0,address:"special"},
					{url:require("../assets/images/writing.png"),content:"我的文集",num:0,address:"writing"},
					{url:require("../assets/images/hook.png"),content:"关注的专题/文集",num:0,address:"hook"},
					{url:require("../assets/images/wallet.png"),content:"钱包",num:"",address:"wallet"}
				]
			}
		},
		methods:{
			pattern(){
				this.value? alert('夜间模式'):alert('取消夜间模式')
			},
			show(){
				this.$router.push({path:'/search'})
			},
			inform(mySection){
				this.$router.push({path:"/information/"+mySection.address,query:{content : mySection.content}})
			},
			informFirst(myListFirst){
				this.$router.push({path:"/information/"+myListFirst.address,query:{content : myListFirst.content}})
			}
		}
	}
</script>

<style>
	#my{
		width:100%;
		height:100%;
		background: #eee;
	}
	.my-header{
		width:100%;
		height:3rem;
		background: #fff;
	}
	.my-header p{
		width:3rem;
		height:3rem;
		line-height:3rem;
		padding-left:1rem;
		float:left;
	}
	.my-header-img{
		width:10rem;
		height:2rem;
		float:right;
		padding-top:0.7rem;
		padding-bottom:0.5rem;
	}
	.my-header-img img{
		width:1.6rem;
		height:1.6rem;
		margin-left:2.2rem;
	}
	.my-section{
		width:100%;
		height:12rem;
		margin-top:1rem;
		background: #fff;
	}
	.my-section-top{
		width:100%;
		height:7rem;
		border-bottom:1px solid #eee;
	}
	.my-section-top .portrait{
		width:7rem;
		height:7rem;
		float:left;
	}
	.my-section-top .portrait img{
		width:5rem;
		height:5rem;
		margin-left:1rem;
		margin-top:1rem;
	}
	.my-section-top .content{
		height:7rem;
		float:float;
		margin-left:7rem;
	}
	.my-section-top .content p{
		height:7rem;
		float:left;
		line-height:7rem;
	}
	.my-section-top .content img{
		width:1.6rem;
		height:1.6rem;
		float:left;
		margin-top:2.7rem;
		margin-left:0.5rem;
	}
	.my-section-bottom{
		width:100%;
		height:5rem;
		border-bottom:1px solid #eee;
	}
	.my-section-bottom ul{
		float:left;
		width:100%;
		height:5rem;
		display: flex;
	}
	.my-section-bottom ul li{
		width:100%;
		float:left;
		flex:1;
		list-style:none;
	}
	.my-section-list-top{
		width:100%;
		height:3rem;
		text-align:center;
		line-height:3rem;
		font-size:2rem;
		color:#333;
	}
	.my-section-list-bottom{
		width:100%;
		height:2rem;
		text-align:center;
		color:#666;
	}
	.mylist-first{
		width:100%;
		height:28rem;
		margin-top:1rem;
		background: #fff;
	}
	.mylist-first ul li{
		width:100%;
		height:4rem;
		list-style:none;
		border-bottom:1px solid #eee;
	}
	.mylist-left{
		width:4rem;
		height:4rem;
		float:left;
	}
	.mylist-left img{
		width:1.6rem;
		height:1.6rem;
		margin-left:1.2rem;
		margin-top:1.2rem;
	}
	.mylist-center{
		min-width:1rem;
		height:4rem;
		line-height:4rem;
		float:left;
	}
	.mylist-right{
		float:right;
		height:4rem;
		line-height:4rem;
		margin-right:1rem;
		color:#666;
		font-size:1.2rem;
	}
	.mylist-second{
		width:100%;
		height:8rem;
		background: #fff;
		margin-top:1rem;
	}
	.mylist-second ul li{
		list-style:none;
		width:100%;
		height:4rem;
		border-bottom:1px solid #ccc;
	}
	.mylist-second .switch{
		margin-top:1rem;
	}
	.mylist-third{
		width:100%;
		height:12rem;
		margin-top:1rem;
		margin-bottom:4rem;
		background: #fff;
	}
	.mylist-third ul li{
		list-style:none;
		width:100%;
		height:4rem;
		border-bottom:1px solid #ccc;
	}

</style>