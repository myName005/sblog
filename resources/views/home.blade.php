@extends('layouts.app')




@section('content')
<section class="section">
	<div class="tile is-ancestor">
		<div class="tile is-vertical is-8">
			<div class="tile is-parent">
				<div class="tile is-child">
					@php $article = $articles[0];
					@endphp
					<article-preview 
						title="{{$article->title}}" 
						content-preview="{{substr($article->content,0,64 )}}"
						thumbnail="{{ route( 'show_image', ['image'=>$article->image->id] ) }}"
						article-link="{{ route( 'show_article', ['article'=>$article->id] ) }}">
					</article-preview>
				</div>
			</div>
			<div class="tile">
				@for($i = 1;$i<=3;$i++)
					@php $article = $articles[$i]; @endphp
					<div class="tile is-vertical is-parent">
						<div class="tile is-child">
							
							<article-preview 
								title="{{$article->title}}" 
								content-preview="{{substr($article->content,0,64 )}}"
								thumbnail="{{ route( 'show_image', ['image'=>$article->image->id] ) }}"
								article-link="{{ route( 'show_article', ['article'=>$article->id] ) }}">
							</article-preview>
						</div>
					</div>
				@endfor
			</div>
		</div>
		<div class="tile is-vertical ">
			<div class="tile is-child box is-parent">
				<p class="title">Catigories</p>
				<div class="columns is-multiline">
					@foreach($catigories as $catigory)
						<div class="column is-11">
							<a href="{{ route('show_catigory',['catigory' => $catigory->id]) }}" >
								<div class="box is-child" style="border-left: 5px solid {{$catigory->color}}" >
									<p class="subtitle ">{{$catigory->name}}</p>
								</div>
							</a>
						</div>
					@endforeach
				</div>
			</div>
		</div>
	</div>
</section>
<section class="section">
	<div class="columns is-multiline">
		@for($i = 4;$i<count($articles);$i++)
			@php $article = $articles[$i]; @endphp
			<div class="column is-3">
				<article-preview 
					title="{{$article->title}}" 
					content-preview="{{substr($article->content,0,64 )}}"
					thumbnail="{{ route( 'show_image', ['image'=>$article->image->id] ) }}"
					article-link="{{ route( 'show_article', ['article'=>$article->id] ) }}">
				</article-preview>
			</div>
		@endfor
	</div>
	<div class="has-text-centered box">
		<a href="/list_article"><strong>More articles >></strong></a>
	</div>
</section>
@endsection