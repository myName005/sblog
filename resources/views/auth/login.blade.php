@extends('layouts.app')


@section('scripts')
<script src="{{ asset('js/form.js') }}"></script>
@endsection

@section('content')
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">Login</p>
                </header>


                <form method="POST" 
                    action="{{ route('login') }}"
                    class="card-content">

                    {{ csrf_field() }}

                    <bulma-field 
                        input-type="email" 
                        label="Email" 
                        input-name="email"
                        input-value="{{old('email')}}"
                        :has-errors="{{$errors->has('email') ? 'true' : 'false' }}">
                        </bulma-field>

                    <bulma-field 
                        input-type="password" 
                        label="Password" 
                        input-name="password"
                        :has-errors="{{$errors->has('password') ? 'true' : 'false' }}">
                        </bulma-field>
                    <div class="field">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="remember"
                                value="{{old('remember')}}">
                            Remember me
                        </label>
                    </div>

                    
                                                 
                    
                    <div class="field">
                        <div class="control">
                            <button 
                                type="submit"
                                class="button is-primary">
                                Login
                                </button>
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
        </div>
    </div>
@endsection