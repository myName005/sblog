@extends('layouts.app')

@section('scripts')
<script src="{{ asset('js/app.js') }}"></script>
@endsection

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