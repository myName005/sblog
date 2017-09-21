require('./bootstrap');

var app = new Vue({
	el:"#app",
	components:{
		'navbar':require('./components/navbar.vue'),
		'dropdown':require('./components/dropdown.vue'),
		'bulma-field':require('./components/field.vue'),
		'article-preview':require('./components/articlePreview.vue'),
		'article-show':require('./components/articleShow.vue'),
	}
})