require('./bootstrap');

var app = new Vue({
	el:"#app",
	data:window.data,
	components:{
		'navbar':require('./components/navbar.vue'),
		'dropdown':require('./components/dropdown.vue'),
		'navbar-dropdown':require('./components/navbarDropdown.vue'),
		'bulma-field':require('./components/field.vue'),
		'article-preview':require('./components/articlePreview.vue'),
		'article-show':require('./components/articleShow.vue'),
	}
})