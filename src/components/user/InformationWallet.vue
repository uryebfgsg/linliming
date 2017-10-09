<template>
	<div id="wallet">
		<div class="wallet-center">
			<div class="wallet-first">
				<img src="../../assets/images/appreciate.png" alt="" />
			</div>
			<div class="wallet-second">
				<p>总金额（元）</p>
			</div>
			<div class="wallet-third">
				<p>￥{{money}}</p>
			</div>
			<div class="wallet-fourth">
				<p>提现金额需满100元</p>
			</div>
			<div class="wallet-fifth">
				<button>提现</button>
			</div>
			<div class="wallet-sixth">
				<button>充值</button>
				<div class="wallet-seize"></div>
				<button>查看交易记录</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				money:""
			}
		},
		mounted(){
			var _this = this;
			this.$http.get("/src/assets/json/"+ this.$route.params.id+".json")
			.then(function(data){
				_this.money = data.data.money
			})
			.catch(function(err){
				console.log(err)
			})
		}
	}
</script>

<style>
	.wallet-center{
		width:80%;
		height:22rem;
		position:absolute;
		top:50%;
		left:10%;
		margin-top:-10rem;
	}
	.wallet-first{
		width:100%;
		height:5rem;
		text-align:center;
	}
	.wallet-first img{
		width:5rem;
		height:5rem;
	}
	.wallet-second{
		width:100%;
		height:2rem;
	}
	.wallet-second p{
		color:#666;
		text-align:center;
		font-size:1rem;
		padding-top:0.5rem;
	}
	.wallet-third{
		width:100%;
		height:5rem;
	}
	.wallet-third p{
		font-size:3rem;
		line-height:5rem;
		text-align:center;
	}
	.wallet-fourth{
		width:100%;
		height:2rem;
	}
	.wallet-fourth p{
		color:#666;
		line-height:2rem;
		font-size:1.2rem;
		text-align:center;
	}
	.wallet-fifth{
		width:100%;
		height:3rem;
		margin-top:1rem;
	}
	.wallet-fifth button{
		width:100%;
		height:3rem;
		border:0;
		color:#fff;
		background: limegreen;
		font-size:1.2rem;
		border-radius:0.4rem;
	}
	.wallet-sixth{
		width:100%;
		height:3rem;
		margin-top:1rem;
		display: flex;
	}
	.wallet-sixth button{
		flex:1;
		border:1px solid limegreen;
		background: #fff;
		color:limegreen;
		outline:none;
		font-size:1rem;
		border-radius:0.4rem;
	}
	.wallet-seize{
		width:0.8rem;
	}
</style>