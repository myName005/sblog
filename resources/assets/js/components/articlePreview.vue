<template>
	<a :href="articleLink">
		<div class="box has-text-centered">
			<img  class="thumbnail" :src="thumbnail">
		
			<div class="content">
				<h3>
					{{title}}
				</h3>
				<p>
					{{contentPreview}}
				</p>
			</div>
		</div>
	</a>
</template>

<script>
module.exports = {
	props:['title','contentPreview','articleLink','thumbnail']
}
</script>

