<template>
	<div class="field has-addons is-inverted">
		
		<p class="control">
			<a v-bind:class="likeButtonClass" @click="likeClick">
				<span class="icon is-small">
					<i class="fa fa-thumbs-up"></i>
				</span>
				<span>Like</span>
			</a>
		</p>
		<p class="control">
			<span class="button is-static is-default" >
				{{score}}
			</span>
		</p>
		<p class="control">
			<a v-bind:class="dislikeButtonClass" @click="dislikeClick">
				<span class="icon is-small">
					<i class="fa fa-thumbs-down"></i>
				</span>
				<span>Dislike</span>
			</a>
		</p>

	</div>
</template>

<script>
module.exports = {
	props:['state','score'],
	methods:{
		likeClick(){
			if(this.isLiked)
				this.vote(0);
			else
				this.vote(1);
		},
		dislikeClick(){
			if(this.isDisliked)
				this.vote(0);
			else
				this.vote(-1);
		},
		vote(value){
			this.$emit('click',value);
		}

	},
	computed:{
		isLiked(){
			return this.state==1;
		},
		isDisliked(){
			return this.state==-1;
		},
		likeButtonClass()
		{
			return {
				'button':true,
				'is-active':this.isLiked,
				'is-primary':this.isLiked
			}
		},
		dislikeButtonClass()
		{
			return {
				'button':true,
				'is-active':this.isDisliked,
				'is-primary':this.isDisliked
			}
		}
	}
}
</script>
	