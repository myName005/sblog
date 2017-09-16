<template>
	<div class="box">
		<h1 class="title">{{title}}</h1>
		
		<div>
			<img class="box-image" :src="image">
		</div> 
		<div class="content">
			<slot></slot>	
		</div>
	</div>
</template>

<script>
module.exports = {
	props:['title','image','author']
}
</script>