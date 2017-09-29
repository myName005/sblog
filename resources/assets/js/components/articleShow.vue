<template>
	<div class="box">
		
		<div class="level">
			<div class="level-left">
				<div class="level-item">
					<strong>{{articleData.title}}</strong>
				</div>
			</div>
			<div class="level-right">
				<div class="level-item">
					<dropdown>
						<i slot="button-content" 
							class="fa fa-cog "></i>
						
						<template v-if="articleData.authorized">
							<a :href="articleData.urls.delete" 
								class="dropdown-item"><i class="fa fa-times"></i> Delete</a>
							<a :href="articleData.urls.edit" 
								class="dropdown-item"><i class="fa fa-pencil"></i> Edit</a>
							<span class="dropdown-divider"></span>
						</template>
						<a href="#" 
							class="dropdown-item"> <i class="fa fa-flag"></i> Report</a>
					</dropdown>
				</div>
			</div>
		</div>
		<div>
			<img class="box-image" :src="articleData.urls.image">

		</div> 
		<div class="content" v-html="articleData.parsed_content"></div>
		<vote-controle 
			@click="vote"
			:score="articleData.votes_info.score"
			:state="articleData.votes_info.state">
		</vote-controle>
	</div>
</template>

<script>

module.exports = {
	props:['articleData'],
	components:{
		'dropdown':require('./dropdown.vue'),
		'vote-controle':require('./voteControl.vue')
	},
	methods:{



		deleteVote(){
			var $this = this
			axios.post('/delete_article_vote',{
				'article_id':this.articleData.id
			}).then(function(res){
				$this.updateVoteInfo(0)
			}).catch(function (err) {
				alert('we have some problems try another time')
			})
		},

		sendVote(value){
			var $this = this

			axios.post('/make_article_vote',{
				'article_id': this.articleData.id,
				value:value

			}).then(function (res) {
				if(res.data.success)
					$this.updateVoteInfo(value)

			}).catch(function (err) {
				if(err.response.status == 401)
					window.location ='/login'
				else
					alert('we have some problems try another time')
			})
		},


		updateVoteInfo(value){
			var vote_info = this.articleData.votes_info
			vote_info.score += value - vote_info.state
			vote_info.state = value
		},



		vote(value){
			if(value==0)
				this.deleteVote()
			else
				this.sendVote(value)
		}
	}

}
</script>