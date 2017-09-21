@extends('layouts.app')



@section('content')

<div class="columns is-multiline">
	@foreach($catigories as $catigory)
		<div class="column is-4"><a href="{{ route('show_catigory',['catigory' => $catigory->id]) }}">
				<div class="box">
					<h1 class="title">{{$catigory->name}}</h1>
				</div>
			</a></div>
	@endforeach

</div>
{{$catigories->links()}}
@endsection