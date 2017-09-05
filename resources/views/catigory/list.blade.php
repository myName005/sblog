<!DOCTYPE html>
<html>
<head>
	<title>Catigories</title>
</head>
<body>
<ul>
	@foreach($catigories as $catigory)
		<li>
			<a href="{{ route('show_catigory',['catigory' => $catigory->id]) }}">
				{{$catigory->name}}
			</a>
		</li>
	@endforeach
</ul>
</body>
</html>