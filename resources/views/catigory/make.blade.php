@extends('layouts.app')



@section('content')
<div class="columns">
	<column class="column is-6 is-offset-3">
		<div class="box">
			<form action="/make_catigory" class="form" method="POST">
				{{ csrf_field() }}
				<p class="subtitle">
					Make new Catigory
				</p>
				<div class="field">
					<label class="label">
						Name
					</label>
					<div class="control">
						<input class="input" type="text" name="name">
					</div>
				</div>

				<div class="field">
					<label class="label">
						Color
					</label>
					<div class="control">
						<input class="button is-default" type="color" name="color">
					</div>
				</div>

				
				
				<div class="controle">
					<button class="button is-primary" type="submit">Submit</button>
				</div>
				@if ($errors->any())
                    <ul class=" notification is-danger">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul> 
                @endif

			</form>
		</div>
	</column>
</div>
@endsection