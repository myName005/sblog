<!DOCTYPE html>
<html>
<head>
	<title>Delete catigory</title>
</head>
<body>
<form action="" method="POST">
	{{ csrf_field() }}
	do you want to delete this catigory : {{$catigory->name}}
	<a href="{{ url()->previous()}}">No</a>
	<button type="submit">Yes</button>
</form>
</body>
</html>