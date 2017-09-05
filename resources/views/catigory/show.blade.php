<!DOCTYPE html>
<html>
<head>
	<title>Catigory:{{$catigory->name}}</title>
</head>
<body>
	<h1>{{$catigory->name}}</h1>
	<ul>
		@foreach($articles as $article)
			<li>{{$article->title}}</li>
		@endforeach
	</ul>
	{{$articles->links()}}
</body>
</html>
