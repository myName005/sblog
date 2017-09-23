<template>
	<nav class="navbar">
		<div class="container">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
					<img src="/images/logo.png" class="image is-32x32">
				</a>

				<div :class="{'navbar-burger':true, 'burger':true , 'is-active':showMenu }"
					@click="toggleMenu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div  :class="{'navbar-menu':true,'is-active':showMenu}">
				
				<div class="navbar-start">
					<slot name="navbar-start"></slot>	
				</div>
				<div class="navbar-end">
					<slot name="navbar-end"></slot>	
				</div>
			</div>
		</div>
</nav>
</template>

<script>
module.exports = {
	data() {return{
		showMenu:false
	}},
	methods:{
		toggleMenu(){
			this.showMenu = !this.showMenu;
		}
	}
}
</script>

<style scoped lang="scss">
@import '../../sass/bulma';

.navbar { 
	box-shadow:$card-shadow;
}


</style>