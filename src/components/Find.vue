<template>
	<div id="find">
		<home></home>
		<div class="find-swipe">
			<mt-swipe :auto="4000" :show-indicators="true">
				<mt-swipe-item :class="{slide1:true}">
					<img class="find-swipe-img" src="../assets/images/231e6e689b47d622ea53664ed2403810aa1c142c.jpg" alt="" />
				</mt-swipe-item>
				<mt-swipe-item :class="{slide2:true}">
					<img class="find-swipe-img" src="../assets/images/587eeed17babc1f3195acaa61a833f6ce6f994f5.jpg" alt="" />
				</mt-swipe-item>
				<mt-swipe-item :class="{slide3:true}">
					<img class="find-swipe-img" src="../assets/images/8dffe6ef4c0925b293141d041bb44de12df03e17.png" alt="" />
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="find-special">
			<div class="find-special-header">
				<p>热门专题</p>
				<div class="find-header-right">
					<img src="../assets/images/change.png" alt="" />
					<span>换一批</span>
				</div>
			</div>
			<div class="find-special-sextion">
				<ul>
					<li v-for="specialList in specialLists">{{specialList.val}}</li>
				</ul>
			</div>
		</div>
		<div class="find-article">
			<div class="find-article-header">
				<div class="find-article-header">
					<p>热门文章</p>
					<div class="article-header-right">
						<img src="../assets/images/customized.png" alt="" />
						<span>定制热门</span>
					</div>
				</div>
				<ul>
					<li v-for="articleList in articleLists">
						<div class="find-article-section">
							<div class="find-article-top">
								<img class="find-article-first" :src="articleList.userPortrait" alt="" />
								<p>{{articleList.userName}}</p>
								<span>{{articleList.time}}</span>
								<img class="find-article-right" src="../assets/images/bottom.png" alt="" />
							</div>
							<div class="find-article-bottom">
								<div class="find-article-content-left">
									<h3>{{articleList.title}}</h3>
									<p>{{articleList.content}}</p>
									<a href="javascript:void(0)">{{articleList.classification}}</a>
									<span>{{articleList.read}}阅读·{{articleList.com}}评论·{{articleList.like}}喜欢·{{articleList.appreciate}}赞赏</span>
								</div>
								<div class="find-article-content-right">
									<img :src="articleList.userimg" alt="" />
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<seize></seize>
	</div>
</template>

<script>
	export default{
		mounted(){
			this.$http.get("/src/assets/json/specialLists.json").then( data => {
				this.specialLists = data.data
			})
		},
		data(){
			return{
				specialLists:[],
				articleLists:[
					{
						userPortrait:require("../assets/images/headPortrait.png"),
						userName:'烟袋斜姐',
						time:'20小时前',
						title:'爸妈是很搞笑的人，包括离婚也是',
						content:'我爸妈离婚，又复婚了。有些事情过去了，但也不代表从来没有发生过。有些时候我们安之若素，维持着',
						classification:'世间事',
						read:'12663',
						com:'182',
						like:'438',
						appreciate:'7',
						userimg:require("../assets/images/p1.png")
					},
					{
						userPortrait:require("../assets/images/headPortrait.png"),
						userName:'名贵的考拉熊',
						time:'09 21 12:35',
						title:'一次长达四年的梦游',
						content:'陈飞在火车上做了个梦。未知的光线在他紧闭双眼的恋上飞速掠过，车厢里有人呼噜打响',
						classification:'短篇小说',
						read:'2875',
						com:'52',
						like:'62',
						appreciate:'1',
						userimg:require("../assets/images/p2.png")
					},
					{
						userPortrait:require("../assets/images/headPortrait.png"),
						userName:'琪官Kafka',
						time:'09 20 13:44',
						title:'我将在这个周末死去（20）把所有的秘密都藏进树洞里',
						content:'Chapter20 把所有的秘密都藏进树洞里 周二下午考完英语，我骑车到快餐店打工。可到了店前大门却',
						classification:'时差党',
						read:'2324',
						com:'15',
						like:'30',
						appreciate:'0',
						userimg:require("../assets/images/p3.png")
					}
				]
			}
		}
	}
</script>

