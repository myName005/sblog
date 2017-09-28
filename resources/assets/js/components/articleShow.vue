<template>
	<div class="box">
		
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>{{articleData.title}}</strong>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<dropdown>
						<i slot="button-content" 
							class="fa fa-cog "></i>
						
						<template v-if="articleData.authorized">
							<a :href="articleData.urls.delete" 
								class="dropdown-item"><i class="fa fa-times"></i> Delete</a>
							<a :href="articleData.urls.edit" 
								class="dropdown-item"><i class="fa fa-pencil"></i> Edit</a>
							<span class="dropdown-divider"></span>
						</template>
						<a href="#" 
							class="dropdown-item"> <i class="fa fa-flag"></i> Report</a>
					</dropdown>
				</div>
			</div>
		</div>
		<div>
			<img class="box-image" :src="articleData.urls.image">

		</div> 
		<div class="content" v-html="articleData.content"></div>
	
	</div>
</template>

<script>
module.exports = {
	props:['articleData'],
	components:{
		'dropdown':require('./dropdown.vue'),
	},

}
</script>