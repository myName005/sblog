<!DOCTYPE html>
<html>
<head>
	<title>Article</title>
</head>
<body>
	<h1>{{$article->title}}</h1>
	<p>{{$article->content}}</p>
	@foreach($article->images as $image)
		<img src="{{ route('show_image', ['image'=>$image->id] ) }}">
	@endforeach
</body>
</html>