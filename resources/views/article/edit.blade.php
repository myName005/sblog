<!DOCTYPE html>
<html>
<head>
	<title>Edit</title>
</head>
<body>
<form action="{{route('edit_article', ['id'=>$article->id])}}" method="POST" enctype="multipart/form-data">
	{{ csrf_field() }}

	<input type="text" name="title"
	value="{{ $article->title }}"><br>

	<textarea 
	name="content">{{ $article->content }}</textarea><br>

	<select name="catigory">
		@foreach($catigories as $catigory)
			<option value="{{$catigory->id}}">{{$catigory->name}}</option>
		@endforeach
	</select><br>
	<input type="radio" name="edit_image" value="overwrite">Overwrite previous image
	<input type="radio" name="edit_image" value="keep" checked>keep previous image <br>
	<input type="file" name="image" accept="image/*" ><br>

	<button type="submit">Submit</button><br>
	
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