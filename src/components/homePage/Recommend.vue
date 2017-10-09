<template>
	<div class="homePage-list">
			<ul>
				<li v-for="(homePageList,index) in homePageLists">
					<div class="homePage-list-top">
						<img src="../../assets/images/reward.png" alt="" />
						<p>{{homePageList.tilte}}</p>
					</div>
					<div class="homePage-list-bottom">
						<div class="list-bottom-left">
							<img :src="homePageList.img" alt="" />
						</div>
						<div class="list-bottom-right">
							<div class="list-right-top">
								<h3>{{homePageList.name}}</h3>
								<button :class="{homePageListButton:homePageList.checked}"  @click="concern(homePageList,index)">
									{{homePageList.follow}}
								</button>
							</div>
							<div class="list-right-center">
								<span>{{homePageList.piece}}篇文章</span>
								<span>{{homePageList.num}}人关注</span>
							</div>
							<div class="list-right-bottom">
								<p>{{homePageList.content}}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>			
		</div>
</template>

<script>
	export default{
		data(){
			return{
				homePageLists:[
					{
						tilte:'简书推荐专题',
						img:require('../../assets/images/username.png'),
						name:'美食',
						follow:'关注',
						checked:false,
						piece:'21911',
						num:'972111',
						content:'美食不可辜负。看美食没有配图不幸福啊！美食不可辜负。看美食没有配图不幸福啊！美食不可辜负。看美食没有配图不幸福啊！美食不可辜负。看美食没有配图不幸福啊！美食不可辜负。看美食没有配图不幸福啊！'
					},
					{
						tilte:'简书推荐专题',
						img:require('../../assets/images/username.png'),
						name:'哲思',
						follow:'关注',
						checked:false,
						piece:'8995',
						num:'965621',
						content:'投稿须知:1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩。1.字数不限，收入以哲学思辩'
					},
					{
						tilte:'简书推荐专题',
						img:require('../../assets/images/username.png'),
						name:'散文',
						follow:'关注',
						checked:false,
						piece:'106348',
						num:'1205832',
						content:'一缕墨香伴清茶.散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:散文专题投稿须知:'
					}
				]
			}
		},
		methods:{
			concern(homePageList,index){
				if(this.homePageLists[index].follow == '关注'){
					this.homePageLists[index].follow = '已关注';
					
				}else{
					this.homePageLists[index].follow = '关注';
				 	
				}
				if(typeof homePageList.checked=='undefined'){
					this.$set(homePageList,"checked",true)
				}else{
					homePageList.checked=!homePageList.checked
				}
			}
		}
	}
</script>

<style>
	.homePage-list ul li{
		list-style:none;
		background: #fff;
		margin-top:1rem;
		width:100%;
		height:16rem;
	}
	.homePage-list-top{
		width:100%;
		height:4rem;
		border-bottom:1px solid #eee;
	}
	.homePage-list-top img{
		width:1.5rem;
		height:1.5rem;
		float:left;
		margin-top:1.25rem;
		margin-left:1rem;
		margin-right:0.5rem;
	}
	.homePage-list-top p{
		color:red;
		font-size:1.2rem;
		height:4rem;
		line-height:4rem;
	}
	.homePage-list-bottom{
		width:100%;
		height:12rem;
		float:left;
		display: flex;
	}
	.list-bottom-left{
		width:6rem;
		height:12rem;
		float:left;
	}
	.list-bottom-left img{
		width:4rem;
		height:4rem;
		margin-left:1rem;
		margin-top:1rem;
	}
	.list-bottom-right{
		width:100%;
		height:12rem;
		flex:1;
	}
	.list-right-top{
		width:100%;
		height:4rem;
	}
	.list-right-top h3{
		padding-top:1.5rem;
		float:left;
	}
	.list-right-top button{
		float:right;
		width:5rem;
		height:2rem;
		border:none;
		border-radius:0.3rem;
		background: #00cc00;
		color:white;
		font-size:1rem;
		margin-top:1rem;
		margin-right:0.5rem;
		outline: none;
	}
	.list-right-top .homePageListButton{
		border:1px solid #666;
		color:#666;
		background: #fff;
	}
	.list-right-top button img{
		width:1rem;
		height:1rem;
		float:left;
		margin-left:0.5rem;
	}
	.list-right-center{
		width:100%;
		height:1rem;
	}
	.list-right-bottom{
		width:100%;
		height:7rem;
	}
	.list-right-center span{
		color:#666;
		margin-right:0.5rem;
		font-size:0.8rem;
	}
	.list-right-bottom p{
		width:100%;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:3;
		padding-top:1rem;
		line-height:1.5rem;
		font-size:0.6rem;
		color:#666;
	}
</style>