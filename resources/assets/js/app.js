require('./bootstrap');

var app = new Vue({
	el:"#app",
	components:{
		'navbar':require('./components/navbar.vue'),
		'bulma-field':require('./components/field.vue')
	}
})