<template>
<div class="column is-4">
	<a :href="articleLink">
		<div class="box">
			<div class="media">
				<div class="media-left">
					<img  class="thumbnail" :src="thumbnail">
				</div>
				<div class="media-content">
					<div class="content">
						<h3>
							{{title}}
						</h3>
						<p>
							{{contentPreview}}
						</p>
					</div>
					
				</div>
			</div>
			
		</div>
	</a>
</div>
</template>

<script>
module.exports = {
	props:['title','contentPreview','articleLink','thumbnail']
}
</script>

<style lang="scss" scoped>
@import '../../sass/bulma';
.thumbnail{
	width: 128px;
	height: 128px ;
	object-fit: cover;
	border-radius: $box-radius;
	box-shadow: $box-shadow;
}
</style>