<template>
	<div class="informationJane" >
			<ul>
				<li v-for="janeList in janeLists">
					<div class="informationJane-left">
						<img src="../../assets/images/headPortrait.png" alt="" />
					</div>
					<div class="informationJane-right">
						<div class="informationJane-right-top">
							<div class="informationJane-content-left">
								{{janeList.username}}
							</div>
							<div class="informationJane-content-right">
								{{janeList.time}}
							</div>
						</div>
						<div class="informationJane-right-bottom">
							<p>{{janeList.content}}</p>
						</div>
					</div>
				</li>
			</ul>
			<div class="end">
				- end -
			</div>
		</div>
</template>

<script>
	export default{
		data(){
			return{
				janeLists:[]
			}
		},
		mounted(){
			var _this = this;
			this.$http.get("/src/assets/json/"+this.$route.params.id+".json")
			.then(function(data){
				_this.janeLists = data.data
				
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	.informationJane ul li{
		width:100%;
		height:4rem;
		display: flex;
	}
	.informationJane-left{
		width:4rem;
		height:4rem;
	}
	.informationJane-left img{
		width:2rem;
		height:2rem;
		margin-top:1rem;
		margin-left:1rem;
	}
	.informationJane-right{
		width:100%;
		flex:1;
		height:4rem;
	}
	.informationJane-right-top{
		width:100%;
		height: 1.5rem;
		margin-top:1rem;
	}
	.informationJane-content-left{
		float:left;
	}
	.informationJane-content-right{
		float:right;
		margin-right:1rem;
		font-size:0.8rem;
		color:#666;
	}
	.informationJane-right-bottom{
		width:100%;
		height:1rem;
		overflow:hidden
	}
	.informationJane-right-bottom p{
		width:100%;
		overflow:hidden; 
		text-overflow:ellipsis;
		display:-webkit-box; 
		-webkit-box-orient:vertical;
		-webkit-line-clamp:1;
		font-size:0.8rem;
		color:#666;
	}
</style>