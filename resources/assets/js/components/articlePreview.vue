<template>

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
</template>

<script>
module.exports = {
	props:['title','contentPreview','articleLink','thumbnail']
}
</script>

