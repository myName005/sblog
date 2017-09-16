@extends('layouts.app')



@section('scripts')
<script src="{{ asset('js/article.js') }}"></script>
@endsection

@php
$imageSrc = route(
	'show_image',
	['image'=>$article->images[0]->id]
);
@endphp

@section('content')
	<div class="columns">
		<div class="column is-8">
			<article-show title="{{$article->title}}" image="{{$imageSrc}}">
				@markdown($article->content)
			</article-show>
		</div>
	</div>
	
@endsection