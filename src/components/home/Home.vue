<template>
	<div id="home">
		<router-link class="equal" to="/homePage">
			<div class="equal-center">
				<img src="../../assets/images/home.png" alt="" />
				<p>首页</p>
			</div>
		</router-link>
		<router-link class="equal" to="/">
			<div class="equal-center">
				<img src="../../assets/images/find.png" alt="" />
				<p>发现</p>
			</div>
		</router-link>
		<router-link class="equal" to="/">
			<div class="equal-puls">
				<img src="../../assets/images/plus.png" alt="" />
			</div>
		</router-link>
		<router-link class="equal" to="/news">
			<div class="equal-center">
				<img src="../../assets/images/news.png" alt="" />
				<p>消息</p>
			</div>
		</router-link>
		<router-link class="equal" to="/my">
			<div class="equal-center">
				<img src="../../assets/images/My.png" alt="" />
				<p>我的</p>
			</div>
		</router-link>
	</div>
</template>

<script>
</script>

<style>
	#home{
		width:100%;
		height:3rem;
		position:fixed;
		bottom:0;
		display: flex;
		background: #fff;
		border-top:1px solid #ccc;
		z-index:999;
	}
	.equal{
		flex:1;
		width:100%;
		height:3rem;
		text-align:center;
		line-height:3rem;
		text-decoration: none;
		color:#000;
	}
	.equal-center{
		width:2rem;
		height:3rem;
		margin:0 auto;
	}
	.equal-center img{
		width:1.4rem;
		height:1.4rem;
	}
	.equal-center p{
		margin-top:-2rem;
		font-size:0.6rem;
	}
	.equal-puls{
		width:2.5rem;
		height:3rem;
		margin:0 auto;
	}
	.equal-puls img{
		width:2.5rem;
		height:2.5rem;
		margin-top:0.25rem;
	}
</style>