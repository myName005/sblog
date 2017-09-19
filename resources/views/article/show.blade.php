<!DOCTYPE html>
<html>
<head>
	<title>Article</title>
</head>
<body>
	<h1>{{$article->title}}</h1>
	@markdown($article->content)
	<img src="{{ route('show_image', ['image'=>$article->image->id] ) }}">
</body>
</html>