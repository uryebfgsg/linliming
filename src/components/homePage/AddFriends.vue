<template>
	<div class="homePage-add">
			<div class="homePage-add-WX" @click="addWX">
				<div class="WX-center">
					<img src="../../assets/images/WX.png" alt="" />
				</div>
				<div class="WX-content">
					添加微信好友
				</div>
			</div>
			<div class="homePage-add-QQ" @click="addQQ">
				<div class="QQ-center">
					<img src="../../assets/images/QQ.png" alt="" />
				</div>
				<div class="QQ-content">
					添加QQ好友
				</div>
			</div>
			<mt-popup v-model="WX" popup-transition="popup-fade" class="add">
		  <ul>
		  	<li>
		  		微信好友
		  	</li>
		  	<li>
		  		微信朋友圈
		  	</li>
		  </ul>
		</mt-popup>
		<mt-popup  v-model="QQ" popup-transition="popup-fade" class="add">
		  <ul>
		  	<li>
		  		QQ好友
		  	</li>
		  	<li>
		  		QQ空间
		  	</li>
		  </ul>
		</mt-popup>
		</div>
		
</template>

<script>
	export default{
		data(){
			return{
				WX:false,
				QQ:false
			}
		},
		methods:{
			addWX(){
				this.WX = true;
			},
			addQQ(){
				this.QQ = true;
			}
		}
	}
</script>

<style>
	.homePage-add{
		width:100%;
		height:8rem;
		display: flex;
		background: #fff;
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
	}
	.homePage-add-WX{
		flex:1;
		width:100%;
		height:8rem;
	}
	.WX-center{
		width:3rem;
		height:3rem;
		margin:auto;
		margin-top:1rem;
	}
	.WX-center img{
		width:3rem;
		height:3rem;
	}
	.WX-content{
		text-align:center;
		margin-top:1.5rem;
		color:#666;
	}
	.homePage-add-QQ{
		flex:1;
		width:100%;
		height:8rem;
	}
	.QQ-center{
		width:3rem;
		height:3rem;
		margin:auto;
		margin-top:1rem;
	}
	.QQ-center img{
		width:3rem;
		height:2rem;
		margin-top:1rem;
	}
	.QQ-content{
		text-align:center;
		margin-top:1.5rem;
		color:#666;
	}
	.add{
		width:80%;
	}
	.add ul li{
		list-style:none;
		width:100%;
		height:3rem;
		line-height:3rem;
		padding-left:1rem;
		border-top:1px solid #eee;
	}
	.add ul li:nth-child(1){
		border-top:none;
	}
</style>