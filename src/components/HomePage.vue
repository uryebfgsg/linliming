<template>
	<div id="homePage">
		<home></home>
		<div class="homePage-header">
			<p>推荐关注</p>
		</div>
		<div class="homePage-search" @click="show()">
			<span>
				<img src="../assets/images/pray.png" alt="" />
				搜索简书的内容和朋友
			</span>
		</div>
		<addFriends></addFriends>
		<recommend></recommend>
		<seize></seize>
	</div>
</template>

<script>
	export default{
		methods:{
			show(){
				this.$router.push({
					path:'/search'
				})
			}
		}
	}
</script>

<style>
	#homePage{
		width:100%;
		background: #eee;
	}
	.homePage-header{
		width:100%;
		height:3rem;
		background: #fff;
		border-bottom:1px solid #eee;
	}
	.homePage-header p{
		padding-top:1rem;
		padding-left:1rem;
		float:left;
	}
	.homePage-search{
		width:100%;
		height:3.5rem;
		background: #fff;
		text-align:center;
		line-height:3rem;
		padding-top:0.5rem;
	}
	.homePage-search span{
		width:90%;
		height:3rem;
		background: #F5F5F5;
		display: block;
		margin-left:5%;
		border-radius:5rem;
		color:#666;
		border:1px solid #eee;
	}
	.homePage-search span img{
		width:1rem;
		height:1rem;
		margin-right:0.1rem;
	}
</style>