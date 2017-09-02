<!DOCTYPE html>
<html>
<head>
	<title>Login</title>
</head>
<body>
	<form action="/login" method="POST">
		
		{{ csrf_field() }}
		<input type="email" name="email">
		<input type="password" name="password">
		<button type="submit">Login</button>

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