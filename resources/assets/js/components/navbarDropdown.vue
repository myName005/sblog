<template>
	<div class="navbar-item has-dropdown " :class="{'is-active':show}">
		<a class="navbar-link" @click="toggle">
			<slot name="triger"></slot>	
		</a>
		
		<div class="navbar-dropdown">
			<a href="/make_article" 
                        class="navbar-item">Write Article</a>	
		</div>
	</div>	
</template>

<script>
module.exports = {
	data(){return{
		show:false
	}},
	methods:{
		toggle(){
			this.show = !this.show;
		}
	}
}
</script>