
@extends('layouts.app')



@section('content')
<div class="columns">
<column class="column is-8 is-offset-2">
<div class="box">
	<form action="/make_article" method="post" 
	 	class="form" enctype="multipart/form-data">
		{{ csrf_field() }}
		
		<div class="field">
			<div class="lable">Title</div>
			<div class="control">
				<input 
					class="input" 
					type="text" 
					name="title" 
					placeholder="Title">
			</div>
		</div>
		
		<div class="field">
			<div class="lable">Content</div>
			<div class="control">
				<textarea 
					class="textarea" 
					name="content" 
					rows="7"
					placeholder="Article content , you can use markdown"
					></textarea>
			</div>
		</div>
		
		
		<div class="field">
			<div class="lable">Catigory</div>
			<div class="control">
				<div class="select">
				<select name="catigory">
					@foreach($catigories as $catigory)
						<option value="{{$catigory->id}}">{{$catigory->name}}</option>
					@endforeach
				</select>
				</div>
			</div>
		</div>

		<div class="field">
			<div class="lable">Image</div>
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
		
		
		
		<div class="field">
			<div class="control">
				<button class="button is-primary" type="submit">Submit</button>
			</div>
		</div>
		



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
</div>
</column>
</div>

@endsection