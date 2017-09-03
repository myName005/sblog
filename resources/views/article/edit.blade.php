<!DOCTYPE html>
<html>
<head>
	<title>Edit</title>
</head>
<body>
<form action="{{route('edit_article', ['id'=>$article->id])}}" method="POST">
	{{ csrf_field() }}

	<input type="text" name="title"
	value="{{ $article->title }}">

	<textarea 
	name="content">{{ $article->content }}</textarea>

	<button type="submit">Submit</button>
	
	@if ($errors->any())
		<div style="color:#f66" class="alert alert-danger">
			<ul>
				@foreach ($errors->all() as $error)
					<li>{{ $error }}</li>
				@endforeach
			</ul>
		</div>
	@endif
</form>
</body>
</html>