<template>
	<div class="navbar-item has-dropdown " :class="{'is-active':show}">
		<a class="navbar-link" @click="toggle">
			<slot name="triger"></slot>	
		</a>
		
		<div class="navbar-dropdown">
			<slot></slot>	
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