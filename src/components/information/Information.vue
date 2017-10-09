<template>
	<div id="information">
		<div class="information-header">
			<div class="information-header-left" @click="back()">
				<img src="../../assets/images/leftArrow.png" alt="" />
			</div>
			<div class="information-header-right">
				{{content}}
			</div>
		</div>
		<div class="information-content" v-if="judge == true">
			<img src="../../assets/images/noNews.png" alt="" />
			<p>这里还没有内容哦 ~ </p>
		</div>
		<informationJane v-else-if="judge == 'jane'"></informationJane>
		<informationWriting v-else-if="judge == 'writing'"></informationWriting>
		<informationWallet v-else-if="judge == 'wallet'"></informationWallet>
		<informationSubmission v-else-if="judge == 'submission'"></informationSubmission>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				content : this.$route.query.content,
				judge:"",
			}
		},
		methods:{
			back(){
				this.judge = ""
				this.$router.go(-1);
			}
		},
		mounted(){
			var _this = this;
			this.$http.get("/src/assets/json/"+this.$route.params.id+".json")
			.then(function(data){
				if(data.data.length == 0){
					_this.judge = true
				}else{
					_this.judge = _this.$route.params.id
				}
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	#information{
		width:100%;
		height:100%;
	}
	.information-header{
		width:100%;
		height:3rem;
		line-height:3rem;
		font-size:1rem;
		border-bottom:1px solid #eee;
		display: flex;
	}
	.information-header-left{
		width:3rem;
		height:3rem;
		float:left;
	}
	.information-header-left img{
		width:1.4rem;
		height:1.4rem;
		margin-top:0.8rem;
		margin-left:1.1rem;
	}
	.information-header-right{
		margin-left:0.6rem;
		flex:1;
	}
	.information-content{
		width:10rem;
		height:10rem;
		top:50%;
		left:50%;
		margin-top:-5rem;
		margin-left:-5rem;
		position:absolute;
	}
	.information-content img{
		width:10rem;
		height:9rem;
		float:left;
	}
	.information-content p{
		margin-left:0.5rem;
	}
	.end{
		width:100%;
		height:1rem;
		margin-top:1rem;
		text-align:center;
		font-size:0.8rem;
		color:#555;
	}
</style>