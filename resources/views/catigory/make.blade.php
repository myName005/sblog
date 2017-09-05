<!DOCTYPE html>
<html>
<head>
	<title>Make Catigory</title>
</head>
<body>
	<form action="/make_catigory" method="POST">
		{{ csrf_field() }}
		<input type="text" name="name">
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