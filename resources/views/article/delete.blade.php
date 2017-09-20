@extends('layouts.app')

@section('scripts')
<script src="{{ asset('js/article.js') }}"></script>
@endsection

@section('content')
<div class="columns">
	<column class="column is-6 is-offset-3">
		<div class="box  has-text-centered">
			<form action="" method="post">
				{{ csrf_field() }}
				<h3 class="subtitle">
					Do yo want to delete the article bellow?
				</h3>
				<div class="section">
					<div class="columns">
						<article-preview 
						title="{{$article->title}}" 
						content-preview="{{substr($article->content,0,64 )}}"
						thumbnail="{{ route( 'show_image', ['image'=>$article->image->id] ) }}"
						article-link="{{ route( 'show_article', ['article'=>$article->id] ) }}"
						>
					</div>
				</div>
				<div class="controle">
					<a class="button is-primary " href="{{ url()->previous()}}">No</a>
					<button class="button is-default" type="submit">Yes</button>
				</div>
				

			</form>
		</div>
	</column>
</div>

@endsection