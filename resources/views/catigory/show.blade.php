@extends('layouts.base')



@section('base_content')
<div class="hero is-medium is-dark"
	style="border-bottom: 4px solid {{$catigory->color}}">
	<section class="section">
		<h1 class="title">{{$catigory->name}}</h1>
	</section>
</div>
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