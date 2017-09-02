<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Signin</title>
</head>
<body>
<form action="/signin" method="POST">
	{{ csrf_field() }}
	<input type="text" name="name">
	<input type="email" name="email">
	<input type="password" name="password">
	<button type="submit">
		Signin
	</button>
	
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