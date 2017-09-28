@extends('layouts.app')


@section('content')
	<div class="columns">
		<div class="column is-8">
			<article-show :article-data="article_data"></article-show>
		</div>
	</div>
	
@endsection

@include('layouts.partial.js_vars')