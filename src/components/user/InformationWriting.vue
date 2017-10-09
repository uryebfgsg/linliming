<template>
	<div id="writing">
		<div class="writing-top">
			<p>温馨提示：第一个文集将作为你新建文章的默认文集</p>
		</div>
		<div class="writing-add">
			<div class="writing-add-left">
				<img src="../../assets/images/addGreen.png" alt="" />
			</div>
			<div class="writing-add-right">
				<p>新建一个文集</p>
			</div>
		</div>
		<div class="writing-pary"></div>
		<div class="writing-list">
			<ul>
				<li v-for="writingList in writingLists">
					<div class="writing-list-left">
						<img src="../../assets/images/article.png" alt="" />
					</div>
					<div class="writing-list-right">
						<h3>{{writingList.title}}</h3>
						<p>{{writingList.username}} · {{writingList.num1}}篇文章 · {{writingList.num2}}人关注</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="end">
			<p>- end -</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				writingLists:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get("/src/assets/json/"+this.$route.params.id+".json")
			.then(function(data){
				_this.writingLists = data.data
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	.writing-top{
		width:100%;
		height:2rem;
		background: #eee;
	}
	.writing-top p{
		font-size:0.7rem;
		color:#666;
		line-height:2rem;
		margin-left:0.5rem;
	}
	.writing-add{
		width:100%;
		height:4rem;
		display: flex;
	}
	.writing-add-left{
		width:5rem;
		height:4rem;
	}
	.writing-add-left img{
		width:2rem;
		height:2rem;
		margin-left:2.5rem;
		margin-top:1rem;
	}
	.writing-add-right{
		width:100%;
		flex:1;
	}
	.writing-add-right p{
		font-size:1.2rem;
		line-height:4rem;
	}
	.writing-pary{
		width:100%;
		height:1.5rem;
		background: #eee;
	}
	.writing-list ul li{
		width:100%;
		height:5rem;
		border-top:1px solid #eee;
		display: flex;
	}
	.writing-list-left{
		width:6rem;
		height:5rem;
	}
	.writing-list-left img{
		width:3rem;
		height:3rem;
		margin-top:1rem;
		margin-left:2rem;
	}
	.writing-list-right{
		width:100%;
		height:5rem;
		flex:1;
	}
	.writing-list-right h3{
		margin-top:1rem;
	}
	.writing-list-right p{
		color:#666;
		margin-top:0.5rem;
		font-size:0.9rem;
	}
</style>