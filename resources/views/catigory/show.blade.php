@extends('layouts.base')



@section('base_content')
<section class="hero  is-dark"
	style="border-bottom: 4px solid {{$catigory->color}}">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{{$catigory->name}}</h1>
			</div>
		</div>
		@can('edit',$catigory)
			<div class="hero-foot">
				<nav class="tabs">
				<div class="container">
				<ul>
					<li><a href="{{ route('edit_catigory',['catigory'=>$catigory->id]) }}">Edit</a></li>
					<li><a href="{{ route('delete_catigory',['catigory'=>$catigory->id]) }}">Delete</a></li>
				</ul>
				</div>
				</nav>
			</div>
		@endcan
</section>
<section class="section">
	<div class="container">
		<div class="columns is-multiline">
			@foreach($articles as $article)
				<div class="column is-4">
					<article-preview 
						title="{{$article->title}}" 
						content-preview="{{substr($article->content,0,64 )}}"
						thumbnail="{{ route( 'show_image', ['image'=>$article->image->id] ) }}"
						article-link="{{ route( 'show_article', ['article'=>$article->id] ) }}">
					</article-preview>
				</div>
			@endforeach
		</div>
		<div >
			{{$articles->links()}}
		</div>
	</div>
</section>

@endsection