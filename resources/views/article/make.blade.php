
@extends('layouts.app')



@section('content')
<div class="columns">
<column class="column is-8 is-offset-2">
<div class="box">
	<form action="/make_article" method="post" 
	 	class="form" enctype="multipart/form-data">
		{{ csrf_field() }}
		
		<div class="field">
			<p class="label">Title</p>
			<div class="control">
				<input 
					class="input" 
					type="text" 
					name="title" 
					placeholder="Title"
					value="{{ old('title') }}">
			</div>
		</div>
		
		<div class="field">
			<div class="label">Content</div>
			<div class="control">
				<textarea 
					class="textarea" 
					name="content" 
					rows="7"
					placeholder="Article content , you can use markdown"
					>{{ old('content') }}</textarea>
			</div>
		</div>
		
		
		<div class="field">
			<div class="label">Catigory</div>
			<div class="control">
				<div class="select">
				<select name="catigory">
					@foreach($catigories as $catigory)
						<option 
							value="{{$catigory->id}}"
							>{{$catigory->name}}</option>
					@endforeach
				</select>
				</div>
			</div>
		</div>

		<div class="field">
			<div class="label">Image</div>
			<div class="control">
<div class="file">
	<label class="file-label">
		<input class="file-input" type="file" name="image" accept="image/*">
		<span class="file-cta">
			<span class="file-icon">
				<i class="fa fa-upload"></i>
			</span>
			<span class="file-label">
				Choose an image file…
			</span>
		</span>
	</label>
</div>
			</div>
		</div>
		
		
		
		<div class="field is-grouped is-grouped-right">
			<div class="control">
				<button class="button is-primary" type="submit">Submit</button>
			</div>
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