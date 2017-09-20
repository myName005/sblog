@extends('layouts.app')


@section('scripts')
<script src="{{ asset('js/article.js') }}"></script>
@endsection

@section('content')
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
@endsection