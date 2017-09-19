<!DOCTYPE html>
<html>
<head>
	<title>Write Article</title>
</head>
<body>
	<form action="/make_article" method="post" enctype="multipart/form-data">
		{{ csrf_field() }}
		
		<input type="text" name="title" ><br>
		
		<textarea name="content" rows="7" width="500"></textarea><br>
		
		<select name="catigory">
			@foreach($catigories as $catigory)
				<option value="{{$catigory->id}}">{{$catigory->name}}</option>
			@endforeach
		</select><br>
		
		<input type="file" name="image" accept="image/*"><br>

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