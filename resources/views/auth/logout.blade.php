<!DOCTYPE html>
<html>
<head>
	<title>Logout</title>
</head>
<body>
	<form method="POST" action="">
		{{ csrf_field() }}
		Are you sure you want to logout 
		<a href="{{url()->previous()}}">No</a>
		<button type="submit">Yes</button>
	</form>
</body>
</html>