<template>
	<div class="box">
		
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>{{title}}</strong>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<dropdown>
						<i slot="button-content" 
							class="fa fa-cog "></i>
						
						<template v-if="authorized">
							<a :href="deleteUrl" 
								class="dropdown-item"><i class="fa fa-times"></i> Delete</a>
							<a :href="editUrl" 
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
			<img class="box-image" :src="image">

		</div> 
		<div class="content">
			<slot></slot>	
		</div>
	</div>
</template>

<script>
module.exports = {
	props:['title','image','id','author','authorized'],
	components:{
		'dropdown':require('./dropdown.vue')
	},

	computed:{
		deleteUrl(){return '/delete_article/'+this.id},
		editUrl(){return '/edit_article/'+this.id},
	}
}
</script>