<style>
	.find-swipe .mint-swipe{
		height:12rem;
		color:#fff;
		font-size:30px;
		text-align:center;
		margin-bottom:20px;
		position: relative;
	}
	.find-swipe .mint-swipe-item{
		line-height:12rem;
	}
	.find-swipe-desc{
		text-align:center;
		color:#666;
		margin-bottom: 5px;
	}
	.find-swipe-img{
		width:100%;
		height:100%;
	}
	.find-special{
		width:100%;
		height:7rem;
		overflow: hidden;
	}	
	.find-special-header{
		width:100%;
		height:1.2rem;
	}
	.find-special-header p{
		float:left;
		width:5rem;
		padding-left:0.5rem;
		margin-left:0.5rem;
		border-left:3px solid #F60;
		color:#666;
	}
	.find-header-right{
		width:5rem;
		height:1.2rem;
		float:right;
		background: #fff;
		line-height:1.2rem;
	}
	.find-header-right img{
		width:1rem;
		height:1rem;
		margin-top:0.1rem;
		float:left;
	}
	.find-header-right span{
		color:#666;
		display: block;
		float:left;
		margin-left:0.3rem
	}
	.find-special-sextion{
		width:100%;
		height:5rem;
		margin-top:0.6rem;
		float:left;
	}
	.find-special-sextion ul li{
		list-style:none;
		margin-left:0.5rem;
		margin-top:0.5rem;
		color:red;
		font-size:1.2rem;
		border:1px solid red;
		display: inline-block;
		padding-top:0.2rem;
		padding-bottom:0.2rem;
		padding-left:0.5rem;
		padding-right:0.5rem;
		border-radius:0.5rem;
		float:left;
	}
	.find-article{
		width:100%;
		margin-top:1rem;
	}
	.find-article-header{
		width:100%;
		height:1.2rem;
		line-height:1.2rem;
	}
	.find-article-header>p{
		width:5rem;
		padding-left:0.5rem;
		margin-left:0.5rem;
		border-left:3px solid #F60;
		color:#666;
		float:left;
	}
	.article-header-right{
		width:6rem;
		float:right;
	}
	.article-header-right img{
		width:1rem;
		height:1rem;
		margin-top:0.1rem;
		float:left;
	}
	.article-header-right span{
		display: block;
		float:left;
		margin-left:0.3rem;
		color:#666;
	}
	.find-article-header ul li{
		list-style:none;
		border-bottom:1px solid #eee;
		float:left;
	}
	.find-article-section{
		width:100%;
		margin-top:1rem;
		height:11rem;
	}
	.find-article-top{
		width:100%;
		height:2rem;
		line-height:2rem;
	}
	.find-article-top .find-article-first{
		width:2rem;
		height:2rem;
		float:left;
		margin-left:0.5rem;
	}
	.find-article-top>p{
		float:left;
		margin-left:0.5rem;
	}
	.find-article-top>span{
		float:left;
		color:#666;
		font-size:0.8rem;
		margin-left:0.5rem;
	}
	.find-article-top .find-article-right{
		float:right;
		margin-right:1rem;
		width:1rem;
		height:1rem;
		margin-top:0.5rem;
	}
	.find-article-bottom{
		width:100%;
		height:7rem;
		display: flex;
		margin-top:1rem;
	}
	.find-article-content-left{
		width:100%;
		flex:1;
	}
	.find-article-content-left h3{
		margin-left:0.5rem;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
	}
	.find-article-content-left p{
		width:100%;
		margin-left:0.5rem;
		margin-top:0.5rem;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
		color:#666;
	}
	.find-article-content-left a{
		text-decoration: none;
		color:red;
		float:left;
		border:1px solid red;
		margin-left:0.5rem;
		display: inline-block;
		margin-top:0.5rem;
		padding-top:0.2rem;
		padding-right:0.5rem;
		padding-bottom:0.2rem;
		padding-left:0.5rem;
		font-size:0.8rem;
	}
	.find-article-content-left span{
		font-size:0.8rem;
		color:#666;
		float:left;
		margin-top:1rem;
		margin-left:6rem;
		display: block;
		position:absolute;
	}
	.find-article-content-right{
		width:6rem;
	}
	.find-article-content-right img{
		width:5rem;
		height:5rem;
		margin-left:0.5rem;
	}
</style>