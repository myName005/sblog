@extends('layouts.app')





@php
$imageSrc = route(
	'show_image',
	['image'=>$article->image->id]
);
@endphp

@section('content')
	<div class="columns">
		<div class="column is-8">
			<article-show 
				title="{{$article->title}}" 
				image="{{$imageSrc}}"
				id="{{$article->id}}"
				@can('edit',$article) 
					:authorized="true" 
				@endcan>
				
				@markdown($article->content)
			</article-show>
		</div>
	</div>
	
@endsection

