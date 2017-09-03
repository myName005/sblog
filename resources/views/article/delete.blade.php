<!DOCTYPE html>
<html>
<head>
	<title>Delete aticle</title>
</head>
<body>
<form action="" method="post">
	{{ csrf_field() }}
	
	Do yo want to delete the article "{{$article->title}}" ?

	<a href="{{ url()->previous()}}">No</a>

	<button type="submit">Yes</button>

</form>
</body>
</html>