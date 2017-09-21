require('./bootstrap');

var app = new Vue({
	el:"#app",
	components:{
		'navbar':require('./components/navbar.vue'),
		'dropdown':require('./components/dropdown.vue')
	}
})