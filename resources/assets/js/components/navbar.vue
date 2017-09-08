<template>
	<nav class="navbar">
	<div class="navbar-brand">
		<a class="navbar-item" href="http://bulma.io">
			Sblog
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
			<a class="navbar-item " href="/">Home</a>
			<a class="navbar-item " href="/list_article">Articles</a>
			<a class="navbar-item " href="/list_catigory">Catigories</a>
		</div>
		<div v-if="logged" class="navbar-end">
				<a href="/logout" class="navbar-item">Logout</a>
		</div>
		<div v-else class="navbar-end">
			<a href="/login" class="navbar-item">Login</a>
			<a href="/register" class="navbar-item">Register</a>
		</div>		
	</div>
</nav>
</template>

<script>
module.exports = {
	props:['logged'],
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
	position: fixed !important;
	top: 0; left: 0; right: 0;
	z-index: 1000;
}

.burger > span {
	background:$navbar-item-color;

}
.burger:hover > span{
	background:$navbar-item-hover-color;
}


</style>