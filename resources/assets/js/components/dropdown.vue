<template>
<div :class="dropdownClass">
	<div class="dropdown-trigger">
		<button class="button" @click="toggle">
			<span>
				<slot name="button-content"></slot>
			</span>
			<span class="icon is-small">
				<i class="fa fa-angle-down" aria-hidden="true"></i>
			</span>
		</button>
	</div>
	<div class="dropdown-menu">
		<div class="dropdown-content">
			<slot></slot>
		</div>
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
	},
	computed:{
		dropdownClass(){return{
			'dropdown':true,
			'is-right':true,
			'is-active':this.show
		}}
	}
}
</script>