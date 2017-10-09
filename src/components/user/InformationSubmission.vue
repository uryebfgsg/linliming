<template>
	<div id="submission">
		<div class="submission-list">
			<div class="submission-list-left">
				<img src="../../assets/images/uploads.png" alt="" />
			</div>
			<div class="submission-list-right">
				<h3>{{content}}</h3>
			</div>
		</div>
		<div class="end">
			<p>- end -</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				content:""
			}
		},
		mounted(){
			var _this = this;
			this.$http.get("/src/assets/json/"+this.$route.params.id+".json")
			.then(function(data){
				_this.content = data.data.content
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	.submission-list{
		width:100%;
		height:4rem;
		display: flex;
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
	}
	.submission-list-left{
		width:4rem;
		height:4rem;
	}
	.submission-list-left img{
		width:2rem;
		height:2rem;
		margin-top:1rem;
		margin-left:1rem;
	}
	.submission-list-right{
		width:100%;
		height:4rem;
		flex:1;
	}
	.submission-list-right h3{
		line-height:4rem;
		margin-left:0.5rem;
	}
</style>