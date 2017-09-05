<!DOCTYPE html>
<html>
<head>
	<title>Edit Catigory</title>
</head>
<body>
	<form action="" method="POST">
		{{ csrf_field() }}
		<input type="text" name="name" value="{{$catigory->name}}">
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