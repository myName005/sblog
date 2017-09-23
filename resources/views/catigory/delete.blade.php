
@extends('layouts.app')



@section('content')
<div class="columns">
	<column class="column is-6 is-offset-3">
		<div class="box  has-text-centered">
			<form action="" class="form" method="post">
				{{ csrf_field() }}
				<h3 class="subtitle">
					do you want to delete this catigory : {{$catigory->name}}
				</h3>
				
				<div class="controle">
					<a class="button is-primary " href="{{ url()->previous()}}">No</a>
					<button class="button is-default" type="submit">Yes</button>
				</div>
				

			</form>
		</div>
	</column>
</div>
@endsection