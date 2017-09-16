require('./bootstrap');

var app = new Vue({
	el:"#app",
	components:{
		'navbar':require('./components/navbar.vue'),
		'article-preview':require('./components/articlePreview.vue'),
		'article-show':require('./components/articleShow.vue'),
	}
})