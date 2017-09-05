<!DOCTYPE html>
<html>
<head>
	<title>Write Article</title>
</head>
<body>
	<form action="/make_article" method="post">
		{{ csrf_field() }}
		
		<input type="text" name="title" >
		
		<textarea name="content"></textarea>
		
		<select name="catigory">
			@foreach($catigories as $catigory)
				<option value="{{$catigory->id}}">{{$catigory->name}}</option>
			@endforeach
		</select>
		
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