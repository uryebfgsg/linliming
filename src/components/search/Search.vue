<template>
	<div id="search">
		<div class="search-header">
			<div class="search-left" @click="hide()">
				<img src="../../assets/images/leftArrow.png" alt="" />
			</div>
			<mt-search  placeholder="搜索简书的内容和朋友" autofocus v-model="value" class="search-content" :result="filterResult">
				
		  </mt-search> 
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				value:"",
				defaultResult: [  
			        'Apple',  
			        'Banana',  
			        'Orange',  
			        'Durian',  
			        'Lemon',  
			        'Peach',  
			        'Cherry',  
			        'Berry',  
			        'Core',  
			        'Fig',  
			        'Haw',  
			        'Melon',  
			        'Plum',  
			        'Pear',  
			        'Peanut',  
			        'Other'  
			      ]  
			}
		},
		mounted(){
			var h = window.screen.height;
			var w = window.screen.width;
			document.querySelectorAll("#search")[0].style.height = h + "px";
			document.querySelectorAll("#search")[0].style.width = w + "px";
		},
		computed: {  
		    filterResult() {  
		      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));  
		   }
		},
		methods:{
			hide(){
				this.$router.go(-1)
			}
		}

	}
</script>

<style>
	#search{
		background: #fff;
		position:absolute;
		z-index:999;
	}
	.search-header{
		width:100%;
		height:3.2rem;
		background: #d9d9d9;
		display: flex;
	}
	.search-left{
		width:2rem;
		height:3rem;
		position:relative;
		z-index:999;
	}
	.search-left img{
		width:1.6rem;
		height:1.6rem;
		margin-top:0.8rem;
		margin-left:0.4rem;
	}
	.search-content{
		flex:1;
		border:0;
		padding:0;
		font-size:1rem;
		height:2.8rem;
	}
</style>