<!DOCTYPE html>
<html>
<head>
	<title>Catigories</title>
</head>
<body>
<ul>
	@foreach($articles as $article)
		<li>
			<a href="{{ route('show_article',['article' => $article->id]) }}">
				{{$article->title}}
			</a>
		</li>
	@endforeach
</ul>
</body>
</html>