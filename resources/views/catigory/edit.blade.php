@extends('layouts.app')



@section('content')
<div class="columns">
	<column class="column is-6 is-offset-3">
		<div class="box">
			<form action="" class="form" method="POST">
				{{ csrf_field() }}
				<p class="subtitle">
					Edit Catigory
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
						<input class="button is-default" type="color" name="color" value="{{$catigory->color}}">
					</div>
				</div>

				
				<div class="field">
					<div class="controle">
						<button class="button is-primary" type="submit">Submit</button>
					</div>
				</div>
				

				@if ($errors->any())
                    <ul class=" notification is-danger">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                @else
                <div  class="notification is-info">
					If you <strong>don't</strong> want to change the name leave it <strong>blank</strong> 
				</div>
                @endif

			</form>
		</div>
	</column>
</div>
@endsection